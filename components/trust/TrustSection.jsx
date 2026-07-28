'use client'

import { motion } from 'framer-motion'
import { Globe, Download, Users } from 'lucide-react'
import GlowCurve from './GlowCurve'
import StatCard from './StatCard'
import { formatKorean } from './CountUp'
import AwardsSection from './AwardsSection'
import PartnersSection from './PartnersSection'
import ClosingSection from './ClosingSection'
import Footer from './Footer'

// 부드러운 easeOutExpo 느낌의 커스텀 이징
const easeOut = [0.16, 1, 0.3, 1]

const heroTitle = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1.2, ease: easeOut } },
}
const heroSub = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeOut, delay: 0.15 },
  },
}
const bodyLine = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easeOut } },
}

const cardsContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const dividerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 0.3, y: 0, transition: { duration: 1.0, ease: easeOut } },
}

function Divider({ text }) {
  return (
    <motion.div
      variants={dividerVariants}
      className="flex items-center justify-center gap-5 py-6"
    >
      <span className="h-px flex-1 max-w-[160px] bg-white/30" />
      <span className="text-xs tracking-[0.2em] text-white/40 sm:text-sm">
        {text}
      </span>
      <span className="h-px flex-1 max-w-[160px] bg-white/30" />
    </motion.div>
  )
}

export default function TrustSection() {
  return (
    <div className="font-sans text-white">
      {/* 상단 여백 */}
      <div className="h-48 sm:h-64" />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto w-full max-w-5xl px-7 sm:px-10"
      >
        {/* HERO TITLE */}
        <motion.h1
          variants={heroTitle}
          className="text-left font-extralight tracking-[0.06em] text-white"
          style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', lineHeight: 0.95 }}
        >
          TRUST
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={heroSub}
          className="mt-6 text-left text-base font-bold text-white sm:mt-8 sm:text-lg"
        >
          기술보다 중요한 것은 신뢰입니다
        </motion.p>

        {/* BODY — 한 줄씩 fade-up */}
        <div className="mt-14 max-w-xl space-y-2 sm:mt-20">
          <motion.p
            variants={bodyLine}
            className="text-left text-sm leading-relaxed text-white/70 sm:text-base"
          >
            수많은 연구와 AI 기술이 만든 결과
          </motion.p>
          <motion.p
            variants={bodyLine}
            className="text-left text-sm leading-relaxed text-white/70 sm:text-base"
          >
            그러나 우리가 만드는 것은 기술이 아닙니다.
          </motion.p>
          <motion.p
            variants={bodyLine}
            className="text-left text-sm leading-relaxed text-white/70 sm:text-base"
          >
            일상을 위한 새로운 가능성입니다.
          </motion.p>
        </div>

        {/* 가운데 빛 — 거대한 원의 일부 */}
        <motion.div variants={bodyLine} className="mt-10 sm:mt-14">
          <GlowCurve />
        </motion.div>
      </motion.section>

      {/* DIVIDER */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto mt-10 w-full max-w-5xl px-7 sm:px-10"
      >
        <Divider text="설리번 SW" />
      </motion.div>

      {/* CARDS */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={cardsContainer}
        className="mx-auto mt-12 w-full max-w-5xl px-4 pb-32 sm:px-10"
      >
        <div className="grid grid-cols-3 divide-x divide-white/10">
          <StatCard
            icon={Globe}
            label="글로벌 서비스"
            segments={[
              { type: 'num', value: 'count', end: 200, size: 'xl' },
              { type: 'text', text: '개국 이상', size: 'sm' },
            ]}
          />
          <StatCard
            icon={Download}
            label="설리번 플러스 다운로드 수"
            segments={[
              { type: 'num', value: 'count', end: 50, size: 'xl' },
              { type: 'text', text: '만', size: 'lg' },
              { type: 'text', text: '명 이상', size: 'sm' },
            ]}
          />
          <StatCard
            icon={Users}
            label="월별 이용자 수 (MAU)"
            segments={[
              {
                type: 'num',
                value: 'count',
                end: 25000,
                size: 'xl',
                format: formatKorean,
              },
              { type: 'text', text: '명 이상', size: 'sm' },
            ]}
          />
        </div>
      </motion.div>

      {/* AWARDS TIMELINE SECTION */}
      <AwardsSection />

      {/* PARTNERS & COLLABORATION SECTION */}
      <PartnersSection />

      {/* CLOSING HERO SECTION */}
      <ClosingSection />

      {/* FOOTER */}
      <Footer />
    </div>
  )
}
