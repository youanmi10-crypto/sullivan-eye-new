'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { useIsLightTheme } from '@/components/useIsLightTheme'

/**
 * GlowCurve
 * 검은 배경 위에 거대한 원의 일부만 보이도록 하는 빛나는 곡선.
 * border-radius 9999px + radial-gradient + blur 조합.
 * 스크롤에 따라 scale 1.08 -> 1.00 으로 천천히 움직임.
 */
export default function GlowCurve() {
  const isLight = useIsLightTheme()
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1.0])
  const opacity = useTransform(scrollYProgress, [0, 0.35, 1], [0.0, 1, 0.6])

  const glowColor = isLight
    ? 'rgba(0,0,0,0.18)'
    : 'rgba(255,255,255,0.85)'
  const glowColorMid = isLight
    ? 'rgba(0,0,0,0.08)'
    : 'rgba(255,255,255,0.35)'
  const glowColorFaint = isLight
    ? 'rgba(0,0,0,0.02)'
    : 'rgba(255,255,255,0.06)'

  return (
    <div ref={ref} className="relative flex justify-center overflow-hidden">
      <motion.div
        style={{ scale, opacity }}
        className="pointer-events-none relative"
      >
        {/* 거대한 원의 일부만 보이도록 아래쪽을 잘라냄 */}
        <div
          className="h-[520px] w-[1200px] translate-y-[58%] sm:h-[640px] sm:w-[1400px]"
          style={{
            borderRadius: '9999px',
            background: `radial-gradient(ellipse 50% 50% at 50% 0%, ${glowColor} 0%, ${glowColorMid} 28%, ${glowColorFaint} 55%, rgba(255,255,255,0) 72%)`,
            filter: 'blur(38px)',
          }}
        />
      </motion.div>
    </div>
  )
}
