'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

// easeOutExpo
const easeOutExpo = (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))

/**
 * CountUp
 * @param {number} end      최종 값
 * @param {number} duration 초 단위 애니메이션 길이
 * @param {(n:number)=>string} [format] 사용자 지정 포맷 (예: 만/천 한국식)
 */
export default function CountUp({ end, duration = 1.8, format }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0 })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    let raf
    const start = performance.now()
    const tick = (now) => {
      const elapsed = (now - start) / 1000
      const p = Math.min(elapsed / duration, 1)
      const eased = easeOutExpo(p)
      setValue(end * eased)
      if (p < 1) raf = requestAnimationFrame(tick)
      else setValue(end)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, end, duration])

  const text = format ? format(value) : Math.round(value).toLocaleString('ko-KR')

  return <span ref={ref}>{text}</span>
}

/** 한국식 만/천 포맷 (예: 25000 -> "2만 5천") */
export function formatKorean(n) {
  const v = Math.round(n)
  const 만 = Math.floor(v / 10000)
  const 천 = Math.floor((v % 10000) / 1000)
  let out = ''
  if (만 > 0) out += `${만}만 `
  if (천 > 0) out += `${천}천`
  return out.trim()
}
