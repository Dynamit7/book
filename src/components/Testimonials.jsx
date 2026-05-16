import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionHeading from './SectionHeading.jsx';

const reviews = [
  {
    name: 'Madina K.',
    role: 'University Student',
    rating: 5,
    text:
      'The reading strategies completely changed how I approach academic articles. I finally feel confident analysing complex texts in English.',
    color: 'from-royal-500/25 to-navy-700/25',
  },
  {
    name: 'Aziz R.',
    role: 'English Teacher',
    rating: 5,
    text:
      'A genuinely well-balanced book. The progression from paragraph to essay writing is one of the cleanest I have ever taught from.',
    color: 'from-gold-400/25 to-gold-600/20',
  },
  {
    name: 'Sevara M.',
    role: 'IELTS Candidate',
    rating: 5,
    text:
      'The writing models and rubrics gave me the structure I was missing. My essays improved noticeably after just a few units.',
    color: 'from-royal-400/25 to-royal-700/25',
  },
  {
    name: 'Bobur T.',
    role: 'Postgraduate Researcher',
    rating: 5,
    text:
      'Academic tone, real tasks, beautifully designed pages. It reads like an international university textbook.',
    color: 'from-royal-500/25 to-gold-400/15',
  },
  {
    name: 'Dilnoza A.',
    role: 'Language Coach',
    rating: 5,
    text:
      'I use it in mixed-level classes. The CEFR alignment makes lesson planning effortless and the variety keeps learners engaged.',
    color: 'from-gold-400/25 to-royal-500/15',
  },
];

function Card({ r, i }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: i * 0.08 }}
      className="group relative h-full overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-7 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-white/20"
    >
      <div className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${r.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100`} />
      <Quote className="h-7 w-7 text-gold-400/50" />
      <div className="mt-1 flex items-center gap-0.5">
        {Array.from({ length: r.rating }).map((_, k) => (
          <Star key={k} className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
        ))}
      </div>
      <p className="mt-5 text-[15px] leading-relaxed text-navy-100/90">"{r.text}"</p>

      <div className="mt-7 flex items-center gap-3 border-t border-white/8 pt-5">
        <span className={`grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${r.color} text-xs font-semibold text-cream`}>
          {r.name.split(' ').map((p) => p[0]).join('')}
        </span>
        <div>
          <p className="text-sm font-semibold text-cream">{r.name}</p>
          <p className="text-[11px] uppercase tracking-[0.24em] text-navy-200/70">{r.role}</p>
        </div>
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="relative isolate overflow-hidden bg-navy-950 py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -left-32 top-1/4 -z-10 h-72 w-72 rounded-full bg-royal-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-gold-400/10 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          align="center"
          eyebrow="Student Experience"
          title="Loved by learners and educators alike."
          subtitle="Real feedback from students preparing for university and from teachers building their own English programmes around this book."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2"><Card r={reviews[0]} i={0} /></div>
          <div className="lg:col-span-2"><Card r={reviews[1]} i={1} /></div>
          <div className="lg:col-span-2"><Card r={reviews[2]} i={2} /></div>
          <div className="lg:col-span-3"><Card r={reviews[3]} i={3} /></div>
          <div className="lg:col-span-3"><Card r={reviews[4]} i={4} /></div>
        </div>
      </div>
    </section>
  );
}
