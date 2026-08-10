'use client'

import { motion } from 'framer-motion'
import CountUp from './CountUp'
import { useIsLightTheme } from '@/components/useIsLightTheme'

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
  const isLight = useIsLightTheme()
  const iconColor = isLight ? 'text-black' : 'text-white/90'
  const labelColor = isLight ? 'text-black' : 'text-white/55'
  const numColor = isLight ? 'text-black' : 'text-white'
  const cardBorder = isLight ? 'rounded-3xl border border-[#E2E2E5] px-6 py-8' : ''
  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col items-center px-4 text-center ${cardBorder}`}
    >
      <motion.div
        variants={iconVariants}
        className={`mb-7 flex h-12 w-12 items-center justify-center ${iconColor}`}
      >
        <Icon size={40} strokeWidth={1.4} />
      </motion.div>

      <p className={`mb-5 text-xs font-medium tracking-wide ${labelColor} sm:text-sm`}>
        {label}
      </p>

      <div className={`flex flex-wrap items-baseline justify-center leading-none ${numColor}`}>
        {segments.map((seg, i) => {
          if (seg.type === 'num') {
            return (
              <span
                key={i}
                className={
                  'font-bold tabular-nums ' +
                  (seg.size === 'xl'
                    ? 'text-6xl sm:text-7xl'
                    : seg.size === 'lg'
                    ? 'text-5xl sm:text-6xl'
                    : 'text-3xl sm:text-4xl')
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
                'font-medium ' +
                (seg.size === 'sm'
                  ? `ml-1.5 text-sm ${isLight ? 'text-black' : 'text-white/70'} sm:text-base`
                  : `ml-1 text-lg ${isLight ? 'text-black' : 'text-white/85'} sm:text-xl`)
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
