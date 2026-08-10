'use client'

import { motion } from 'framer-motion'
import StatCard from './StatCard'
import { formatKorean } from './CountUp'
import AwardsSection from './AwardsSection'
import PartnersSection from './PartnersSection'
import ClosingSection from './ClosingSection'
import Footer from './Footer'
import { useIsLightTheme } from '@/components/useIsLightTheme'
import { GlobalIcon, DownloadIcon, UsersIcon } from './TrustIcons'

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
  const isLight = useIsLightTheme()
  const line = isLight ? 'bg-black/55' : 'bg-white/55'
  return (
    <motion.div
      variants={dividerVariants}
      className="flex flex-col items-center justify-center py-6"
    >
      <span className={`text-2xl font-normal tracking-tight ${isLight ? 'text-black' : 'text-white'} sm:text-3xl`}>
        {text}
      </span>
      <span className={`mt-6 w-px flex-1 ${line}`} style={{ height: 'clamp(48px, 8vw, 96px)' }} />
    </motion.div>
  )
}

export default function TrustSection() {
  const isLight = useIsLightTheme()
  const rootBg = isLight ? 'bg-white' : 'bg-[#111111]'
  const rootText = isLight ? 'text-black' : 'text-white'
  const titleColor = isLight ? 'text-black' : 'text-white'
  const bodyColor = isLight ? 'text-black' : 'text-white/85'
  return (
    <div className={`font-sans ${rootText} ${rootBg}`}>
      {/* 상단 여백 최소화 — 본문이 페이지 제일 위에 오도록 */}

      <motion.section
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="mx-auto w-full max-w-5xl px-7 sm:px-10"
      >
        {/* HERO TITLE */}
        <motion.h1
          variants={heroTitle}
          className={`text-left font-bold tracking-[0.06em] ${titleColor}`}
          style={{ fontSize: 'clamp(4rem, 14vw, 9rem)', lineHeight: 0.95 }}
        >
          TRUST
        </motion.h1>

        {/* SUBTITLE */}
        <motion.p
          variants={heroSub}
          className={`mt-6 text-left text-4xl font-extrabold ${titleColor} sm:mt-8 sm:text-5xl`}
        >
          기술보다 중요한 것은 신뢰
        </motion.p>

        {/* BODY — 한 줄씩 fade-up */}
        <div className="mt-10 max-w-2xl space-y-2 sm:mt-12">
          <motion.p
            variants={bodyLine}
            className={`text-left text-base leading-normal ${bodyColor} sm:text-lg`}
          >
            수많은 연구와 AI 기술이 만든 결과
          </motion.p>
          <motion.p
            variants={bodyLine}
            className={`text-left text-base leading-normal ${bodyColor} sm:text-lg`}
          >
            그러나 우리가 만드는 것은 기술이 아닙니다.
          </motion.p>
          <motion.p
            variants={bodyLine}
            className={`text-left text-base leading-normal ${bodyColor} sm:text-lg`}
          >
            일상을 위한 새로운 가능성입니다.
          </motion.p>
        </div>
      </motion.section>

      {/* 아래 부분 전체 — 본문 바로 아래 촘촘히 이어붙임 */}
      <div className="[display:flow-root]">
        {/* DIVIDER + 통합 카드 박스 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          className="mx-auto mt-20 w-full max-w-5xl px-7 sm:mt-24 sm:px-10"
        >
          <Divider text="설리번 SW" />

          <motion.div
            variants={cardsContainer}
            className={`mt-6 grid grid-cols-3 divide-x rounded-3xl border px-4 py-2 pb-10 mb-24 sm:py-4 sm:pb-12 sm:mb-32 ${isLight ? 'border-[#E2E2E5]' : 'border-white/15'}`}
          >
            <StatCard
              icon={GlobalIcon}
              label="글로벌 서비스 국가 수"
              desc="전 세계로 확장 중"
              segments={[
                { type: 'num', value: 'count', end: 200, size: 'xl' },
                { type: 'text', text: '개국 이상', size: 'sm' },
              ]}
            />
            <StatCard
              icon={DownloadIcon}
              label="설리번 플러스 다운로드 수"
              desc="사용자가 직접 선택"
              segments={[
                { type: 'num', value: 'count', end: 50, size: 'xl' },
                { type: 'text', text: '만', size: 'lg' },
                { type: 'text', text: '명 이상', size: 'sm' },
              ]}
            />
            <StatCard
              icon={UsersIcon}
              label="월별 이용자 수 (MAU)"
              desc="매월 꾸준히 성장"
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
          </motion.div>
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
