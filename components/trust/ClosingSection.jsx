'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import { useIsLightTheme } from '@/components/useIsLightTheme'

const easeOut = [0.16, 1, 0.3, 1]

// ── 제품 이미지 에셋 연결 ──────────────────────────────
// public/images/closing-product-new.png 사용 (새 제품 이미지)
const productImg = '/images/closing-product-new.png'

// 제품 대체 비주얼 (에셋 없을 때만 표시)
function ProductFallback() {
  const isLight = useIsLightTheme()
  return (
    <div className="relative flex h-[420px] w-[300px] items-center justify-center sm:h-[520px] sm:w-[360px]">
      <div
        className={`h-full w-full rounded-[40px] ${isLight ? 'border-black/15' : 'border-white/15'}`}
        style={{
          background: isLight
            ? 'linear-gradient(160deg, rgba(0,0,0,0.10), rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.06))'
            : 'linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.06))',
          boxShadow: isLight
            ? 'inset 0 1px 1px rgba(0,0,0,0.25), 0 30px 80px rgba(0,0,0,0.15)'
            : 'inset 0 1px 1px rgba(255,255,255,0.25), 0 30px 80px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(2px)',
        }}
      />
      {/* TUAT 로고 자리 (shimmer 타깃) */}
      <div
        id="product-logo"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] ${isLight ? 'text-black' : 'text-white/40'}`}
      >
        TUAT
      </div>
    </div>
  )
}

export default function ClosingSection() {
  const isLight = useIsLightTheme()
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

  const spotlightColor = isLight ? 'rgba(0,0,0,1)' : 'rgba(255,255,255,1)'
  const fallbackBorder = isLight ? 'border-black/15' : 'border-white/15'
  const fallbackBg = isLight
    ? 'linear-gradient(160deg, rgba(0,0,0,0.10), rgba(0,0,0,0.02) 45%, rgba(0,0,0,0.06))'
    : 'linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.06))'
  const fallbackShadow = isLight
    ? 'inset 0 1px 1px rgba(0,0,0,0.25), 0 30px 80px rgba(0,0,0,0.15)'
    : 'inset 0 1px 1px rgba(255,255,255,0.25), 0 30px 80px rgba(0,0,0,0.6)'
  const logoColor = isLight ? 'text-black' : 'text-white/40'

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end end'],
  })

  // 배경 Spotlight 미세 Parallax + Breathing
  const spotY = useTransform(scrollYProgress, [0, 1], [0, 40])
  const spotOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0.1, 0.1, 0.14])

  // 제품 등장(하단에서 위로) + 스크롤 scale 0.95->1.00
  const productY = useTransform(scrollYProgress, [0, 0.5], [100, 0])
  const productOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])
  const productScale = useTransform(scrollYProgress, [0.5, 1], [0.95, 1.0])

  // 페이지 끝 도달 시 제품 살짝 확대 1 -> 1.03
  const endScale = useTransform(scrollYProgress, [0.9, 1], [1, 1.03])

  // 3D hover
  const rotateY = hovered ? 3 : 0
  const rotateX = hovered ? -2 : 0

  return (
    <section
      ref={ref}
      className={`relative overflow-hidden ${isLight ? 'bg-[#F5F5F7]' : 'bg-[#111111]'} px-6 pb-16 pt-28 sm:px-10 sm:pt-36`}
    >
      {/* 위쪽 중앙 Spotlight (CSS radial-gradient only) */}
      <motion.div
        style={{ y: spotY, opacity: spotOpacity }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div
          className="h-[700px] w-[1100px] sm:h-[900px] sm:w-[1500px] max-[768px]:h-[320px] max-[768px]:w-[140vw]"
          style={{
            background:
              `radial-gradient(ellipse 50% 50% at 50% 0%, ${spotlightColor} 0%, rgba(255,255,255,0) 70%)`,
            opacity: 1,
          }}
        />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* 슬로건 */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.2 }}
          className={`mt-16 leading-normal ${isLight ? 'text-black' : 'text-white'} sm:mt-20 max-[768px]:leading-[1.4]`}
          style={{ fontSize: 'clamp(1.4rem, 4.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '-0.02em' }}
        >
          세상을 보는 방식이 달라지면
          <br />
          당신의 삶도 달라집니다
        </motion.p>

        {/* 메인 타이틀 SULLIVAN EYE — 단어 전체가 선명해지는 효과 */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.3, ease: easeOut }}
          className={`mt-24 font-bold tracking-[0.04em] ${isLight ? 'text-black' : 'text-white'} sm:mt-28`}
          style={{
            fontSize: 'clamp(3.5rem, 13vw, 7.5rem)',
            lineHeight: 1,
          }}
        >
          SULLIVAN EYE
        </motion.h2>

        {/* 서브 카피 */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.15 }}
          className={`mt-8 font-medium ${isLight ? 'text-black' : 'text-white/90'}`}
          style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }}
        >
          당신의 시선이 되는 AI
        </motion.p>

        {/* 제품 이미지 영역 (충분한 여백) */}
        <div className="relative mt-32 sm:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0 }}
            transition={{ duration: 1.1, ease: easeOut }}
            className="flex justify-center"
          >
            <motion.div
              onHoverStart={() => setHovered(true)}
              onHoverEnd={() => setHovered(false)}
              style={{
                scale: productScale,
                rotateY,
                rotateX,
                transformPerspective: 1000,
              }}
              className="relative"
            >
              {/* 스크롤 끝 확대 래퍼 */}
              <motion.div style={{ scale: endScale }}>
                {productImg ? (
                  <img
                    src={productImg}
                    alt="SULLIVAN EYE"
                    className="h-auto w-[840px] sm:w-[1040px] max-[768px]:w-full max-[768px]:max-w-[300px]"
                  />
                ) : (
                  <ProductFallback />
                )}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer 시작 전 여백 */}
        <div className="h-32 sm:h-40" />
      </div>
    </section>
  )
}
