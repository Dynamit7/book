import { motion } from 'framer-motion';
import {
  Languages,
  BookOpenCheck,
  PenLine,
  GraduationCap,
  Globe2,
  ListChecks,
} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const features = [
  {
    icon: Languages,
    title: 'CEFR Aligned Lessons',
    desc: 'Every unit maps cleanly to CEFR descriptors from B1 to B2, giving learners a clear, measurable trajectory of progress.',
  },
  {
    icon: BookOpenCheck,
    title: 'Reading Strategies',
    desc: 'Skimming, scanning, inference and critical reading frameworks practised on authentic, academically curated texts.',
  },
  {
    icon: PenLine,
    title: 'Writing Development',
    desc: 'From sentence-level accuracy to cohesive paragraph and essay construction, with structured, scaffolded models.',
  },
  {
    icon: GraduationCap,
    title: 'Academic English Practice',
    desc: 'Linguistic conventions, register, citation patterns and analytical writing for university-level discourse.',
  },
  {
    icon: Globe2,
    title: 'Real-World Tasks',
    desc: 'Emails, resumes, invitations, schedules and questionnaires that mirror real professional and social contexts.',
  },
  {
    icon: ListChecks,
    title: 'Reflective Assessment',
    desc: 'End-of-unit checkpoints, self-evaluation prompts and writing rubrics to consolidate learning at each stage.',
  },
];

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-24 sm:py-28 lg:py-32">
      {/* Light section */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-cream via-white to-cream" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.5]"
        style={{ backgroundImage: 'radial-gradient(circle at 20% 10%, rgba(59,111,224,0.08), transparent 40%), radial-gradient(circle at 80% 90%, rgba(212,164,55,0.1), transparent 40%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-light opacity-50"
        style={{ backgroundSize: '60px 60px', maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }}
      />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          tone="light"
          eyebrow="About the Book"
          title="A modern academic companion for English mastery."
          subtitle="Designed with the discipline of a textbook and the warmth of a mentor — every chapter pairs analytical depth with practical, real-world tasks."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="group relative overflow-hidden rounded-3xl border border-navy-900/8 bg-white/85 p-7 shadow-[0_8px_30px_-12px_rgba(10,22,40,0.12)] backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-navy-900/15 hover:shadow-[0_30px_60px_-20px_rgba(10,22,40,0.25)]"
            >
              <div
                className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br from-royal-400/15 to-gold-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative">
                <div className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-br from-navy-900 to-royal-700 p-3 text-cream shadow-soft">
                  <f.icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-navy-900">
                  {f.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-navy-700/85">{f.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-royal-600">
                  <span className="h-px w-6 bg-royal-600/40 transition-all duration-500 group-hover:w-10" />
                  Explore
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
