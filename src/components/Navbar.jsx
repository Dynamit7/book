import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BookOpen, Menu, X, Download } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Contents', href: '#contents' },
  { label: 'Authors', href: '#authors' },
  { label: 'Preview', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <div className="container-px mx-auto max-w-7xl">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-500 ${
            scrolled
              ? 'border-white/10 bg-navy-950/70 px-4 py-2.5 shadow-glass backdrop-blur-xl'
              : 'border-transparent bg-transparent px-2 py-2'
          }`}
        >
          <a href="#top" className="group flex items-center gap-2.5">
            <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-royal-500 to-navy-700 shadow-soft">
              <BookOpen className="h-4 w-4 text-white" strokeWidth={2.2} />
              <span className="absolute inset-0 rounded-xl bg-gradient-to-tr from-gold-400/0 to-gold-400/30 opacity-0 transition-opacity group-hover:opacity-100" />
            </span>
            <div className="leading-tight">
              <p className="font-display text-[15px] font-semibold tracking-tight text-cream">
                Reading &amp; Writing
              </p>
              <p className="text-[10px] uppercase tracking-[0.25em] text-navy-200/80">
                Practice · CEFR
              </p>
            </div>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="relative rounded-full px-4 py-2 text-sm text-navy-100/80 transition-colors hover:text-cream"
              >
                <span className="relative z-10">{l.label}</span>
                <span className="absolute inset-0 -z-0 scale-90 rounded-full bg-white/0 opacity-0 transition-all duration-300 hover:scale-100 hover:bg-white/5 hover:opacity-100" />
              </a>
            ))}
          </nav>

          <div className="hidden md:flex">
            <a
              href="/RW.docx"
              download="English-Reading-and-Writing-Practice.docx"
              className="btn-primary !px-5 !py-2.5 text-xs"
            >
              <Download className="h-3.5 w-3.5" />
              Download Book
            </a>
          </div>

          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-cream md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-3 overflow-hidden rounded-2xl border border-white/10 bg-navy-950/85 p-3 backdrop-blur-xl md:hidden"
            >
              <div className="flex flex-col">
                {links.map((l) => (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-sm text-navy-100 hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                ))}
                <a
                  href="/RW.docx"
                  download="English-Reading-and-Writing-Practice.docx"
                  onClick={() => setOpen(false)}
                  className="btn-primary mt-2 justify-center !py-3"
                >
                  <Download className="h-4 w-4" /> Download Book
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
