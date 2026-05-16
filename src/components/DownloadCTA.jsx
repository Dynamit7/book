import { motion } from 'framer-motion';
import { Download, ArrowRight, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';

export default function DownloadCTA() {
  return (
    <section id="download" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-navy-950" />
      <div
        className="absolute inset-0 -z-10 animate-gradient opacity-70"
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(29,65,155,0.45), rgba(15,31,58,0.35) 30%, rgba(212,164,55,0.18) 60%, rgba(29,65,155,0.45))',
          backgroundSize: '300% 300%',
        }}
      />

      <div className="container-px mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.2, 0.8, 0.2, 1] }}
          className="relative overflow-hidden rounded-[32px] border border-white/12 bg-gradient-to-br from-[#0c1a36]/95 to-[#050b16]/95 p-10 shadow-glass backdrop-blur-2xl sm:p-14 lg:p-20"
        >
          {/* Decorative elements */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-royal-500/30 blur-3xl" />
            <div className="absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-gold-400/15 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.05]"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at center, black, transparent 70%)',
              }}
            />
          </div>

          <div className="relative grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
            <div>
              <div className="pill">
                <Sparkles className="h-3 w-3 text-gold-400" /> Limited Academic Release
              </div>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
                <span className="text-gradient-hero">Start improving your</span>
                <br />
                <span className="text-gradient-hero">English </span>
                <span className="text-gradient-gold">today.</span>
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-navy-100/85 sm:text-lg">
                Download the full PDF edition of <span className="font-semibold text-cream">English
                Reading and Writing Practice</span> — thirty CEFR-aligned lessons, ready to study,
                teach or print in seconds.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/RW.docx"
                  download="English-Reading-and-Writing-Practice.docx"
                  className="btn-primary group"
                >
                  <Download className="h-4 w-4" /> Download Full Book
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a href="#gallery" className="btn-ghost">
                  <BookOpen className="h-4 w-4" /> Read a Sample
                </a>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-navy-200/80">
                <span className="inline-flex items-center gap-2">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold-300" /> Free for educational use
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300" /> Optimised for tablet &amp; print
                </span>
                <span className="inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-gold-300" /> Updated for 2026 edition
                </span>
              </div>
            </div>

            {/* Mini info card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="glass relative overflow-hidden rounded-3xl p-7"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-gold-300">
                  Edition · 2026
                </span>
                <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-royal-500 to-navy-700 text-cream">
                  <BookOpen className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold leading-tight text-cream">
                English Reading &amp; Writing Practice
              </h3>
              <p className="mt-2 text-xs uppercase tracking-[0.28em] text-navy-200/70">
                N.N. D · A.F. A · Sh.Sh. U
              </p>

              <div className="my-6 divider-gold" />

              <dl className="grid grid-cols-2 gap-y-4 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-navy-200/70">Format</dt>
                  <dd className="mt-1 font-medium text-cream">DOCX · A4</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-navy-200/70">Editable</dt>
                  <dd className="mt-1 font-medium text-cream">Microsoft Word</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-navy-200/70">Pages</dt>
                  <dd className="mt-1 font-medium text-cream">160+</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.28em] text-navy-200/70">Level</dt>
                  <dd className="mt-1 font-medium text-cream">CEFR B1 – B2</dd>
                </div>
              </dl>

              <a
                href="/RW.docx"
                download="English-Reading-and-Writing-Practice.docx"
                className="mt-7 flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm transition-all hover:border-gold-400/40 hover:bg-white/[0.08]"
              >
                <span className="text-cream">RW.docx</span>
                <Download className="h-4 w-4 text-gold-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
