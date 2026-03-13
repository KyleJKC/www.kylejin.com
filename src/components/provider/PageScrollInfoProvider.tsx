import { useLayoutEffect, useRef } from 'react'
import { throttle } from 'lodash-es'
import { useSetAtom } from 'jotai'
import { pageScrollLocationAtom, pageScrollDirectionAtom } from '@/store/scrollInfo'

export function PageScrollInfoProvider() {
  const setScrollLocation = useSetAtom(pageScrollLocationAtom)
  const setScrollDirection = useSetAtom(pageScrollDirectionAtom)
  const prevScrollY = useRef(0)

  useLayoutEffect(() => {
    const scrollHandler = throttle(
      () => {
        let currentTop = document.documentElement.scrollTop

        if (currentTop === 0) {
          const bodyStyle = document.body.style
          if (bodyStyle.position === 'fixed') {
            currentTop = Math.abs(parseInt(bodyStyle.top, 10))
          }
        }

        setScrollDirection(prevScrollY.current - currentTop > 0 ? 'up' : 'down')
        prevScrollY.current = currentTop
        setScrollLocation(currentTop)
      },
      16,
      { leading: false },
    )

    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => {
      window.removeEventListener('scroll', scrollHandler)
      scrollHandler.cancel()
    }
  }, [])

  return null
}
