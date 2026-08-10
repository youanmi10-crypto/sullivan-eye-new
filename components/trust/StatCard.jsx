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

export default function StatCard({ icon: Icon, label, segments, desc }) {
  const isLight = useIsLightTheme()
  const iconColor = isLight ? 'text-black' : 'text-white/90'
  const labelColor = isLight ? 'text-black' : 'text-white/55'
  const numColor = isLight ? 'text-black' : 'text-white'
  const descColor = isLight ? 'text-black/60' : 'text-white/50'
  const cardBorder = isLight
    ? 'rounded-3xl border border-[#E2E2E5] bg-white px-6 py-8'
    : 'rounded-3xl border border-white/15 px-6 py-8'
  return (
    <motion.div
      variants={cardVariants}
      className={`flex flex-col items-center px-4 py-8 text-center ${cardBorder}`}
    >
      <motion.div
        variants={iconVariants}
        className={`mb-6 flex h-16 w-16 items-center justify-center ${iconColor}`}
      >
        <Icon size={52} strokeWidth={1.4} />
      </motion.div>

      <p className={`mb-4 text-sm font-medium tracking-wide ${labelColor} sm:text-base`}>
        {label}
      </p>

      <div className={`flex flex-wrap items-baseline justify-center leading-none ${numColor}`}>
        {segments.map((seg, i) => {
          if (seg.type === 'num') {
            return (
              <span
                key={i}
                className={
                  'font-medium tabular-nums ' +
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

      {desc && (
        <p className={`mt-4 text-xs leading-relaxed ${descColor} sm:text-sm`}>
          {desc}
        </p>
      )}
    </motion.div>
  )
}
