import { motion } from 'framer-motion';
import { GraduationCap, Award, Quote, Linkedin, Mail } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const authors = [
  {
    initials: 'NN',
    name: 'N.N. Djamilova',
    role: 'Lead Author',
    field: 'Applied Linguistics',
    bio: 'Specialist in English language pedagogy with a focus on CEFR-aligned curriculum design and academic writing methodology.',
    accent: 'from-royal-500/30 to-navy-700/30',
  },
  {
    initials: 'AF',
    name: 'A.F. Axmadjonova ',
    role: 'Co-Author',
    field: 'Reading Strategies',
    bio: 'Researcher in reading comprehension and discourse analysis, authoring materials adopted across higher-education programmes.',
    accent: 'from-gold-400/30 to-gold-600/20',
  },
  {
    initials: 'ShSh',
    name: 'Sh.Sh. Uchqurova',
    role: 'Co-Author',
    field: 'Academic Writing',
    bio: 'Mentor in academic English with extensive experience preparing learners for international examinations and essay-based assessments.',
    accent: 'from-royal-400/30 to-royal-700/30',
  },
];

export default function Authors() {
  return (
    <section id="authors" className="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-72 w-[80%] -translate-x-1/2 rounded-full bg-royal-700/20 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="The Authors"
          title="Crafted by educators, refined by scholars."
          subtitle="A collaborative work by three academic voices in modern English language education — combining classroom experience with rigorous linguistic research."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {authors.map((a, i) => (
            <motion.article
              key={a.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.03] to-white/[0.01] p-8 shadow-soft transition-all duration-500 hover:border-white/20 hover:shadow-glass"
            >
              {/* Animated border on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gold-400/10 via-transparent to-royal-500/10" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div
                    className={`relative grid h-16 w-16 place-items-center rounded-2xl bg-gradient-to-br ${a.accent} backdrop-blur-xl`}
                  >
                    <span className="font-display text-lg font-semibold text-cream">
                      {a.initials}
                    </span>
                    <span className="absolute -bottom-1 -right-1 grid h-6 w-6 place-items-center rounded-full bg-gold-400 text-[10px] font-bold text-navy-900 shadow-gold">
                      <GraduationCap className="h-3 w-3" />
                    </span>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="pill !text-[10px]">{a.role}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="font-display text-2xl font-semibold tracking-tight text-cream">
                    {a.name}
                  </h3>
                  <p className="mt-1 flex items-center gap-2 text-sm text-gold-300/90">
                    <Award className="h-3.5 w-3.5" /> {a.field}
                  </p>
                </div>

                <div className="my-6 divider-gold" />

                <div className="relative">
                  <Quote className="absolute -left-1 -top-1 h-5 w-5 text-gold-400/40" />
                  <p className="pl-6 text-sm leading-relaxed text-navy-100/80">{a.bio}</p>
                </div>

                <div className="mt-8 flex items-center gap-2">
                  <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-navy-100/80 transition-all hover:border-gold-400/40 hover:text-gold-300">
                    <Linkedin className="h-4 w-4" />
                  </button>
                  <button className="grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-white/5 text-navy-100/80 transition-all hover:border-gold-400/40 hover:text-gold-300">
                    <Mail className="h-4 w-4" />
                  </button>
                  <div className="ml-auto text-[10px] uppercase tracking-[0.3em] text-navy-200/60">
                    0{i + 1} / 03
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
