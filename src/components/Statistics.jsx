import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { BookOpen, FileText, Award, Layers } from 'lucide-react';

function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.2, 0.8, 0.2, 1] });
      return () => controls.stop();
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { icon: BookOpen, value: 30, suffix: '', label: 'Lessons', desc: 'Structured units' },
  { icon: FileText, value: 160, suffix: '+', label: 'Pages', desc: 'Of rich content' },
  { icon: Award, value: null, label: 'CEFR Based', desc: 'B1 — B2 alignment' },
  { icon: Layers, value: null, label: 'Academic', desc: 'Materials & rubrics' },
];

export default function Statistics() {
  return (
    <section className="relative isolate overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950" />
      <div
        className="absolute inset-0 -z-10 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at 50% 0%, rgba(91,141,239,0.25), transparent 50%), radial-gradient(ellipse at 50% 100%, rgba(212,164,55,0.12), transparent 50%)',
        }}
      />

      <div className="container-px mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-8 shadow-glass backdrop-blur-xl sm:p-12">
          {/* Decorative grid */}
          <div
            className="pointer-events-none absolute inset-0 -z-10 opacity-30"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
              maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
            }}
          />
          <div className="pointer-events-none absolute -right-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-royal-500/20 blur-3xl" />

          <div className="relative grid gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="relative flex flex-col items-center text-center lg:items-start lg:text-left"
              >
                {/* Divider between cells on desktop */}
                {i > 0 && (
                  <span className="absolute -left-px top-2 hidden h-20 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent lg:block" />
                )}

                <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-royal-500/20 to-navy-700/30 text-gold-300">
                  <s.icon className="h-5 w-5" strokeWidth={2.2} />
                </span>

                <p className="mt-5 font-display text-[44px] font-semibold leading-none tracking-tight text-gradient-hero sm:text-[52px]">
                  {s.value != null ? <Counter to={s.value} suffix={s.suffix} /> : s.label}
                </p>
                {s.value != null && (
                  <p className="mt-2 font-display text-sm uppercase tracking-[0.32em] text-gold-300/90">
                    {s.label}
                  </p>
                )}
                <p className="mt-2 text-sm text-navy-100/75">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
