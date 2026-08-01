'use client'

import { motion } from 'framer-motion'
import { Globe, Download, Users } from 'lucide-react'
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
  show: { opacity: 1, y: 0, transition: { duration: 1.0, ease: easeOut } },
}

function Divider({ text }) {
  return (
    <motion.div
      variants={dividerVariants}
      className="flex items-center justify-center gap-5 py-6"
    >
      <span className="h-px -ml-[188px] flex-1 max-w-[235px] bg-white/55" />
      <span className="text-sm font-bold tracking-[0.2em] text-white sm:text-base">
        {text}
      </span>
      <span className="h-px -mr-[188px] flex-1 max-w-[235px] bg-white/55" />
    </motion.div>
  )
}

export default function TrustSection() {
  return (
    <div className="font-sans text-white bg-[#111111]">
      {/* 상단 여백 */}
      <div className="h-48 sm:h-64" />

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="mx-auto w-full max-w-5xl px-7 sm:px-10"
      >
        {/* HERO TITLE */}
        <motion.h1
          variants={heroTitle}
          className="text-left font-bold tracking-[0.06em] text-white"
          style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', lineHeight: 0.95 }}
        >
          TRUST
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={heroSub}
          className="mt-6 text-left text-4xl font-extrabold text-white sm:mt-8 sm:text-5xl"
        >
          기술보다 중요한 것은 신뢰
        </motion.p>

        {/* BODY — 한 줄씩 fade-up */}
        <div className="mt-10 max-w-2xl space-y-3 sm:mt-12">
          <motion.p
            variants={bodyLine}
            className="text-left text-base leading-relaxed text-white/85 sm:text-lg"
          >
            수많은 연구와 AI 기술이 만든 결과
          </motion.p>
          <motion.p
            variants={bodyLine}
            className="text-left text-base leading-relaxed text-white/85 sm:text-lg"
          >
            그러나 우리가 만드는 것은 기술이 아닙니다.
          </motion.p>
          <motion.p
            variants={bodyLine}
            className="text-left text-base leading-relaxed text-white/85 sm:text-lg"
          >
            일상을 위한 새로운 가능성입니다.
          </motion.p>
        </div>
      </motion.section>

      {/* 아래 부분 전체 — 본문 바로 아래 촘촘히 이어붙임 */}
      <div className="[display:flow-root]">
        {/* DIVIDER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="mx-auto mt-[269px] w-full max-w-5xl px-7 sm:px-10"
        >
          <Divider text="설리번 SW" />
        </motion.div>

        {/* CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={cardsContainer}
          className="mx-auto mt-8 w-full max-w-5xl px-4 pb-32 sm:px-10"
        >
          <div className="grid grid-cols-3 divide-x divide-white/55">
            <StatCard
              icon={Globe}
              label="글로벌 서비스 국가 수"
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
    </div>
  )
}
