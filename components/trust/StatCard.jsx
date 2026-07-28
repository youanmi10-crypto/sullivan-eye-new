'use client'

import { motion } from 'framer-motion'
import CountUp from './CountUp'

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] },
  },
}

const iconVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function StatCard({ icon: Icon, label, segments, index }) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col items-center px-4 text-center"
    >
      <motion.div
        variants={iconVariants}
        className="mb-7 flex h-12 w-12 items-center justify-center text-white/90"
      >
        <Icon size={40} strokeWidth={1.4} />
      </motion.div>

      <p className="mb-5 text-xs font-medium tracking-wide text-white/55 sm:text-sm">
        {label}
      </p>

      <div className="flex flex-wrap items-baseline justify-center leading-none text-white">
        {segments.map((seg, i) => {
          if (seg.type === 'num') {
            return (
              <span
                key={i}
                className={
                  'font-light tabular-nums ' +
                  (seg.size === 'xl'
                    ? 'text-5xl sm:text-6xl'
                    : seg.size === 'lg'
                    ? 'text-4xl sm:text-5xl'
                    : 'text-2xl sm:text-3xl')
                }
              >
                {seg.value === 'count' ? (
                  <CountUp end={seg.end} duration={1.8} format={seg.format} />
                ) : (
                  seg.text
                )}
              </span>
            )
          }
          // text segment
          return (
            <span
              key={i}
              className={
                'font-light ' +
                (seg.size === 'sm'
                  ? 'ml-1.5 text-sm text-white/70 sm:text-base'
                  : 'ml-1 text-lg text-white/85 sm:text-xl')
              }
            >
              {seg.text}
            </span>
          )
        })}
      </div>
    </motion.div>
  )
}
