'use client'

import { useEffect } from 'react'
import Typed from 'typed.js'

export function TypedText() {
  useEffect(() => {
    const poetry = [
      '18歲，是學生',
      '喜歡瞎折腾',
      'Have some time?',
      'Check out this place.',
      '沒啥好說的',
      '祝君好夢。',
    ]
    const typed = new Typed('.typed', {
      strings: poetry,
      typeSpeed: 40,
      backSpeed: 40,
      startDelay: 600,
    })
    return () => typed.destroy()
  }, [])

  return (
    <div className="">
      <span className="typed leading-7 tracking-wide"></span>
    </div>
  )
}
