import { useEffect, useRef } from "react";

type Props = {
  accent?: string;     // color accent
  density?: number;    // particle density
  rings?: number;      // number of orbital rings
  speed?: number;      // overall speed
};

export default function OrbitBackground({
  accent = "#f59e0b",
  density = 70,
  rings = 5,
  speed = 1,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      c.width = Math.floor(w * dpr);
      c.height = Math.floor(h * dpr);
      c.style.width = `${w}px`;
      c.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // particle properties
    type P = { r:number; a:number; av:number; s:number; alpha:number; };
    const W = () => c.clientWidth, H = () => c.clientHeight;
    const R = () => Math.min(W(), H()) * 0.42;

    const ps: P[] = Array.from({ length: density }).map((_, i) => {
      const ringIdx = i % rings;
      const rr = (0.15 + (ringIdx / (rings - 1)) * 0.8) * R();
      return {
        r: rr + (Math.random() - 0.5) * 12,
        a: Math.random() * Math.PI * 2,
        av: ((Math.random() * 0.6 + 0.2) * (Math.random() < 0.5 ? -1 : 1)) * 0.002 * speed,
        s: Math.random() * 2 + 0.8,
        alpha: Math.random() * 0.6 + 0.2,
      };
    });

    // shooter properties
    type S = { x:number;y:number;vx:number;vy:number;life:number; };
    const shooters: S[] = [];

    let raf = 0;
    const loop = () => {
      const w = W(), h = H();
      // background gradient
      const g = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w,h)*0.9);
      g.addColorStop(0, "#0b0b0c");
      g.addColorStop(1, "#040404");
      ctx.fillStyle = g;
      ctx.fillRect(0,0,w,h);

      // draw rings
      ctx.strokeStyle = "rgba(255,255,255,0.06)";
      for (let i=0;i<rings;i++){
        const rr = (0.15 + (i/(rings-1))*0.8) * R();
        ctx.beginPath();
        ctx.arc(w/2, h/2, rr, 0, Math.PI*2);
        ctx.stroke();
      }

      // draw particles
      ps.forEach(p=>{
        p.a += p.av;
        const x = w/2 + Math.cos(p.a) * p.r;
        const y = h/2 + Math.sin(p.a) * p.r;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = accent;
        ctx.fillRect(x, y, p.s, p.s);
      });
      ctx.globalAlpha = 1;

      // spawn shooting stars
      if (Math.random() < 0.02 * speed && shooters.length < 3){
        const fromLeft = Math.random() < 0.5;
        shooters.push({
          x: fromLeft ? -20 : w + 20,
          y: Math.random()*h*0.8 + h*0.1,
          vx: (fromLeft ? 1 : -1) * (2.5 + Math.random()*1.5),
          vy: 0.8 + Math.random()*0.6,
          life: 1,
        });
      }

      // draw shooting stars
      shooters.forEach(s=>{
        s.x += s.vx * speed;
        s.y += s.vy * speed;
        s.life *= 0.985;
        ctx.strokeStyle = accent;
        ctx.globalAlpha = 0.6 * s.life;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx*10, s.y - s.vy*10);
        ctx.stroke();
        ctx.globalAlpha = 1;
      });
      // filter out dead shooters
      for (let i=shooters.length-1;i>=0;i--){
        const s = shooters[i];
        if (s.life < 0.05 || s.x < -50 || s.x > w+50 || s.y > h+50) shooters.splice(i,1);
      }

      raf = requestAnimationFrame(loop);
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [accent, density, rings, speed]);

  // render canvas
  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
