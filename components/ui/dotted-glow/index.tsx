'use client'

import cn from 'clsx'
import { useEffect, useRef } from 'react'

interface DottedGlowBackgroundProps {
  className?: string
  /** Grid gap in pixels between dots (default: 16) */
  gap?: number
  /** Dot radius in pixels (default: 1.5) */
  radius?: number
  /** Overall opacity (default: 1) */
  opacity?: number
  /** Background opacity (default: 0 = transparent) */
  backgroundOpacity?: number
  /** CSS variable name for dot color in light mode */
  colorLightVar?: string
  /** CSS variable name for dot glow color in light mode */
  glowColorLightVar?: string
  /** CSS variable name for dot color in dark mode */
  colorDarkVar?: string
  /** CSS variable name for dot glow color in dark mode */
  glowColorDarkVar?: string
  /** Minimum animation speed multiplier (default: 0.3) */
  speedMin?: number
  /** Maximum animation speed multiplier (default: 1.6) */
  speedMax?: number
  /** Global speed scale (default: 1) */
  speedScale?: number
}

interface Dot {
  x: number
  y: number
  phase: number
  speed: number
}

function resolveCssVar(varName: string): string {
  if (!varName.startsWith('--')) return varName
  return (
    getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim() || '#888888'
  )
}

/**
 * Parse any CSS color string (hex 3/6/8, rgb, rgba) into [r, g, b] 0-255.
 * Returns [136, 136, 136] as fallback.
 */
function parseColorToRgb(color: string): [number, number, number] {
  const c = color.trim()

  // rgba(r, g, b, a) or rgb(r, g, b)
  const rgbMatch = c.match(
    /rgba?\(\s*(?<r>\d+)\s*,\s*(?<g>\d+)\s*,\s*(?<b>\d+)/
  )
  if (rgbMatch?.groups?.r && rgbMatch.groups.g && rgbMatch.groups.b) {
    return [
      Number(rgbMatch.groups.r),
      Number(rgbMatch.groups.g),
      Number(rgbMatch.groups.b),
    ]
  }

  // #rrggbb or #rrggbbaa
  const hexLong = c.match(
    /^#(?<r>[0-9a-f]{2})(?<g>[0-9a-f]{2})(?<b>[0-9a-f]{2})/i
  )
  if (hexLong?.groups?.r && hexLong.groups.g && hexLong.groups.b) {
    return [
      Number.parseInt(hexLong.groups.r, 16),
      Number.parseInt(hexLong.groups.g, 16),
      Number.parseInt(hexLong.groups.b, 16),
    ]
  }

  // #rgb
  const hexShort = c.match(/^#(?<r>[0-9a-f])(?<g>[0-9a-f])(?<b>[0-9a-f])$/i)
  if (hexShort?.groups?.r && hexShort.groups.g && hexShort.groups.b) {
    return [
      Number.parseInt(hexShort.groups.r + hexShort.groups.r, 16),
      Number.parseInt(hexShort.groups.g + hexShort.groups.g, 16),
      Number.parseInt(hexShort.groups.b + hexShort.groups.b, 16),
    ]
  }

  return [136, 136, 136]
}

function colorWithAlpha(cssVar: string, alpha: number): string {
  const raw = resolveCssVar(cssVar)
  const [r, g, b] = parseColorToRgb(raw)
  return `rgba(${r},${g},${b},${alpha})`
}

/** Triangle wave: smooth 0 → 1 → 0 pulsing cycle */
function triWave(t: number): number {
  const mod = ((t % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2)
  return mod < Math.PI ? mod / Math.PI : 2 - mod / Math.PI
}

/**
 * Aceternity DottedGlowBackground — canvas-based animated dot grid.
 * Each dot pulses independently at a random speed, creating an organic,
 * living background texture.
 *
 * Usage (standalone, fills parent):
 * ```tsx
 * <div className="relative overflow-hidden">
 *   <DottedGlowBackground gap={16} radius={1.5} colorDarkVar="--color-ivory-muted" />
 *   <div className="relative z-10">Content</div>
 * </div>
 * ```
 */
export function DottedGlowBackground({
  className,
  gap = 16,
  radius = 1.5,
  opacity = 1,
  backgroundOpacity = 0,
  colorLightVar = '--color-neutral-500',
  glowColorLightVar = '--color-neutral-600',
  colorDarkVar = '--color-ivory-muted',
  glowColorDarkVar = '--color-ivory-muted',
  speedMin = 0.3,
  speedMax = 1.6,
  speedScale = 1,
}: DottedGlowBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const dotsRef = useRef<Dot[]>([])
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const parent = canvas.parentElement
    if (!parent) return

    const isDark = () => {
      const dataTheme = document.documentElement.getAttribute('data-theme')
      if (dataTheme === 'dark') return true
      if (dataTheme === 'light') return false
      // Fallback: class-based detection
      return (
        !document.documentElement.classList.contains('light') &&
        (document.documentElement.classList.contains('dark') ||
          window.matchMedia('(prefers-color-scheme: dark)').matches)
      )
    }

    function buildDots(w: number, h: number): Dot[] {
      const cols = Math.ceil(w / gap) + 1
      const rows = Math.ceil(h / gap) + 1
      const result: Dot[] = []
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          result.push({
            x: col * gap,
            y: row * gap,
            phase: Math.random() * Math.PI * 2,
            speed:
              (speedMin + Math.random() * (speedMax - speedMin)) * speedScale,
          })
        }
      }
      return result
    }

    function resize() {
      const dpr = window.devicePixelRatio || 1
      const rect = parent!.getBoundingClientRect()
      canvas!.width = Math.floor(rect.width * dpr)
      canvas!.height = Math.floor(rect.height * dpr)
      canvas!.style.width = `${rect.width}px`
      canvas!.style.height = `${rect.height}px`
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      dotsRef.current = buildDots(rect.width, rect.height)
    }

    function draw(ts: number) {
      const dt = Math.min((ts - timeRef.current) / 1000, 0.05) // cap at 50ms
      timeRef.current = ts

      const w = canvas!.getBoundingClientRect().width
      const h = canvas!.getBoundingClientRect().height

      ctx!.clearRect(0, 0, w, h)

      if (backgroundOpacity > 0) {
        ctx!.globalAlpha = backgroundOpacity
        ctx!.fillStyle = isDark() ? '#000' : '#fff'
        ctx!.fillRect(0, 0, w, h)
      }

      const dark = isDark()
      const dotColor = resolveCssVar(dark ? colorDarkVar : colorLightVar)

      // Draw pulsing dots
      for (const dot of dotsRef.current) {
        dot.phase += dot.speed * dt
        const pulse = triWave(dot.phase)
        ctx!.globalAlpha = (0.08 + pulse * 0.55) * opacity
        ctx!.fillStyle = dotColor
        ctx!.beginPath()
        ctx!.arc(dot.x, dot.y, radius, 0, Math.PI * 2)
        ctx!.fill()
      }

      // Center radial glow overlay — use colorWithAlpha to avoid invalid color strings
      const glowGrad = ctx!.createRadialGradient(
        w / 2,
        h * 0.5,
        0,
        w / 2,
        h * 0.5,
        Math.max(w, h) * 0.55
      )
      glowGrad.addColorStop(
        0,
        colorWithAlpha(dark ? glowColorDarkVar : glowColorLightVar, 0.16)
      )
      glowGrad.addColorStop(1, 'rgba(0,0,0,0)')
      ctx!.globalAlpha = opacity
      ctx!.fillStyle = glowGrad
      ctx!.fillRect(0, 0, w, h)

      rafRef.current = requestAnimationFrame(draw)
    }

    resize()
    const observer = new ResizeObserver(resize)
    observer.observe(parent)

    timeRef.current = performance.now()
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      observer.disconnect()
    }
  }, [
    gap,
    radius,
    opacity,
    backgroundOpacity,
    colorLightVar,
    colorDarkVar,
    glowColorLightVar,
    glowColorDarkVar,
    speedMin,
    speedMax,
    speedScale,
  ])

  return (
    <canvas
      ref={canvasRef}
      className={cn('pointer-events-none absolute inset-0', className)}
    />
  )
}

/**
 * Wrapper component: applies DottedGlowBackground as a section backdrop.
 * Children render above the canvas layer.
 */
interface DottedGlowProps extends DottedGlowBackgroundProps {
  children?: React.ReactNode
  wrapperClassName?: string
}

export function DottedGlow({
  children,
  wrapperClassName,
  ...bgProps
}: DottedGlowProps) {
  return (
    <div className={cn('relative overflow-hidden', wrapperClassName)}>
      <DottedGlowBackground {...bgProps} />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
