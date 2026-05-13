'use client';

import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  baseOpacity: number;
  opacity: number;
  phase: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  startTime: number;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let frameCount = 0;
    let isVisible = true;

    const mouse = { x: -1000, y: -1000, active: false };
    const ripples: Ripple[] = [];

    const colors = [
      { color: 'rgba(201, 168, 76,', weight: 0.4 },
      { color: 'rgba(122, 98, 48,', weight: 0.35 },
      { color: 'rgba(255, 255, 255,', weight: 0.25 },
    ];

    function pickColor(): string {
      const r = Math.random();
      if (r < colors[0].weight) return colors[0].color;
      if (r < colors[0].weight + colors[1].weight) return colors[1].color;
      return colors[2].color;
    }

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    resize();

    const count = Math.min(160, Math.max(60, Math.floor(window.innerWidth / 10)));
    const particles: Particle[] = [];

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: 1 + Math.random() * 1.5,
        color: pickColor(),
        baseOpacity: 0.3 + Math.random() * 0.6,
        opacity: 0,
        phase: Math.random() * Math.PI * 2,
      });
    }

    function handleMouseMove(e: MouseEvent) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    }

    function handleMouseLeave() {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    }

    function handleClick(e: MouseEvent) {
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        radius: 0,
        maxRadius: 200,
        opacity: 0.6,
        startTime: performance.now(),
      });

      for (const p of particles) {
        const dx = p.x - e.clientX;
        const dy = p.y - e.clientY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150 && dist > 0) {
          const force = (1 - dist / 150) * 3;
          p.vx += (dx / dist) * force;
          p.vy += (dy / dist) * force;
        }
      }
    }

    function handleVisibility() {
      isVisible = !document.hidden;
      if (isVisible) animationId = requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('click', handleClick);
    document.addEventListener('visibilitychange', handleVisibility);

    function draw() {
      if (!isVisible || !ctx || !canvas) return;
      frameCount++;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const now = performance.now();

      for (const p of particles) {
        if (mouse.active) {
          const dx = mouse.x - p.x;
          const dy = mouse.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 && dist > 0) {
            p.vx += (dx / dist) * 0.015;
            p.vy += (dy / dist) * 0.015;
          }
        }

        p.vx *= 0.99;
        p.vy *= 0.99;

        const maxSpeed = 0.8;
        const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        if (!prefersReduced) {
          p.opacity = p.baseOpacity + Math.sin(now * 0.001 + p.phase) * 0.15;
        } else {
          p.opacity = p.baseOpacity;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${p.opacity})`;
        ctx.fill();
      }

      if (frameCount % 2 === 0) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 130) {
              const lineOpacity = (1 - dist / 130) * 0.35;
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.strokeStyle = `rgba(201, 168, 76, ${lineOpacity})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        }
      }

      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        const elapsed = now - r.startTime;
        const progress = elapsed / 800;

        if (progress >= 1) {
          ripples.splice(i, 1);
          continue;
        }

        r.radius = r.maxRadius * progress;
        r.opacity = 0.6 * (1 - progress);

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(201, 168, 76, ${r.opacity})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      if (!prefersReduced) {
        animationId = requestAnimationFrame(draw);
      }
    }

    if (prefersReduced) {
      draw();
    } else {
      animationId = requestAnimationFrame(draw);
    }

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
}
