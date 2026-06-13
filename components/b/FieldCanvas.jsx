"use client";

import { useEffect, useRef } from "react";

/*
 * Levande rapsfält i canvas 2D.
 * Strån vajar i en global vind och trycks undan av muspekaren.
 * Pausar när det är osynligt; statisk frame vid prefers-reduced-motion.
 */
export default function FieldCanvas({ className = "" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Geting bara på enheter som kan hovra (dvs ej touch/mobil)
    const noHoverDevice = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    let straws = [];
    let raf = 0;
    let running = false;
    let W = 0;
    let H = 0;
    let dpr = 1;
    const mouse = { x: -9999, y: -9999, vx: 0 };
    // Getingen: vaknar när pekaren är över fältet, surrar nära den med brus i banan
    const wasp = { x: 0, y: 0, vx: 0, vy: 0, active: 0, t: Math.random() * 100 };

    const YELLOWS = ["#E8B511", "#F2BC1B", "#F7CE45", "#DFA616", "#EFC22E"];
    const STEMS = ["#7A8A3A", "#44563C", "#5C6B33"];

    function build() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const count = Math.round(Math.min(Math.max(W / 1.9, 320), 860));
      straws = [];
      for (let i = 0; i < count; i++) {
        const depth = Math.random(); // 0 = bakre raden, 1 = främsta
        straws.push({
          x: Math.random() * (W + 40) - 20,
          baseY: H - depth * H * 0.34,
          len: (0.38 + depth * 0.62) * (H * 0.42) * (0.75 + Math.random() * 0.5),
          phase: Math.random() * Math.PI * 2,
          speed: 0.5 + Math.random() * 0.7,
          curve: 0.35 + Math.random() * 0.5,
          depth,
          stem: STEMS[(Math.random() * STEMS.length) | 0],
          bloom: YELLOWS[(Math.random() * YELLOWS.length) | 0],
          hasBloom: Math.random() > 0.25,
          width: 0.8 + depth * 1.3,
        });
      }
      straws.sort((a, b) => a.depth - b.depth);
      wasp.x = W * 0.7;
      wasp.y = H * 0.5;
    }

    function draw(t) {
      ctx.clearRect(0, 0, W, H);
      const time = t * 0.001;

      for (const s of straws) {
        // Global vind: långsam våg över fältet
        const wind =
          Math.sin(time * s.speed + s.x * 0.006 + s.phase) * 0.16 +
          Math.sin(time * 0.4 + s.x * 0.0015) * 0.1;

        // Mus = vindby: tryck undan toppen radiellt
        let push = 0;
        const dx = s.x - mouse.x;
        const dy = s.baseY - s.len * 0.6 - mouse.y;
        const dist = Math.hypot(dx, dy);
        const R = 150;
        if (dist < R) {
          push = ((R - dist) / R) * 0.9 * Math.sign(dx || 1);
        }

        const sway = (wind + push) * s.len * s.curve;
        const tipX = s.x + sway;
        const tipY = s.baseY - s.len * (1 - Math.abs(wind + push) * 0.18);
        const ctrlX = s.x + sway * 0.35;
        const ctrlY = s.baseY - s.len * 0.55;

        const alpha = 0.35 + s.depth * 0.65;
        ctx.strokeStyle = s.stem;
        ctx.globalAlpha = alpha * 0.9;
        ctx.lineWidth = s.width;
        ctx.beginPath();
        ctx.moveTo(s.x, s.baseY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);
        ctx.stroke();

        if (s.hasBloom) {
          ctx.globalAlpha = alpha;
          ctx.fillStyle = s.bloom;
          const r = 1.4 + s.depth * 2.4;
          ctx.beginPath();
          ctx.arc(tipX, tipY, r, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(tipX - r * 0.9, tipY + r * 0.7, r * 0.62, 0, Math.PI * 2);
          ctx.arc(tipX + r * 0.9, tipY + r * 0.6, r * 0.58, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      drawWasp(time);
    }

    function drawWasp(time) {
      // Ingen geting på touch/mobil (touch-enhet eller smal vy)
      if (noHoverDevice || window.innerWidth < 768) return;
      const hovering = mouse.x > -9000 && mouse.y > 0 && mouse.y < H + 80;
      // Mjuk in-/uttoning av aktivitet
      wasp.active += ((hovering ? 1 : 0) - wasp.active) * 0.04;
      if (wasp.active < 0.02) return;

      wasp.t += 0.016;
      // Mål: en surrande omloppsbana kring pekaren
      const orbitR = 46 + Math.sin(wasp.t * 1.7) * 18;
      const tx = mouse.x + Math.cos(wasp.t * 2.3) * orbitR + Math.sin(wasp.t * 5.1) * 8;
      const ty = mouse.y - 26 + Math.sin(wasp.t * 2.9) * orbitR * 0.55 + Math.cos(wasp.t * 6.3) * 6;

      // Fjädrande jakt på målet
      wasp.vx += (tx - wasp.x) * 0.012;
      wasp.vy += (ty - wasp.y) * 0.012;
      wasp.vx *= 0.86;
      wasp.vy *= 0.86;
      wasp.x += wasp.vx;
      wasp.y += wasp.vy;

      const dir = Math.atan2(wasp.vy, wasp.vx);
      const a = wasp.active;

      ctx.save();
      ctx.translate(wasp.x, wasp.y);
      ctx.rotate(dir * 0.25);
      ctx.globalAlpha = a;

      // Vingar (fladdrar snabbt)
      const flap = Math.sin(wasp.t * 38) * 0.9;
      ctx.fillStyle = "rgba(250,245,236,0.75)";
      ctx.beginPath();
      ctx.ellipse(-1.5, -5.5, 5.5, 2.6, -0.5 + flap * 0.5, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(2.5, -5.5, 5.5, 2.6, 0.5 - flap * 0.5, 0, Math.PI * 2);
      ctx.fill();

      // Kropp: gul med svarta ränder
      ctx.fillStyle = "#F2BC1B";
      ctx.beginPath();
      ctx.ellipse(0, 0, 7.5, 4.6, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#1A1611";
      for (const bx of [-2.6, 0.6, 3.6]) {
        ctx.beginPath();
        ctx.ellipse(bx, 0, 1.2, 4.4, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      // Huvud
      ctx.beginPath();
      ctx.arc(-8.4, -0.6, 2.6, 0, Math.PI * 2);
      ctx.fill();
      // Gadd
      ctx.beginPath();
      ctx.moveTo(7.2, -1);
      ctx.lineTo(10.5, 0);
      ctx.lineTo(7.2, 1);
      ctx.closePath();
      ctx.fill();

      ctx.restore();
    }

    function loop(t) {
      draw(t);
      raf = requestAnimationFrame(loop);
    }

    function start() {
      if (!running && !reduceMotion) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    }
    function stop() {
      running = false;
      cancelAnimationFrame(raf);
    }

    build();
    if (reduceMotion) {
      draw(1200); // en stilla frame
    } else {
      start();
    }

    const onMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    const onLeave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 }
    );
    io.observe(canvas);
    const onVis = () => (document.hidden ? stop() : start());

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        build();
        if (reduceMotion) draw(1200);
      }, 150);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", onVis);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={className}
      style={{
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 0,
        width: "100%",
        height: "58vh",
        zIndex: 1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
