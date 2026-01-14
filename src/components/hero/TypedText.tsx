'use client'

import { useEffect, useRef } from 'react'
import Typed from 'typed.js'

function getAge(birthDate: Date) {
  const today = new Date()
  let age = today.getFullYear() - birthDate.getFullYear()

  const hasHadBirthdayThisYear =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())

  if (!hasHadBirthdayThisYear) {
    age--
  }

  return age
}

export function TypedText() {
  const elRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    if (!elRef.current) return

    const birthDate = new Date(2006, 11, 8) // ⚠️ 月份是 0-based，12 月 = 11
    const age = getAge(birthDate)

    const poetry = [
      `${age}歲，是學生`,
      '喜歡瞎折腾',
      'Have some time?',
      'Check out this place.',
      '沒啥好說的',
      '祝君好夢。',
    ]

    const typed = new Typed(elRef.current, {
      strings: poetry,
      typeSpeed: 40,
      backSpeed: 40,
      startDelay: 600,
      loop: true, // 可选：循环
    })

    return () => typed.destroy()
  }, [])

  return (
    <div>
      <span
        ref={elRef}
        className="leading-7 tracking-wide"
      />
    </div>
  )
}