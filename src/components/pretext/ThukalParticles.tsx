import { useEffect, useRef, useState, useCallback } from "react";

interface Particle {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  // How far left this particle is (0=right edge, 1=far left) — controls dispersion
  disperseFactor: number;
}

interface ThukalParticlesProps {
  width: number;
  height: number;
}

/**
 * Tamil letter "த" (Tha from Thukal) with left-side particle dispersion.
 * Right side is solid, left side dissolves into scattered particles.
 * Mouse interaction causes particles to scatter further.
 */
const ThukalParticles = ({ width, height }: ThukalParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const solidPixelsRef = useRef<{ x: number; y: number; size: number }[]>([]);
  const animRef = useRef<number>(0);
  const initializedRef = useRef(false);
  const [isHovering, setIsHovering] = useState(false);
  const mouseRef = useRef({ x: -999, y: -999 });

  const sampleText = useCallback(
    (text: string, fontSize: number, w: number, h: number) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext("2d");
      if (!ctx) return { pixels: [] as { x: number; y: number; alpha: number }[], textBounds: { left: 0, right: w, top: 0, bottom: h } };

      ctx.fillStyle = "#fff";
      ctx.font = `700 ${fontSize}px "Noto Sans Tamil", "Plus Jakarta Sans", sans-serif`;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(text, w / 2, h / 2);

      const imageData = ctx.getImageData(0, 0, w, h);
      const pixels: { x: number; y: number; alpha: number }[] = [];
      let left = w, right = 0, top = h, bottom = 0;

      for (let y = 0; y < h; y += 2) {
        for (let x = 0; x < w; x += 2) {
          const idx = (y * w + x) * 4;
          const a = imageData.data[idx + 3];
          if (a > 30) {
            pixels.push({ x, y, alpha: a / 255 });
            if (x < left) left = x;
            if (x > right) right = x;
            if (y < top) top = y;
            if (y > bottom) bottom = y;
          }
        }
      }

      return { pixels, textBounds: { left, right, top, bottom } };
    },
    []
  );

  useEffect(() => {
    if (width <= 0 || height <= 0 || initializedRef.current) return;

    const fontSize = Math.min(height * 0.7, width * 0.45, 280);
    const { pixels, textBounds } = sampleText("த", fontSize, width, height);
    if (pixels.length === 0) return;

    const textWidth = textBounds.right - textBounds.left;
    const textCenterX = (textBounds.left + textBounds.right) / 2;

    // Dispersion threshold: pixels left of 40% of the text width disperse
    const disperseEdge = textBounds.left + textWidth * 0.45;

    const particles: Particle[] = [];
    const solid: { x: number; y: number; size: number }[] = [];

    for (const p of pixels) {
      // How far into the "disperse zone" is this pixel (0 = at edge, 1 = far left)
      const disperseAmount = p.x < disperseEdge
        ? 1 - (p.x - textBounds.left) / (disperseEdge - textBounds.left)
        : 0;

      if (disperseAmount > 0.05) {
        // This pixel becomes a particle
        const angle = Math.PI + (Math.random() - 0.5) * 1.2; // Scatter to the left
        const dist = disperseAmount * (30 + Math.random() * 80);
        particles.push({
          x: p.x,
          y: p.y,
          originX: p.x,
          originY: p.y,
          vx: 0,
          vy: 0,
          size: 0.8 + Math.random() * 2 + disperseAmount * 1.5,
          opacity: p.alpha * (0.3 + (1 - disperseAmount) * 0.7),
          disperseFactor: disperseAmount,
        });
      } else {
        // Solid pixel — render as static dot
        solid.push({ x: p.x, y: p.y, size: 2 });
      }
    }

    particlesRef.current = particles;
    solidPixelsRef.current = solid;
    initializedRef.current = true;
  }, [width, height, sampleText]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || width <= 0 || height <= 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let time = 0;

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const solid = solidPixelsRef.current;

      // Draw solid (non-dispersed) part of the letter
      const isDark = document.documentElement.classList.contains("dark") ||
        getComputedStyle(document.documentElement).getPropertyValue("--background").trim().startsWith("168");
      const baseColor = isDark ? "rgba(255,255,255," : "rgba(30,60,50,";

      for (const s of solid) {
        ctx.fillStyle = `${baseColor}0.95)`;
        ctx.fillRect(s.x - 1, s.y - 1, s.size, s.size);
      }

      // Animate particles
      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 120;

      // Breathing cycle for auto-dispersion
      const breathe = Math.sin(time * 0.015) * 0.5 + 0.5; // 0..1

      for (const p of particles) {
        // Base scatter position — dispersed to the left
        const scatterAngle = Math.PI + Math.sin(p.originY * 0.05 + time * 0.008) * 0.6;
        const scatterDist = p.disperseFactor * (20 + breathe * 40);
        let tx = p.originX + Math.cos(scatterAngle) * scatterDist;
        let ty = p.originY + Math.sin(scatterAngle) * scatterDist * 0.5;

        // Mouse repulsion
        if (isHovering) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius) {
            const force = ((mouseRadius - dist) / mouseRadius) ** 2;
            tx += (dx / dist) * force * 80;
            ty += (dy / dist) * force * 80;
          }
        }

        // Spring physics
        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * 0.05;
        p.vy += dy * 0.05;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        // Draw particle
        const alpha = p.opacity * (0.5 + (1 - p.disperseFactor * breathe) * 0.5);
        const size = p.size * (0.7 + p.disperseFactor * breathe * 0.5);

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${baseColor}${alpha.toFixed(2)})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [width, height, isHovering]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className="w-full h-full cursor-crosshair"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onMouseMove={(e) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        mouseRef.current = {
          x: ((e.clientX - rect.left) / rect.width) * width,
          y: ((e.clientY - rect.top) / rect.height) * height,
        };
      }}
    />
  );
};

export default ThukalParticles;
