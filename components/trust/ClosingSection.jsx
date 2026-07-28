'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'

const easeOut = [0.16, 1, 0.3, 1]

// ── 제품 이미지 에셋 연결 ──────────────────────────────
// public/images/closing-product.png 사용
const productImg = '/images/closing-product.png'

// 제품 대체 비주얼 (에셋 없을 때만 표시)
function ProductFallback() {
  return (
    <div className="relative flex h-[420px] w-[300px] items-center justify-center sm:h-[520px] sm:w-[360px]">
      <div
        className="h-full w-full rounded-[40px] border border-white/15"
        style={{
          background:
            'linear-gradient(160deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02) 45%, rgba(255,255,255,0.06))',
          boxShadow:
            'inset 0 1px 1px rgba(255,255,255,0.25), 0 30px 80px rgba(0,0,0,0.6)',
          backdropFilter: 'blur(2px)',
        }}
      />
      {/* TUAT 로고 자리 (shimmer 타깃) */}
      <div
        id="product-logo"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] text-white/40"
      >
        TUAT
      </div>
    </div>
  )
}

export default function ClosingSection() {
  const ref = useRef(null)
  const [hovered, setHovered] = useState(false)

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
      className="relative overflow-hidden px-6 pb-16 pt-28 sm:px-10 sm:pt-36"
    >
      {/* 위쪽 중앙 Spotlight (CSS radial-gradient only) */}
      <motion.div
        style={{ y: spotY, opacity: spotOpacity }}
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      >
        <div
          className="h-[700px] w-[1100px] sm:h-[900px] sm:w-[1500px]"
          style={{
            background:
              'radial-gradient(ellipse 50% 50% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 70%)',
            opacity: 1,
          }}
        />
      </motion.div>

      <div className="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        {/* CLOSING */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 1.0, ease: easeOut }}
          className="text-[#F2F2F2]"
          style={{
            fontSize: 'clamp(1.1rem, 3vw, 1.75rem)',
            letterSpacing: '0.4em',
            fontWeight: 400,
            paddingLeft: '0.4em',
          }}
        >
          CLOSING
        </motion.p>

        {/* 슬로건 */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.2 }}
          className="mt-16 font-medium leading-snug text-white sm:mt-20"
          style={{ fontSize: 'clamp(1.75rem, 6vw, 3.25rem)' }}
        >
          세상을 보는 방식이 달라지면,
          <br />
          당신의 삶도 달라집니다.
        </motion.p>

        {/* 메인 타이틀 SULLIVAN EYE — 단어 전체가 선명해지는 효과 */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }}
          whileInView={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1.3, ease: easeOut }}
          className="mt-24 font-extralight tracking-[0.04em] text-white sm:mt-28"
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
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 1.0, ease: easeOut, delay: 0.15 }}
          className="mt-8 font-medium text-white/90"
          style={{ fontSize: 'clamp(1.6rem, 5vw, 3rem)' }}
        >
          당신의 시선이 되는 AI
        </motion.p>

        {/* 제품 이미지 영역 (충분한 여백) */}
        <div className="mt-32 sm:mt-40">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
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
                    className="h-auto w-[420px] sm:w-[520px]"
                  />
                ) : (
                  <ProductFallback />
                )}

                {/* Shimmer — 로고 부분을 한 번 스쳐 지나가는 은은한 빛 */}
                {!productImg && (
                  <motion.div
                    initial={{ x: '-120%', opacity: 0 }}
                    whileInView={{ x: '120%', opacity: [0, 0.6, 0] }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1.6, ease: 'easeInOut', delay: 1.2 }}
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-[40px]"
                  >
                    <div
                      className="absolute top-1/2 h-[60%] w-1/3 -translate-y-1/2"
                      style={{
                        background:
                          'linear-gradient(105deg, transparent, rgba(255,255,255,0.5), transparent)',
                        filter: 'blur(10px)',
                      }}
                    />
                  </motion.div>
                )}
              </motion.div>

              {/* 바닥 반사 그림자 */}
              <div
                className="pointer-events-none absolute -bottom-10 left-1/2 h-[120px] w-[320px] -translate-x-1/2"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0) 70%)',
                  filter: 'blur(70px)',
                  opacity: 0.2,
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Footer 시작 전 여백 */}
        <div className="h-32 sm:h-40" />
      </div>
    </section>
  )
}
