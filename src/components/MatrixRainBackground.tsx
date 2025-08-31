import { useEffect, useRef } from "react";

type Props = { density?: number; speed?: number; accent?: string; };
export default function MatrixRain({ density = 40, speed = 1, accent = "#22c55e" }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = innerWidth * dpr; c.height = innerHeight * dpr;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }; resize(); addEventListener("resize", resize);

    const fontSize = 16, cols = Math.ceil(innerWidth / fontSize);
    const drops = new Array(cols).fill(0).map(() => Math.random() * -100);
    const chars = "01アイウエオ力λΣΞЖЖЖ".split("");

    let raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;
      // trail
      ctx.fillStyle = "rgba(0,0,0,0.07)"; ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = accent; ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < cols; i++) {
        const ch = chars[Math.floor(Math.random() * chars.length)];
        const x = i * fontSize, y = drops[i] * fontSize;
        ctx.fillText(ch, x, y);
        drops[i] += 0.8 * speed;
        if (y > h && Math.random() < 0.02) drops[i] = Math.random() * -20;
      }
      raf = requestAnimationFrame(loop);
    };
    ctx.fillStyle = "#000"; ctx.fillRect(0,0,c.clientWidth,c.clientHeight);
    raf = requestAnimationFrame(loop);

    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [density, speed, accent]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
