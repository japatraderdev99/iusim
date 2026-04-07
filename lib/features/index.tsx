/**
 * Optional Features for Root Layout
 *
 * Conditionally loads optional features based on usage.
 * WebGL/WebGPU canvas is lazy-loaded and only mounts when a page
 * uses `<Wrapper webgl>`. No configuration required.
 */

'use client'

import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const isDevelopment = process.env.NODE_ENV === 'development'

const OrchestraTools = dynamic(
  () => import('@/dev').then((mod) => ({ default: mod.OrchestraTools })),
  { ssr: false }
)

const GSAPRuntime = dynamic(
  () =>
    import('@/components/effects/gsap').then((mod) => ({
      default: mod.GSAPRuntime,
    })),
  { ssr: false }
)

export function OptionalFeatures() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null

  return (
    <>
      <GSAPRuntime />
      {isDevelopment && <OrchestraTools />}
    </>
  )
}
