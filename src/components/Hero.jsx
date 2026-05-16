import { motion } from 'framer-motion';
import { ArrowRight, BookMarked, Download, Sparkles, GraduationCap, Globe2 } from 'lucide-react';
import BookMockup from './BookMockup.jsx';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.2, 0.8, 0.2, 1] },
});

export default function Hero() {
  return (
    <section id="top" className="bg-noise relative isolate overflow-hidden bg-aurora pt-32 sm:pt-36 lg:pt-40">
      {/* Background grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-dark opacity-[0.35]"
        style={{ backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)' }}
      />
      {/* Glow orbs */}
      <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 -z-10 h-80 w-80 rounded-full bg-gold-400/15 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 -z-10 h-96 w-96 rounded-full bg-royal-700/30 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl pb-24 sm:pb-28 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          {/* Text */}
          <div>
            <motion.div {...fade(0)} className="pill">
              <Sparkles className="h-3 w-3 text-gold-400" /> New · Academic Edition
            </motion.div>

            <motion.h1
              {...fade(0.08)}
              className="mt-7 font-display text-[42px] font-semibold leading-[1.02] tracking-tight sm:text-[56px] lg:text-[72px]"
            >
              <span className="text-gradient-hero">English Reading</span>
              <br />
              <span className="text-gradient-hero">and Writing</span>{' '}
              <span className="relative inline-block">
                <span className="text-gradient-gold">Practice</span>
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    d="M2 9 C 50 2, 150 2, 198 9"
                    stroke="url(#g1)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1, duration: 1.4, ease: 'easeOut' }}
                  />
                  <defs>
                    <linearGradient id="g1" x1="0" x2="1" y1="0" y2="0">
                      <stop stopColor="#f6d68a" />
                      <stop offset="1" stopColor="#d4a437" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
            </motion.h1>

            <motion.p
              {...fade(0.18)}
              className="mt-7 max-w-xl text-base leading-relaxed text-navy-100/80 sm:text-lg"
            >
              A modern academic guide for developing English reading and writing skills aligned
              with <span className="font-medium text-cream">CEFR</span> standards. Thirty
              progressive lessons crafted for university students, motivated learners, and
              language educators.
            </motion.p>

            <motion.div {...fade(0.28)} className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#gallery" className="btn-primary">
                <BookMarked className="h-4 w-4" /> Read Preview
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/RW.docx"
                download="English-Reading-and-Writing-Practice.docx"
                className="btn-ghost"
              >
                <Download className="h-4 w-4" /> Download Book
              </a>
            </motion.div>

            <motion.div
              {...fade(0.4)}
              className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/8 pt-7"
            >
              {[
                { icon: GraduationCap, label: '30 Lessons', sub: 'Progressive units' },
                { icon: BookMarked, label: '160+ Pages', sub: 'Curated content' },
                { icon: Globe2, label: 'CEFR Based', sub: 'B1 — B2 ready' },
              ].map((s) => (
                <div key={s.label} className="group">
                  <div className="flex items-center gap-2 text-gold-400">
                    <s.icon className="h-4 w-4" strokeWidth={2.2} />
                  </div>
                  <p className="mt-2 font-display text-xl font-semibold text-cream">{s.label}</p>
                  <p className="text-xs text-navy-200/70">{s.sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Book mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, ease: [0.2, 0.8, 0.2, 1], delay: 0.1 }}
            className="relative"
          >
            {/* Floating chips */}
            <motion.div
              animate={{ y: [0, -16, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -left-2 top-8 z-20 hidden rounded-2xl px-4 py-3 shadow-glass sm:left-0 sm:flex"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-royal-500/30 to-navy-700/30 text-gold-300">
                  <Sparkles className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy-100/80">
                    CEFR Aligned
                  </p>
                  <p className="text-[11px] text-navy-200/70">B1 → B2 progression</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 14, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="glass absolute -right-2 bottom-14 z-20 hidden rounded-2xl px-4 py-3 shadow-glass sm:right-0 sm:flex"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-gold-400/30 to-gold-600/20 text-gold-300">
                  <BookMarked className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-navy-100/80">
                    30 Lessons
                  </p>
                  <p className="text-[11px] text-navy-200/70">Academic & practical</p>
                </div>
              </div>
            </motion.div>

            {/* Decorative orbit ring */}
            <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
              <div className="relative h-[480px] w-[480px]">
                <div className="absolute inset-0 animate-spin rounded-full border border-dashed border-white/8" style={{ animationDuration: '60s' }} />
                <div className="absolute inset-8 animate-spin rounded-full border border-dashed border-gold-400/15" style={{ animationDuration: '40s', animationDirection: 'reverse' }} />
              </div>
            </div>

            <BookMockup />
          </motion.div>
        </div>
      </div>

      {/* Smooth bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-navy-950" />
    </section>
  );
}
