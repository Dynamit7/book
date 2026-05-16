import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, BookOpen, ArrowRight } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const pages = [
  {
    chip: 'Unit 04 · Reading Practice',
    short: 'Reading',
    title: 'A Day in the Life of a Modern Library',
    body: [
      'Public libraries have evolved into more than quiet rooms with books. They are community workshops, digital studios and creative laboratories, supporting learners of every age.',
      'Read the passage carefully, then answer the comprehension questions and use the strategy box to map the main ideas of each paragraph.',
    ],
    task: 'Identify the topic sentence of paragraph 2 and explain the writer’s purpose.',
    color: 'from-royal-500/25 to-navy-700/25',
  },
  {
    chip: 'Unit 11 · Paragraph Writing',
    short: 'Paragraph',
    title: 'Building a Strong Topic Sentence',
    body: [
      'A topic sentence acts as a contract with the reader: it announces what the paragraph will explore and frames the supporting evidence that follows.',
      'Study the three model paragraphs, underline each topic sentence and rewrite a weaker version in your own words using the linking-phrases bank.',
    ],
    task: 'Compose a 90–110 word paragraph on “a place that shaped my education”.',
    color: 'from-gold-400/25 to-gold-600/20',
  },
  {
    chip: 'Unit 18 · Essay Writing',
    short: 'Essay',
    title: 'Discursive Essays — Two Sides of an Argument',
    body: [
      'A discursive essay invites readers to weigh contrasting viewpoints before reaching a measured conclusion. Balance, evidence and academic tone are essential.',
      'Use the planning template to outline arguments for and against the prompt. Then expand the strongest two points into fully developed body paragraphs.',
    ],
    task: 'Write a 250-word discursive essay on the role of AI in higher education.',
    color: 'from-royal-400/25 to-royal-700/25',
  },
  {
    chip: 'Unit 23 · Real-World Tasks',
    short: 'Resume',
    title: 'Writing a Professional Resume',
    body: [
      'A modern resume is a focused, one-page narrative of your skills, experiences and aspirations. Clarity and structure matter as much as content.',
      'Study the sample resume, identify the five core sections and adapt the template using your own academic and professional background.',
    ],
    task: 'Draft a one-page resume tailored to a university scholarship application.',
    color: 'from-gold-300/25 to-royal-500/15',
  },
];

const flipVariants = {
  enter: (dir) => ({
    rotateY: dir > 0 ? 75 : -75,
    opacity: 0,
    x: dir > 0 ? 80 : -80,
    transformPerspective: 1600,
  }),
  center: {
    rotateY: 0,
    opacity: 1,
    x: 0,
    transformPerspective: 1600,
  },
  exit: (dir) => ({
    rotateY: dir > 0 ? -75 : 75,
    opacity: 0,
    x: dir > 0 ? -80 : 80,
    transformPerspective: 1600,
  }),
};

export default function Gallery() {
  const [[index, dir], setState] = useState([0, 0]);

  const go = (delta) => {
    setState(([i]) => [(i + delta + pages.length) % pages.length, delta]);
  };
  const goTo = (i) => {
    setState(([cur]) => [i, i > cur ? 1 : -1]);
  };

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const current = pages[index];
  const nextIndex = (index + 1) % pages.length;
  const next = pages[nextIndex];

  return (
    <section id="gallery" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-navy-950 via-[#070f20] to-navy-950" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-radial-glow opacity-60" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Book Preview"
            title="Step inside the pages."
            subtitle="Interactive mockups of selected lessons — feel the typography, the rhythm and the academic warmth of the printed page."
          />

          <div className="hidden items-center gap-3 lg:flex">
            <span className="text-[10px] uppercase tracking-[0.3em] text-navy-200/60">
              {String(index + 1).padStart(2, '0')} / {String(pages.length).padStart(2, '0')}
            </span>
            <span className="h-4 w-px bg-white/15" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-navy-200/60">
              ← → keys
            </span>
          </div>
        </div>

        <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          {/* Book viewer */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-[40px] bg-gradient-to-br from-royal-500/15 to-gold-400/10 blur-3xl" />

            {/* Big side arrows */}
            <button
              onClick={() => go(-1)}
              aria-label="Previous page"
              className="group absolute left-0 top-1/2 z-20 hidden -translate-x-1/2 -translate-y-1/2 sm:flex"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-navy-900/80 text-cream shadow-glass backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-gold-400/60 group-hover:bg-navy-800 group-hover:text-gold-300 group-hover:shadow-gold">
                <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
              </span>
            </button>

            <button
              onClick={() => go(1)}
              aria-label="Next page"
              className="group absolute right-0 top-1/2 z-20 hidden translate-x-1/2 -translate-y-1/2 sm:flex"
            >
              <span className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-navy-900/80 text-cream shadow-glass backdrop-blur-xl transition-all duration-300 group-hover:scale-110 group-hover:border-gold-400/60 group-hover:bg-navy-800 group-hover:text-gold-300 group-hover:shadow-gold">
                <ChevronRight className="h-6 w-6" strokeWidth={2.2} />
              </span>
            </button>

            {/* 3D book viewport */}
            <div
              className="relative overflow-visible"
              style={{ perspective: '2200px' }}
            >
              <div className="relative aspect-[8/5] w-full">
                <AnimatePresence mode="wait" custom={dir} initial={false}>
                  <motion.div
                    key={index}
                    custom={dir}
                    variants={flipVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.75, ease: [0.2, 0.8, 0.2, 1] }}
                    className="absolute inset-0"
                    style={{ transformStyle: 'preserve-3d', transformOrigin: dir > 0 ? 'left center' : 'right center' }}
                  >
                    <div className="relative grid h-full grid-cols-2 overflow-hidden rounded-[20px] shadow-ring">
                      {/* Left page */}
                      <div className="relative bg-gradient-to-br from-cream to-[#efece5] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">
                            {current.chip}
                          </span>
                          <span className="text-[10px] uppercase tracking-[0.28em] text-navy-700/60">
                            Page {21 + index * 6}
                          </span>
                        </div>
                        <div className="mt-5 h-px bg-navy-900/15" />
                        <h4 className="mt-5 font-display text-[19px] font-semibold leading-tight text-navy-900 sm:text-[22px]">
                          {current.title}
                        </h4>
                        <div className="mt-4 space-y-3 text-[12.5px] leading-relaxed text-navy-800/85 sm:text-[13px]">
                          {current.body.map((p, i) => (
                            <p key={i}>{p}</p>
                          ))}
                        </div>
                        <div className="mt-5 rounded-xl border border-gold-500/25 bg-gold-300/15 p-3 sm:p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-700">
                            Strategy Box
                          </p>
                          <p className="mt-1 text-[12px] text-navy-800/90">
                            Skim → Underline → Summarise → Compare
                          </p>
                        </div>
                        <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-black/20 to-transparent" />
                      </div>

                      {/* Right page */}
                      <div className="relative bg-gradient-to-bl from-cream to-[#efece5] p-7 sm:p-10">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] uppercase tracking-[0.28em] text-navy-700/60">
                            Practice
                          </span>
                          <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-600">
                            Task
                          </span>
                        </div>
                        <div className="mt-5 h-px bg-navy-900/15" />

                        <div className="mt-5 space-y-2.5">
                          {['A. Pre-reading questions', 'B. Vocabulary in context', 'C. Comprehension check', 'D. Critical thinking'].map((t, i) => (
                            <div key={t} className="flex items-start gap-3">
                              <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-md bg-navy-900 text-[10px] font-semibold text-cream">
                                {i + 1}
                              </span>
                              <p className="text-[12px] text-navy-800/90">{t}</p>
                            </div>
                          ))}
                        </div>

                        <div className="mt-5 rounded-xl border border-royal-600/25 bg-royal-500/10 p-3 sm:p-4">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-royal-700">
                            Writing Task
                          </p>
                          <p className="mt-1 text-[12px] text-navy-800/90">{current.task}</p>
                        </div>

                        <div className="mt-5 grid grid-cols-3 gap-1.5">
                          {Array.from({ length: 9 }).map((_, i) => (
                            <span key={i} className="h-1.5 rounded-full bg-navy-900/10" />
                          ))}
                        </div>

                        <div className="pointer-events-none absolute left-0 top-0 h-full w-8 bg-gradient-to-r from-black/20 to-transparent" />
                      </div>

                      {/* Central spine */}
                      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-black/5 via-black/30 to-black/5" />
                    </div>

                    {/* Floor reflection */}
                    <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-[50%] bg-black/40 blur-2xl" />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              {pages.map((p, i) => {
                const active = i === index;
                return (
                  <button
                    key={p.chip}
                    onClick={() => goTo(i)}
                    className={`group relative flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-[11px] uppercase tracking-[0.22em] transition-all duration-500 ${
                      active
                        ? 'border-gold-400/50 bg-gold-400/10 text-gold-200 shadow-gold'
                        : 'border-white/10 bg-white/[0.03] text-navy-100/70 hover:border-white/25 hover:text-cream'
                    }`}
                  >
                    <span
                      className={`grid h-5 w-5 place-items-center rounded-full text-[10px] font-semibold transition-colors ${
                        active ? 'bg-gold-400 text-navy-900' : 'bg-white/8 text-navy-100/80 group-hover:bg-white/15'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="font-display normal-case tracking-normal text-[12px]">{p.short}</span>
                    {active && (
                      <motion.span
                        layoutId="thumbGlow"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-gold-400/15 via-gold-300/10 to-gold-400/15"
                        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Side info */}
          <div>
            <div className="pill"><BookOpen className="h-3 w-3 text-gold-400" /> Lesson Walkthrough</div>
            <h3 className="mt-5 font-display text-3xl font-semibold tracking-tight text-cream sm:text-4xl">
              Real lesson spreads.
              <br />
              <span className="text-gradient-blue">Designed for clarity.</span>
            </h3>
            <p className="mt-5 text-base leading-relaxed text-navy-100/80">
              Each unit pairs an academic text with carefully sequenced activities — pre-reading
              hooks, vocabulary in context, comprehension checks and a writing task that consolidates
              the learning into a real, polished outcome.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Authentic academic and real-world texts',
                'Strategy boxes that build transferable skills',
                'Writing rubrics aligned with CEFR descriptors',
                'Progressive difficulty across thirty units',
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-navy-100/90">
                  <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-400 shadow-[0_0_10px_rgba(232,190,95,0.7)]" />
                  {t}
                </li>
              ))}
            </ul>

            {/* "Next lesson" preview card */}
            <motion.button
              onClick={() => go(1)}
              whileHover={{ y: -3 }}
              className="group mt-10 flex w-full items-center justify-between gap-4 rounded-2xl border border-white/10 bg-gradient-to-r from-white/[0.05] to-white/[0.02] p-4 text-left transition-all hover:border-gold-400/40"
            >
              <div className="flex items-center gap-4">
                <span className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${next.color} font-display text-sm font-semibold text-cream`}>
                  {String(nextIndex + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-gold-300/90">
                    Next Lesson
                  </p>
                  <p className="mt-1 font-display text-sm font-semibold text-cream">
                    {next.title}
                  </p>
                </div>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-royal-500 to-navy-700 text-cream transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-gold">
                <ArrowRight className="h-4 w-4" />
              </span>
            </motion.button>

            {/* Mobile controls */}
            <div className="mt-6 flex items-center justify-center gap-3 sm:hidden">
              <button
                onClick={() => go(-1)}
                aria-label="Previous"
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-navy-900/70 text-cream backdrop-blur-xl active:scale-95"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <span className="text-xs uppercase tracking-[0.28em] text-navy-200/70">
                {index + 1} / {pages.length}
              </span>
              <button
                onClick={() => go(1)}
                aria-label="Next"
                className="grid h-12 w-12 place-items-center rounded-full border border-gold-400/40 bg-gold-400/10 text-gold-200 backdrop-blur-xl active:scale-95"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
