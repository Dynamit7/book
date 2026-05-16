import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

const D = 32; // book thickness in px (controls all six faces)

export default function BookMockup() {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ x: 8, y: -22 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = clamp((e.clientX - cx) / rect.width, -0.7, 0.7);
      const dy = clamp((e.clientY - cy) / rect.height, -0.7, 0.7);
      setTilt({ x: 8 - dy * 6, y: -22 + dx * 12 });
    };
    const onLeave = () => setTilt({ x: 8, y: -22 });
    window.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => {
      window.removeEventListener('mousemove', onMove);
      el.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="relative mx-auto flex h-[500px] w-full max-w-[420px] items-center justify-center sm:h-[560px] sm:max-w-[480px] lg:h-[640px]"
      style={{ perspective: '2200px' }}
    >
      {/* Floor glow & shadow (outside 3D scene — no filter pollution) */}
      <div className="pointer-events-none absolute bottom-[4%] left-1/2 h-28 w-[78%] -translate-x-1/2 rounded-[50%] bg-royal-500/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[1%] left-1/2 h-14 w-[55%] -translate-x-1/2 rounded-[50%] bg-black/75 blur-2xl" />

      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div
          className="relative h-[440px] w-[300px] sm:h-[500px] sm:w-[340px] lg:h-[560px] lg:w-[380px]"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            transition: 'transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1)',
          }}
        >
          {/* ───────────── BACK COVER (z = -D) ───────────── */}
          <div
            className="absolute inset-0 rounded-[12px]"
            style={{
              transform: `translateZ(-${D}px)`,
              background:
                'linear-gradient(135deg, #0c1a36 0%, #050b16 60%, #030710 100%)',
              boxShadow:
                'inset 0 1px 0 rgba(255,255,255,0.05), inset 0 0 0 1px rgba(0,0,0,0.4)',
              backfaceVisibility: 'hidden',
            }}
          />

          {/* ───────────── TOP EDGE (paper, between covers) ───────────── */}
          <div
            className="absolute left-0 right-0 top-0 overflow-hidden"
            style={{
              height: `${D}px`,
              transformOrigin: 'top center',
              transform: 'rotateX(-90deg)',
              background:
                'linear-gradient(180deg, #f7f1e0 0%, #ebe1c8 50%, #d9cba9 100%)',
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(10,22,40,0.08) 0 1px, transparent 1px 3px), linear-gradient(180deg, #f7f1e0, #d9cba9)',
              boxShadow:
                'inset 0 2px 0 rgba(10, 22, 40, 0.55), inset 0 -2px 0 rgba(10, 22, 40, 0.55), inset 1px 0 0 rgba(10, 22, 40, 0.4), inset -1px 0 0 rgba(10, 22, 40, 0.4)',
            }}
          />

          {/* ───────────── BOTTOM EDGE ───────────── */}
          <div
            className="absolute bottom-0 left-0 right-0 overflow-hidden"
            style={{
              height: `${D}px`,
              transformOrigin: 'bottom center',
              transform: 'rotateX(90deg)',
              backgroundImage:
                'repeating-linear-gradient(90deg, rgba(10,22,40,0.08) 0 1px, transparent 1px 3px), linear-gradient(0deg, #f7f1e0, #d9cba9)',
              boxShadow:
                'inset 0 2px 0 rgba(10, 22, 40, 0.55), inset 0 -2px 0 rgba(10, 22, 40, 0.55), inset 1px 0 0 rgba(10, 22, 40, 0.4), inset -1px 0 0 rgba(10, 22, 40, 0.4)',
            }}
          />

          {/* ───────────── RIGHT FORE-EDGE (pages) ───────────── */}
          <div
            className="absolute right-0 top-0 bottom-0 overflow-hidden"
            style={{
              width: `${D}px`,
              transformOrigin: 'right center',
              transform: 'rotateY(-90deg)',
              backgroundImage:
                'repeating-linear-gradient(0deg, rgba(10,22,40,0.1) 0 1px, transparent 1px 4px), linear-gradient(180deg, #f7f1e0, #d9cba9)',
              boxShadow:
                'inset 2px 0 0 rgba(10, 22, 40, 0.55), inset -2px 0 0 rgba(10, 22, 40, 0.55), inset 0 6px 10px rgba(0,0,0,0.15), inset 0 -6px 10px rgba(0,0,0,0.15)',
            }}
          />

          {/* ───────────── SPINE (left side, cover material) ───────────── */}
          <div
            className="absolute left-0 top-0 bottom-0 overflow-hidden rounded-l-[2px]"
            style={{
              width: `${D}px`,
              transformOrigin: 'left center',
              transform: 'rotateY(90deg)',
              background:
                'linear-gradient(180deg, #2553c4 0%, #1d419b 20%, #0f1f3a 60%, #050b16 100%)',
              boxShadow:
                'inset -6px 0 12px rgba(0,0,0,0.45), inset 6px 0 12px rgba(0,0,0,0.55)',
            }}
          >
            {/* Gold rules */}
            <div className="absolute inset-x-[5px] top-[18px] h-px bg-gold-400/70" />
            <div className="absolute inset-x-[5px] top-[24px] h-px bg-gold-400/30" />
            <div className="absolute inset-x-[5px] bottom-[18px] h-px bg-gold-400/70" />
            <div className="absolute inset-x-[5px] bottom-[24px] h-px bg-gold-400/30" />

            {/* Vertical spine title */}
            <div
              className="absolute inset-y-12 left-1/2 -translate-x-1/2 text-[8px] font-semibold uppercase tracking-[0.55em] text-gold-200/90"
              style={{
                writingMode: 'vertical-rl',
                transform: 'translateX(-50%) rotate(180deg)',
              }}
            >
              English Reading &amp; Writing
            </div>
          </div>

          {/* ───────────── FRONT COVER (z = 0) ───────────── */}
          <div
            className="absolute inset-0 overflow-hidden rounded-[12px]"
            style={{
              background:
                'linear-gradient(135deg, #1d419b 0%, #14305f 40%, #0a1628 80%, #050b16 100%)',
              boxShadow:
                '0 50px 80px -25px rgba(0,0,0,0.7), 0 18px 35px -10px rgba(59,111,224,0.3), inset 0 1px 0 rgba(255,255,255,0.14), inset 0 0 0 1px rgba(255,255,255,0.04)',
              backfaceVisibility: 'hidden',
            }}
          >
            {/* Soft glow ornaments */}
            <div
              className="absolute inset-0 opacity-[0.28]"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 15% 12%, rgba(232,190,95,0.55), transparent 45%), radial-gradient(circle at 85% 88%, rgba(91,141,239,0.55), transparent 50%)',
              }}
            />

            {/* Gold double border frame */}
            <div className="pointer-events-none absolute inset-[14px] rounded-[7px] border border-gold-400/40" />
            <div className="pointer-events-none absolute inset-[22px] rounded-[4px] border border-gold-400/15" />

            {/* Top corner mini-ornaments */}
            <span className="absolute left-[22px] top-[22px] h-2 w-2 rounded-full border border-gold-400/50" />
            <span className="absolute right-[22px] top-[22px] h-2 w-2 rounded-full border border-gold-400/50" />
            <span className="absolute left-[22px] bottom-[22px] h-2 w-2 rounded-full border border-gold-400/50" />
            <span className="absolute right-[22px] bottom-[22px] h-2 w-2 rounded-full border border-gold-400/50" />

            {/* Top label */}
            <div className="absolute left-1/2 top-12 -translate-x-1/2 text-center">
              <p className="text-[9px] font-semibold uppercase tracking-[0.5em] text-gold-300/95">
                Academic Edition
              </p>
              <div className="mx-auto mt-2 h-px w-12 bg-gold-400/60" />
            </div>

            {/* Title */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 px-8 text-center">
              <h2 className="font-display text-[26px] font-semibold leading-[1.05] tracking-tight text-cream sm:text-[30px] lg:text-[34px]">
                English
                <br />
                Reading <span className="text-gold-300">&amp;</span>
                <br />
                Writing
              </h2>
              <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.4em] text-navy-100/85">
                Practice
              </p>
              <div className="mx-auto mt-5 h-px w-20 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
              <p className="mt-5 text-[10px] uppercase tracking-[0.32em] text-navy-100/75">
                CEFR · Aligned · Level B1–B2
              </p>
            </div>

            {/* Bottom authors */}
            <div className="absolute inset-x-0 bottom-10 text-center">
              <p className="text-[9px] uppercase tracking-[0.34em] text-gold-300/85">
                N.N. D · A.F. A · Sh.Sh. U
              </p>
            </div>

            {/* Light sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-white/12" />
            <div className="pointer-events-none absolute -left-12 top-0 h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/8 to-transparent opacity-50" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
