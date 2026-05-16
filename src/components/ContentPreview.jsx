import { motion } from 'framer-motion';
import {
  BookOpen,
  PenTool,
  FileText,
  ScrollText,
  CalendarDays,
  Drama,
  Mail,
  ClipboardList,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const lessons = [
  { icon: BookOpen, title: 'Reading Practice', count: '08 units', desc: 'Curated texts with strategy-led comprehension tasks.' },
  { icon: PenTool, title: 'Writing Practice', count: '07 units', desc: 'From sentence formation to cohesive composition.' },
  { icon: FileText, title: 'Paragraph Writing', count: '04 units', desc: 'Topic sentences, supporting evidence, conclusions.' },
  { icon: ScrollText, title: 'Essays', count: '05 units', desc: 'Opinion, discursive, problem–solution and analytical.' },
  { icon: CalendarDays, title: 'Schedules & Timetables', count: '02 units', desc: 'Real-world scheduling, planning and time vocabulary.' },
  { icon: Drama, title: 'Stories & Analysis', count: '03 units', desc: 'Narrative reading with critical discussion frameworks.' },
  { icon: Mail, title: 'Invitations & Greeting Cards', count: '02 units', desc: 'Formal and informal social correspondence templates.' },
  { icon: ClipboardList, title: 'Resumes & Questionnaires', count: '03 units', desc: 'Professional documents and structured forms.' },
];

export default function ContentPreview() {
  return (
    <section id="contents" className="bg-noise relative isolate overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-royal-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 -z-10 h-80 w-80 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Inside the Book"
            title="Thirty thoughtfully structured lessons."
            subtitle="A balanced curriculum that moves the learner from foundational reading habits to confident, polished, real-world English writing."
          />
          <a
            href="#download"
            className="hidden items-center gap-2 rounded-full border border-white/10 px-5 py-2.5 text-sm text-navy-100 transition-colors hover:border-gold-400/40 hover:text-cream lg:inline-flex"
          >
            Full Table of Contents
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {lessons.map((l, i) => (
            <motion.a
              href="#gallery"
              key={l.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: (i % 4) * 0.05 }}
              className="group relative block overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
            >
              {/* hover glow */}
              <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-royal-400/20 to-gold-400/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 animated-border" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-navy-700 to-navy-900 text-gold-300 shadow-soft">
                    <l.icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <span className="text-[10px] font-medium uppercase tracking-[0.28em] text-navy-200/70">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-[18px] font-semibold tracking-tight text-cream">
                  {l.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-200/80">{l.desc}</p>

                <div className="mt-5 flex items-center justify-between border-t border-white/8 pt-4 text-[11px] uppercase tracking-[0.24em]">
                  <span className="text-gold-300/90">{l.count}</span>
                  <span className="inline-flex items-center gap-1 text-navy-100/70 transition-colors group-hover:text-cream">
                    Preview
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
