'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

const easeOut = [0.16, 1, 0.3, 1]

// 명세 순서 그대로 (변경 금지)
const PARTNERS = [
  {
    name: 'SK텔레콤',
    desc: [
      'ESG 협업으로 SK텔레콤의 AI를',
      '투아트의 솔루션에 결합',
    ],
  },
  {
    name: '삼성전자',
    desc: [
      '가전 기기의 시각장애인과 고령자의 정보 접근성을 위해',
      '가전QR모드 및 모두의 사용법 개발',
    ],
  },
  {
    name: 'BGF Retail',
    desc: [
      'CU 편의점에서 시각장애인의 쇼핑 편의를 위해',
      '설리번 플러스 내 CU모드 개발',
    ],
  },
  {
    name: '국민권익위원회',
    desc: ['모든 보도자료에 설리번 플러스 다운로드 QR 삽입'],
  },
  {
    name: '한국관광공사',
    desc: ['경주국립공원 AI 기반 베리어프리 웹사이트 운영'],
  },
]

const LOGOS = ['SK', 'Samsung', 'BGF', '국민권익위원회', '한국관광공사']

// 화면 중앙에 위치한 항목만 활성화(밝게) 하는 IntersectionObserver 훅
function useCenterFocus(refs, count) {
  const [active, setActive] = useState(0)
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const idx = Number(e.target.dataset.idx)
            setActive(idx)
          }
        })
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    )
    refs.current.forEach((r) => r && obs.observe(r))
    return () => obs.disconnect()
  }, [refs, count])
  return active
}

// TUAT 워드마크 (에셋 없으므로 CSS/SVG로 재현)
function TuatLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 1.0, ease: easeOut }}
      className="flex flex-col items-center"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        className="mb-5"
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          stroke="rgba(255,255,255,0.85)"
          strokeWidth="1.2"
        />
        <circle cx="32" cy="32" r="3.2" fill="rgba(255,255,255,0.9)" />
      </svg>
      <span
        className="text-2xl font-semibold tracking-[0.35em] text-white"
        style={{ paddingLeft: '0.35em' }}
      >
        TUAT
      </span>
    </motion.div>
  )
}

export default function PartnersSection() {
  const ref = useRef(null)
  const itemRefs = useRef([])
  const active = useCenterFocus(itemRefs, PARTNERS.length)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const spotY = useTransform(scrollYProgress, [0, 1], [0, 80])
  const spotOpacity = useTransform(scrollYProgress, [0, 1], [0.18, 0.08])

  return (
    <section
      ref={ref}
      className="relative overflow-hidden px-6 py-28 sm:px-10 sm:py-36"
    >
      {/* 상단 중앙 Spot Light (CSS radial-gradient only) */}
      <motion.div
        style={{ y: spotY, opacity: spotOpacity }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div
          className="h-[600px] w-[1000px] sm:h-[800px] sm:w-[1400px]"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            opacity: 1, // opacity 는 motion 이 관리
          }}
        />
      </motion.div>

      <div className="relative mx-auto w-full max-w-4xl">
        {/* TUAT 로고 — 먼저 등장 */}
        <div className="mb-24 flex justify-center sm:mb-28">
          <TuatLogo />
        </div>

        {/* 헤드라인 (TUAT 로고 0.3초 뒤 등장) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.3 }}
          className="mb-24 text-center sm:mb-32"
        >
          <h2
            className="font-bold leading-[1.25] text-white"
            style={{ fontSize: 'clamp(1.6rem, 4.6vw, 3.4rem)' }}
          >
            <span className="whitespace-nowrap">
              국내 주요 대기업 및 국민권익위원회와
            </span>
            <br />
            지속적인 협업 네트워크 구축
          </h2>
        </motion.div>

        {/* Partner List — Focus Highlight */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.18 }}
          className="mx-auto flex max-w-2xl flex-col items-center"
        >
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.name}
              ref={(el) => (itemRefs.current[i] = el)}
              data-idx={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: easeOut },
                },
              }}
              className="group w-full"
            >
              <div className="rounded-[20px] px-6 py-8 text-center transition-colors duration-300 hover:bg-white/[0.03] sm:px-10">
                {/* inner: focus highlight 가 opacity 제어 (entrance 와 충돌 방지) */}
                <motion.div
                  animate={{ opacity: active === i ? 1 : 0.7 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <p className="mb-3 text-[1.5rem] font-bold leading-tight text-white sm:text-[2.5rem]">
                    {p.name}
                  </p>
                  <div
                    className="space-y-1 text-sm leading-[1.7] sm:text-base"
                    style={{ color: '#CFCFCF' }}
                  >
                    {p.desc.map((line, j) => (
                      <p key={j}>{line}</p>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 하단 Partner Logo Strip */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.1 }}
          className="mx-auto mt-24 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-10 sm:mt-32 sm:grid-cols-3 lg:grid-cols-5"
        >
          {LOGOS.map((logo) => (
            <motion.div
              key={logo}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: easeOut },
                },
              }}
              className="flex items-center justify-center"
            >
              <span className="cursor-default text-base font-medium tracking-wide text-white/80 grayscale transition-all duration-300 hover:scale-[1.03] hover:text-white hover:grayscale-0 sm:text-lg">
                {logo}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
