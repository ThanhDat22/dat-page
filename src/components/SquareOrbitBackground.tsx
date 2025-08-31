// src/components/SquareOrbitBackground.tsx
import { useEffect, useRef } from "react";

type Props = {
  accent?: string;     // particle / shooter color
  density?: number;    // number of drifting particles
  squares?: number;    // number of nested rotating squares
  speed?: number;      // overall animation speed (1 = default)
  rotateSpeed?: number;// square rotation speed multiplier
};

export default function SquareOrbitBackground({
  accent = "#f59e0b",
  density = 80,
  squares = 6,
  speed = 1,
  rotateSpeed = 0.4,
}: Props) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current!;
    const ctx = c.getContext("2d")!;

    // Hi-DPI + responsive canvas
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

    const W = () => c.clientWidth, H = () => c.clientHeight;
    const R = () => Math.min(W(), H()) * 0.42;

    // --- Particles (small drifting squares) ---
    type P = { r:number; a:number; av:number; s:number; alpha:number; };
    const ringCount = Math.max(2, squares); // reuse count to spread particles
    const particles: P[] = Array.from({ length: density }).map((_, i) => {
      const ringIdx = i % ringCount;
      const base = (0.15 + (ringIdx / (ringCount - 1)) * 0.8) * R();
      return {
        r: base + (Math.random() - 0.5) * 14,
        a: Math.random() * Math.PI * 2,
        av: ((Math.random() * 0.6 + 0.2) * (Math.random() < 0.5 ? -1 : 1)) * 0.002 * speed,
        s: Math.random() * 2 + 0.9,
        alpha: Math.random() * 0.6 + 0.25,
      };
    });

    // --- Shooters (streaking squares) ---
    type S = { x:number; y:number; vx:number; vy:number; life:number; };
    const shooters: S[] = [];

    let t = 0;    // time for rotation
    let raf = 0;

    const loop = () => {
      const w = W(), h = H();

      // Background: subtle radial vignette
      const g = ctx.createRadialGradient(w/2, h/2, 0, w/2, h/2, Math.max(w,h)*0.9);
      g.addColorStop(0, "#0f1011");
      g.addColorStop(1, "#0a0a0b");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // Rotating nested squares
      const baseR = R();
      const rot = (t * 0.001 * rotateSpeed * speed); // radians
      ctx.save();
      ctx.translate(w/2, h/2);
      ctx.rotate(rot);
      ctx.strokeStyle = "rgba(255,255,255,0.07)";
      for (let i = 0; i < squares; i++) {
        const ratio = 0.18 + (i / Math.max(1, squares - 1)) * 0.7;
        const side = baseR * ratio * 2; // side length
        ctx.save();
        // small incremental rotation per square to get the “windmill” feel
        ctx.rotate(i * 0.07);
        ctx.beginPath();
        ctx.rect(-side/2, -side/2, side, side);
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();

      // Drifting particles (orbiting)
      particles.forEach(p => {
        p.a += p.av;
        const x = w/2 + Math.cos(p.a) * p.r;
        const y = h/2 + Math.sin(p.a) * p.r;
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = accent;
        ctx.fillRect(x, y, p.s, p.s);
      });
      ctx.globalAlpha = 1;

      // Random shooters
      if (Math.random() < 0.02 * speed && shooters.length < 3) {
        const fromLeft = Math.random() < 0.5;
        shooters.push({
          x: fromLeft ? -20 : w + 20,
          y: Math.random() * h * 0.8 + h * 0.1,
          vx: (fromLeft ? 1 : -1) * (2.4 + Math.random() * 1.6),
          vy: 0.7 + Math.random() * 0.7,
          life: 1,
        });
      }

      // Draw shooters with tails
      shooters.forEach(s => {
        s.x += s.vx * speed;
        s.y += s.vy * speed;
        s.life *= 0.985;
        ctx.strokeStyle = accent;
        ctx.globalAlpha = 0.65 * s.life;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - s.vx * 10, s.y - s.vy * 10);
        ctx.stroke();
        ctx.globalAlpha = 1;

        // head square
        ctx.fillStyle = accent;
        ctx.globalAlpha = Math.max(0, s.life - 0.1);
        ctx.fillRect(s.x - 2, s.y - 2, 4, 4);
        ctx.globalAlpha = 1;
      });

      // Cull shooters
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        if (s.life < 0.05 || s.x < -60 || s.x > w + 60 || s.y > h + 60) shooters.splice(i, 1);
      }

      t += 16; // advance time
      raf = requestAnimationFrame(loop);
    };

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!media.matches) raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [accent, density, squares, speed, rotateSpeed]);

  return <canvas ref={ref} className="fixed inset-0 z-0 pointer-events-none" />;
}
