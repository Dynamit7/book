import { BookOpen, Mail, MapPin, Github, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const cols = [
  {
    title: 'The Book',
    links: ['About', 'Table of Contents', 'Authors', 'Preview', 'Download'],
  },
  {
    title: 'Resources',
    links: ['Teaching Guide', 'Answer Keys', 'CEFR Mapping', 'Audio Files', 'Updates'],
  },
  {
    title: 'Academic',
    links: ['For Universities', 'For Teachers', 'For Students', 'Licensing', 'Citation'],
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-white/8 bg-[#040813] pt-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/40 to-transparent" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[60%] -translate-x-1/2 rounded-full bg-royal-700/15 blur-3xl" />

      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <a href="#top" className="flex items-center gap-3">
              <span className="relative grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-royal-500 to-navy-700 shadow-soft">
                <BookOpen className="h-5 w-5 text-white" />
              </span>
              <div>
                <p className="font-display text-lg font-semibold tracking-tight text-cream">
                  Reading &amp; Writing Practice
                </p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-navy-200/70">
                  Academic Edition · 2026
                </p>
              </div>
            </a>

            <p className="mt-6 max-w-md text-sm leading-relaxed text-navy-100/80">
              A modern academic guide developed by educators for learners building confident,
              real-world English reading and writing skills aligned with international CEFR
              standards.
            </p>

            <div className="mt-8 space-y-3 text-sm text-navy-100/85">
              <p className="inline-flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/8 bg-white/5 text-gold-300">
                  <Mail className="h-3.5 w-3.5" />
                </span>
                contact@readingwriting.academy
              </p>
              <p className="inline-flex items-center gap-3">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/8 bg-white/5 text-gold-300">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                Department of English · Faculty of Languages
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2">
              {[Github, Twitter, Linkedin].map((Icon, i) => (
                <button
                  key={i}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/8 bg-white/5 text-navy-100/80 transition-all hover:border-gold-400/40 hover:text-gold-300"
                >
                  <Icon className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {cols.map((c) => (
              <div key={c.title}>
                <h4 className="text-xs font-semibold uppercase tracking-[0.28em] text-gold-300">
                  {c.title}
                </h4>
                <ul className="mt-5 space-y-3">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#"
                        className="group inline-flex items-center gap-2 text-sm text-navy-100/80 transition-colors hover:text-cream"
                      >
                        <span className="h-px w-3 bg-white/20 transition-all duration-300 group-hover:w-6 group-hover:bg-gold-400/80" />
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/8 py-8 sm:flex-row sm:items-center">
          <p className="text-xs text-navy-200/70">
            © 2026 English Reading and Writing Practice · All rights reserved.
            <span className="mx-2 text-white/15">·</span>
            Authored by N.N. D, A.F. A, Sh.Sh. U.
          </p>

          <div className="flex items-center gap-6 text-xs text-navy-200/70">
            <a href="#" className="hover:text-cream">Privacy</a>
            <a href="#" className="hover:text-cream">Terms</a>
            <a href="#" className="hover:text-cream">Licensing</a>
            <a
              href="#top"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 hover:border-gold-400/40 hover:text-gold-300"
            >
              Back to top <ArrowUp className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Subtle baseline accent */}
      <div className="relative">
        <div className="h-1 w-full bg-gradient-to-r from-royal-700 via-gold-400 to-royal-700 opacity-50" />
      </div>
    </footer>
  );
}
