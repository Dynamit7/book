import { motion } from 'framer-motion';

export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', tone = 'dark' }) {
  const center = align === 'center';
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className={`section-label ${center ? 'justify-center' : ''}`}
        >
          <span className="h-px w-8 bg-gold-400/60" /> {eyebrow}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, delay: 0.05 }}
        className={`mt-5 font-display text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl ${
          tone === 'light' ? 'text-navy-900' : 'text-cream'
        }`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className={`mt-5 text-base leading-relaxed sm:text-lg ${
            tone === 'light' ? 'text-navy-700/85' : 'text-navy-100/80'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
