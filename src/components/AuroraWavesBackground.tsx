import { useEffect, useRef } from "react";

type Props = { hue?: number; speed?: number; layers?: number; };
export default function AuroraWaves({ hue = 200, speed = 0.3, layers = 3 }: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!, ctx = c.getContext("2d")!;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const resize = () => {
      c.width = innerWidth * dpr; c.height = innerHeight * dpr;
      c.style.width = innerWidth + "px"; c.style.height = innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }; resize(); addEventListener("resize", resize);

    let t = 0, raf = 0;
    const loop = () => {
      const w = c.clientWidth, h = c.clientHeight;
      ctx.fillStyle = "#0a0a0b"; ctx.fillRect(0,0,w,h);

      for (let k = 0; k < layers; k++) {
        const yBase = h * (0.3 + k * 0.25);
        ctx.beginPath();
        for (let x = 0; x <= w; x += 4) {
          const y = yBase + Math.sin((x + t + k*120) * 0.006) * 40
                           + Math.sin((x*0.5 + t*0.6 + k*80) * 0.004) * 25;
          if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.lineTo(w, h); ctx.lineTo(0, h); ctx.closePath();
        ctx.fillStyle = `hsla(${(hue + k*20) % 360}, 80%, 60%, ${0.18 - k*0.03})`;
        ctx.fill();
      }

      t += 0.8 * speed;
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); };
  }, [hue, speed, layers]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
