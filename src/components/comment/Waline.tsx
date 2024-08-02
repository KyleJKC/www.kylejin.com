import { useEffect, useRef } from 'react'
import { init } from '@waline/client'
import '@waline/client/style'

export function Waline({ serverURL }: { serverURL: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const walineInst = init({
      el: ref.current,
      lang: 'en',
      serverURL,
      dark: "[data-theme='dark']",
      meta: ['nick'],
      imageUploader: false,
      search: false,
      copyright: false,
      locale: {
        placeholder: 'Wanna leave a comment? You don\'t necessarily have to create an account.',
      },
      emoji: ['//cdn.jsdelivr.net/gh/walinejs/emojis@1.1.0/tw-emoji'],
    })

    return () => {
      if (ref.current) {
        walineInst?.destroy()
      }
    }
  }, [serverURL])

  return <div ref={ref}></div>
}