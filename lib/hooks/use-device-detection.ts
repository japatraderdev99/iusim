import { useMediaQuery } from 'hamo'
import { useEffect, useState } from 'react'
import { breakpoints } from '@/styles/config'
import { usePreferredReducedMotion } from './use-sync-external'

export function useDeviceDetection() {
  const breakpoint = breakpoints.dt

  const isMobile = useMediaQuery(`(max-width: ${breakpoint - 1}px)`)
  const isDesktop = useMediaQuery(`(min-width: ${breakpoint}px)`)
  const isReducedMotion = usePreferredReducedMotion()
  const isLowPowerMode = useMediaQuery(
    '(any-pointer: coarse) and (hover: none)'
  )

  const [isSafari, setIsSafari] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    setIsSafari(
      /^(?<safariCheck>(?!chrome|android).)*safari/i.test(navigator.userAgent)
    )
  }, [])

  return {
    isMobile,
    isDesktop,
    isReducedMotion,
    isLowPowerMode,
    isSafari,
  }
}
