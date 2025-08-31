import { useEffect, useRef } from "react";

type Props = {
  accent?: string;   // particle color
  count?: number;    // number of particles
  speed?: number;    // particle drift speed
};

export default function HeroBackground({
  accent = "#f472b6", // pink accent by default
  count = 60,
  speed = 0.5,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = window.innerWidth * dpr;
      c.height = window.innerHeight * dpr;
      c.style.width = `${window.innerWidth}px`;
      c.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number };
    const particles: P[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 3 + 1,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let t = 0;
    let raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;

      // animated gradient background
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, `hsl(${(t % 360)}, 70%, 15%)`);
      g.addColorStop(1, `hsl(${(t + 60) % 360}, 70%, 10%)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // drifting particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -p.r) p.x = w + p.r;
        if (p.x > w + p.r) p.x = -p.r;
        if (p.y < -p.r) p.y = h + p.r;
        if (p.y > h + p.r) p.y = -p.r;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      t += 0.5; // color cycle speed
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [accent, count, speed]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
