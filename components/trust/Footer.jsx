'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

// Footer — 브랜드 마무리. 이미지/명세에 주어진 텍스트만 사용.
export default function Footer() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })
  // Footer가 올라오며 제품이 자연스럽게 페이드아웃 되도록 연동
  const fade = useTransform(scrollYProgress, [0, 0.4], [1, 0.0])

  return (
    <motion.footer
      ref={ref}
      style={{ opacity: fade }}
      className="border-t border-white/10 bg-[#0A0A0A] px-6 py-16 text-center sm:px-10"
    >
      <p className="text-sm font-light tracking-[0.3em] text-white/50">
        SULLIVAN EYE
      </p>
      <p className="mt-4 text-xs font-light text-white/30">
        당신의 시선이 되는 AI
      </p>
    </motion.footer>
  )
}
