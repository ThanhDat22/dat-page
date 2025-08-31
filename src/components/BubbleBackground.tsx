import { useEffect, useRef } from "react";

type Props = {
  accent?: string;   // main bubble color
  count?: number;    // number of bubbles
  speed?: number;    // overall speed
};

export default function BubbleBackground({
  accent = "#38bdf8", // cyan default
  count = 40,
  speed = 1,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = window.innerWidth * dpr;
      c.height = window.innerHeight * dpr;
      c.style.width = window.innerWidth + "px";
      c.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    type Bubble = { x: number; y: number; r: number; vy: number; alpha: number };
    const bubbles: Bubble[] = Array.from({ length: count }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 8 + 4,
      vy: Math.random() * 0.5 + 0.2,
      alpha: Math.random() * 0.5 + 0.3,
    }));

    let raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;

      // dark gradient background
      const g = ctx.createLinearGradient(0, 0, 0, h);
      g.addColorStop(0, "#0f172a");
      g.addColorStop(1, "#020617");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // draw bubbles
      bubbles.forEach(b => {
        b.y -= b.vy * speed;
        if (b.y + b.r < 0) {
          b.y = h + b.r;
          b.x = Math.random() * w;
        }
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = b.alpha;
        ctx.fill();
      });
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, [accent, count, speed]);

  return <canvas ref={ref} className="fixed inset-0 z-10 pointer-events-none" />;
}
