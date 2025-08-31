import { useEffect, useRef } from "react";

type Props = { count?: number; speed?: number; };
export default function StarfieldParallax({ count = 300, speed = 0.6 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = innerWidth * dpr; c.height = innerHeight * dpr;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }; resize(); addEventListener("resize", resize);

    type Star = { x:number; y:number; z:number; };
    const stars: Star[] = Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * innerWidth,
      y: (Math.random() - 0.5) * innerHeight,
      z: Math.random() * innerWidth
    }));

    let raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;
      ctx.fillStyle = "#0b0b0c"; ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = "#f8fafc";
      for (const s of stars) {
        s.z -= speed; if (s.z <= 1) s.z = innerWidth;
        const k = 128 / s.z;                       // perspective
        const x = w/2 + s.x * k, y = h/2 + s.y * k;
        const size = (1 - s.z / innerWidth) * 2 + 0.2;
        ctx.globalAlpha = Math.min(1, 1.2 - s.z / innerWidth);
        ctx.fillRect(x, y, size, size);
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [count, speed]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
