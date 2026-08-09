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
  disperseFactor: number;
  // Gradient color at this pixel's position
  r: number;
  g: number;
  b: number;
}

interface SolidPixel {
  x: number;
  y: number;
  size: number;
  r: number;
  g: number;
  b: number;
}

/**
 * Tamil "துகள்" with vibrant gradient (blue → magenta → orange) and
 * left-side particle dispersion. Particles carry the gradient color.
 *
 * The canvas measures its own container and renders at the real pixel
 * dimensions (accounting for devicePixelRatio), so the word stays crisp
 * and correctly proportioned on every screen size instead of being
 * stretched from a fixed buffer.
 */
const ThukalParticles = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const solidPixelsRef = useRef<SolidPixel[]>([]);
  const animRef = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const mouseRef = useRef({ x: -999, y: -999 });
  // Logical (CSS-pixel) dimensions of the drawing area.
  const [dims, setDims] = useState({ width: 0, height: 0 });

  // Map a normalized position (0..1 diagonal from bottom-left to top-right) to gradient color
  const getGradientColor = useCallback(
    (nx: number, ny: number): [number, number, number] => {
      // Diagonal gradient: bottom-left (blue/purple) → center (magenta/pink) → top-right (orange/amber)
      const t = nx * 0.6 + (1 - ny) * 0.4; // 0 = bottom-left, 1 = top-right

      // Color stops: blue(0) → purple(0.25) → magenta(0.45) → pink(0.6) → orange(0.8) → amber(1)
      let r: number, g: number, b: number;
      if (t < 0.25) {
        const s = t / 0.25;
        r = 80 + s * 60;    // 80 → 140
        g = 50 + s * 20;    // 50 → 70
        b = 220 - s * 30;   // 220 → 190
      } else if (t < 0.45) {
        const s = (t - 0.25) / 0.2;
        r = 140 + s * 80;   // 140 → 220
        g = 70 - s * 30;    // 70 → 40
        b = 190 - s * 20;   // 190 → 170
      } else if (t < 0.65) {
        const s = (t - 0.45) / 0.2;
        r = 220 + s * 25;   // 220 → 245
        g = 40 + s * 60;    // 40 → 100
        b = 170 - s * 70;   // 170 → 100
      } else if (t < 0.85) {
        const s = (t - 0.65) / 0.2;
        r = 245 + s * 10;   // 245 → 255
        g = 100 + s * 60;   // 100 → 160
        b = 100 - s * 60;   // 100 → 40
      } else {
        const s = (t - 0.85) / 0.15;
        r = 255;
        g = 160 + s * 40;   // 160 → 200
        b = 40 - s * 20;    // 40 → 20
      }

      return [Math.round(r), Math.round(g), Math.round(b)];
    },
    []
  );

  const sampleText = useCallback(
    (text: string, fontSize: number, w: number, h: number) => {
      const offscreen = document.createElement("canvas");
      offscreen.width = w;
      offscreen.height = h;
      const ctx = offscreen.getContext("2d");
      if (!ctx) return { pixels: [] as { x: number; y: number; alpha: number }[], textBounds: { left: 0, right: w, top: 0, bottom: h } };

      ctx.fillStyle = "#fff";
      ctx.font = `800 ${fontSize}px "Anek Tamil", sans-serif`;
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

  // Measure the container and keep logical dimensions in sync with layout.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);
      setDims((prev) =>
        prev.width === w && prev.height === h ? prev : { width: w, height: h }
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // (Re)build the particle field whenever the drawing size changes.
  useEffect(() => {
    const { width, height } = dims;
    if (width <= 0 || height <= 0) return;

    // Fit the whole word inside the box: shrink the font until "துகள்"
    // spans at most ~86% of the available width and ~70% of the height.
    let fontSize = Math.min(height * 0.55, width * 0.32, 200);
    const measureCtx = document.createElement("canvas").getContext("2d");
    if (measureCtx) {
      const maxTextWidth = width * 0.86;
      // Binary-ish shrink loop — cheap and runs only on resize.
      for (let i = 0; i < 24; i++) {
        measureCtx.font = `800 ${fontSize}px "Anek Tamil", sans-serif`;
        const measured = measureCtx.measureText("துகள்").width;
        if (measured <= maxTextWidth || fontSize <= 12) break;
        fontSize *= Math.max(0.9, maxTextWidth / measured);
      }
    }

    const { pixels, textBounds } = sampleText("துகள்", fontSize, width, height);
    if (pixels.length === 0) return;

    const textWidth = textBounds.right - textBounds.left;
    const textHeight = textBounds.bottom - textBounds.top;
    const disperseEdge = textBounds.left + textWidth * 0.45;

    const particles: Particle[] = [];
    const solid: SolidPixel[] = [];

    for (const p of pixels) {
      // Normalized position within the text bounds for gradient
      const nx = (p.x - textBounds.left) / textWidth;
      const ny = (p.y - textBounds.top) / textHeight;
      const [r, g, b] = getGradientColor(nx, ny);

      const disperseAmount = p.x < disperseEdge
        ? 1 - (p.x - textBounds.left) / (disperseEdge - textBounds.left)
        : 0;

      if (disperseAmount > 0.05) {
        particles.push({
          x: p.x,
          y: p.y,
          originX: p.x,
          originY: p.y,
          vx: 0,
          vy: 0,
          size: 0.8 + Math.random() * 2 + disperseAmount * 1.8,
          opacity: p.alpha * (0.3 + (1 - disperseAmount) * 0.7),
          disperseFactor: disperseAmount,
          r, g, b,
        });
      } else {
        solid.push({ x: p.x, y: p.y, size: 2, r, g, b });
      }
    }

    particlesRef.current = particles;
    solidPixelsRef.current = solid;
  }, [dims, sampleText, getGradientColor]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const { width, height } = dims;
    if (!canvas || width <= 0 || height <= 0) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Render at device resolution for crispness, but keep the drawing
    // coordinate system in logical CSS pixels.
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);

    let time = 0;

    const animate = () => {
      time++;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      const particles = particlesRef.current;
      const solid = solidPixelsRef.current;

      // Draw solid part with gradient colors
      for (const s of solid) {
        ctx.fillStyle = `rgb(${s.r},${s.g},${s.b})`;
        ctx.fillRect(s.x - 1, s.y - 1, s.size, s.size);
      }

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const mouseRadius = 120;
      const breathe = Math.sin(time * 0.015) * 0.5 + 0.5;

      for (const p of particles) {
        const scatterAngle = Math.PI + Math.sin(p.originY * 0.05 + time * 0.008) * 0.6;
        const scatterDist = p.disperseFactor * (20 + breathe * 45);
        let tx = p.originX + Math.cos(scatterAngle) * scatterDist;
        let ty = p.originY + Math.sin(scatterAngle) * scatterDist * 0.5;

        if (isHovering) {
          const dx = p.x - mx;
          const dy = p.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouseRadius && dist > 0) {
            const force = ((mouseRadius - dist) / mouseRadius) ** 2;
            tx += (dx / dist) * force * 90;
            ty += (dy / dist) * force * 90;
          }
        }

        const dx = tx - p.x;
        const dy = ty - p.y;
        p.vx += dx * 0.05;
        p.vy += dy * 0.05;
        p.vx *= 0.88;
        p.vy *= 0.88;
        p.x += p.vx;
        p.y += p.vy;

        const alpha = p.opacity * (0.5 + (1 - p.disperseFactor * breathe) * 0.5);
        const size = p.size * (0.7 + p.disperseFactor * breathe * 0.5);

        // Glow layer
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${(alpha * 0.15).toFixed(3)})`;
        ctx.fill();

        // Core particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.r},${p.g},${p.b},${alpha.toFixed(3)})`;
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(animate);
    };

    animRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animRef.current);
  }, [dims, isHovering]);

  const updateMouse = (clientX: number, clientY: number) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0 || rect.height === 0) return;
    mouseRef.current = {
      x: ((clientX - rect.left) / rect.width) * dims.width,
      y: ((clientY - rect.top) / rect.height) * dims.height,
    };
  };

  return (
    <div ref={containerRef} className="w-full h-full">
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair touch-none"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        onMouseMove={(e) => updateMouse(e.clientX, e.clientY)}
        onTouchStart={() => setIsHovering(true)}
        onTouchEnd={() => setIsHovering(false)}
        onTouchMove={(e) => {
          const t = e.touches[0];
          if (t) updateMouse(t.clientX, t.clientY);
        }}
      />
    </div>
  );
};

export default ThukalParticles;
