import { useEffect, useRef } from "react";

type Props = { nodes?: number; linkDist?: number; accent?: string; };
export default function ConstellationNetwork({ nodes = 80, linkDist = 120, accent = "#f59e0b" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = innerWidth * dpr; c.height = innerHeight * dpr;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }; resize(); addEventListener("resize", resize);

    type N = { x:number; y:number; vx:number; vy:number; };
    const ns: N[] = Array.from({ length: nodes }, () => ({
      x: Math.random()*innerWidth, y: Math.random()*innerHeight,
      vx: (Math.random()-0.5)*0.6, vy: (Math.random()-0.5)*0.6
    }));

    let raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;
      ctx.fillStyle = "#0b0b0c"; ctx.fillRect(0,0,w,h);

      // links
      ctx.strokeStyle = accent; ctx.lineWidth = 1; ctx.globalAlpha = 0.18;
      for (let i=0;i<ns.length;i++){
        for (let j=i+1;j<ns.length;j++){
          const a = ns[i], b = ns[j];
          const dx=a.x-b.x, dy=a.y-b.y, d=Math.hypot(dx,dy);
          if (d < linkDist) { ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); }
        }
      }
      ctx.globalAlpha = 1;

      // nodes
      ctx.fillStyle = accent;
      ns.forEach(n => {
        n.x += n.vx; n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
        ctx.fillRect(n.x-1, n.y-1, 2, 2);
      });

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [nodes, linkDist, accent]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
