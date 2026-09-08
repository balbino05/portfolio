"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
};

function readAccent() {
  const styles = getComputedStyle(document.documentElement);
  const accent = styles.getPropertyValue("--accent").trim() || "#fbbf24";
  const pine = styles.getPropertyValue("--pine").trim() || "#2dd4bf";
  const ink = styles.getPropertyValue("--ink").trim() || "#f8fafc";
  return { accent, pine, ink };
}

function hexToRgba(hex: string, alpha: number) {
  const cleaned = hex.replace("#", "");
  if (cleaned.length !== 6) {
    return `rgba(251, 191, 36, ${alpha})`;
  }
  const r = Number.parseInt(cleaned.slice(0, 2), 16);
  const g = Number.parseInt(cleaned.slice(2, 4), 16);
  const b = Number.parseInt(cleaned.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) {
      return;
    }

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      return;
    }

    const gfx = canvasEl.getContext("2d");
    if (!gfx) {
      return;
    }

    const canvas: HTMLCanvasElement = canvasEl;
    const context: CanvasRenderingContext2D = gfx;

    let animationId = 0;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    let colors = readAccent();
    const mouse = { x: -9999, y: -9999, active: false };

    function countForArea() {
      const area = width * height;
      return Math.max(28, Math.min(90, Math.floor(area / 18000)));
    }

    function createParticles() {
      const count = countForArea();
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: Math.random() * 1.6 + 0.6,
      }));
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
      createParticles();
    }

    function draw() {
      context.clearRect(0, 0, width, height);
      const linkDistance = Math.min(140, width * 0.12);
      const mouseDistance = 160;

      for (const particle of particles) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > width) {
          particle.vx *= -1;
        }
        if (particle.y < 0 || particle.y > height) {
          particle.vy *= -1;
        }

        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseDistance && dist > 0.01) {
            particle.vx += (dx / dist) * 0.02;
            particle.vy += (dy / dist) * 0.02;
          }
        }

        const speed = Math.hypot(particle.vx, particle.vy);
        if (speed > 0.8) {
          particle.vx *= 0.98;
          particle.vy *= 0.98;
        }
      }

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            const alpha = (1 - dist / linkDistance) * 0.28;
            context.strokeStyle = hexToRgba(colors.accent, alpha);
            context.lineWidth = 1;
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(b.x, b.y);
            context.stroke();
          }
        }

        if (mouse.active) {
          const a = particles[i];
          const dx = a.x - mouse.x;
          const dy = a.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist < mouseDistance) {
            const alpha = (1 - dist / mouseDistance) * 0.35;
            context.strokeStyle = hexToRgba(colors.pine, alpha);
            context.beginPath();
            context.moveTo(a.x, a.y);
            context.lineTo(mouse.x, mouse.y);
            context.stroke();
          }
        }
      }

      for (const particle of particles) {
        context.beginPath();
        context.fillStyle = hexToRgba(colors.ink, 0.55);
        context.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        context.fill();
      }

      animationId = window.requestAnimationFrame(draw);
    }

    function onPointerMove(event: PointerEvent) {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    }

    function onPointerLeave() {
      mouse.active = false;
    }

    const themeObserver = new MutationObserver(() => {
      colors = readAccent();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    resize();
    draw();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);

    return () => {
      window.cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      themeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
      aria-hidden
    />
  );
}
