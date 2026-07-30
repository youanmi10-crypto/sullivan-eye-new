'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const easeOut = [0.16, 1, 0.3, 1]

// 순서 변경 금지 — 명세 데이터 그대로
const AWARDS = [
  {
    year: '2024',
    award: 'MWC GLOMO Award',
    desc: "'Best Use of Mobile for Accessibility & Inclusion' 수상",
  },
  {
    year: '2023',
    award: 'CES Innovation Award',
    desc: "'Software and Mobile Apps' 수상",
  },
  {
    year: '2023',
    award: 'Seoul Design Award',
    desc: '특별상 수상',
  },
  {
    year: '2022',
    award: 'MWC GLOMO Award',
    desc: "'Best Use of Mobile for Accessibility & Inclusion' 수상",
  },
  {
    year: '2022',
    award: 'Asia Communication Award',
    desc: "'The Social Contribution' 수상",
  },
  {
    year: '2021',
    award: '정보문화유공',
    desc: '국무총리 표창 수상',
  },
  {
    year: '2020',
    award: '과학기술정보통신부',
    desc: '장관상 수상',
  },
]

const headlineVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: easeOut },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
}

const dividerVariants = {
  hidden: { scaleX: 0, opacity: 0.15 },
  show: {
    scaleX: 1,
    opacity: 0.15,
    transition: { duration: 0.8, ease: easeOut },
  },
}

function AwardItem({ year, award, desc, isLast }) {
  return (
    <motion.div
      variants={itemVariants}
      className="group w-full"
    >
      <div className="mx-auto w-full max-w-2xl rounded-2xl px-6 py-8 text-center transition-colors duration-300 hover:bg-white/[0.07] sm:px-10">
        <p
          className="mb-3 text-sm tracking-wide"
          style={{ color: '#D8D8D8' }}
        >
          {year}
        </p>
        <h3 className="mb-3 text-xl font-extrabold text-white sm:text-2xl">
          {award}
        </h3>
        <p className="text-sm leading-relaxed text-white/70 sm:text-base">
          {desc}
        </p>
      </div>
      {!isLast && (
        <motion.div
          variants={dividerVariants}
          style={{ originX: 0.5 }}
          className="mx-auto h-px w-full max-w-2xl"
        >
          <div className="h-px w-full bg-white/15" />
        </motion.div>
      )}
    </motion.div>
  )
}

export default function AwardsSection() {
  const ref = useRef(null)

  // Spotlight 미세 Parallax: 스크롤하면 translateY 0 -> 80px
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const spotY = useTransform(scrollYProgress, [0, 1], [0, 80])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#0A0A0A] px-6 py-28 sm:px-10 sm:py-36"
    >
      {/* 미세 도트 그리드 배경 — 기술/정밀 느낌 (옵션 A) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)',
          maskImage:
            'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.35) 60%, transparent 100%)',
        }}
      />

      {/* 상단 중앙 Spotlight — CSS radial-gradient only */}
      <motion.div
        style={{ y: spotY }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div
          className="h-[600px] w-[1000px] sm:h-[800px] sm:w-[1400px] max-[768px]:h-[300px] max-[768px]:w-[140vw] max-[768px]:opacity-50"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 65%)',
            opacity: 0.15,
          }}
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* 헤드라인 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          variants={headlineVariants}
          className="mb-24 text-center sm:mb-32"
        >
          <h2
            className="font-extrabold leading-[1.1] text-white"
            style={{ fontSize: 'clamp(2.1rem, 8vw, 4.5rem)' }}
          >
            세계가 인정한
            <br />
            투아트의 기술력
          </h2>
        </motion.div>

        {/* Timeline — 첫 항목은 헤드라인 완료 후 0.3초 뒤 등장 */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
          transition={{ staggerChildren: 0.15, delayChildren: 0.3 }}
          className="flex flex-col items-center"
        >
          {AWARDS.map((a, i) => (
            <AwardItem
              key={`${a.year}-${a.award}-${i}`}
              year={a.year}
              award={a.award}
              desc={a.desc}
              isLast={i === AWARDS.length - 1}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
