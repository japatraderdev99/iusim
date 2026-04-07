'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import s from './multi-step-loader.module.css'

// ─── Icons (from Aceternity source) ──────────────────────────────────────────

function CheckIcon({ className }: { className?: string | undefined }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={cn(s.icon, className)}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

function CheckFilled({ className }: { className?: string | undefined }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(s.icon, className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
        clipRule="evenodd"
      />
    </svg>
  )
}

// ─── Iusim loading states ─────────────────────────────────────────────────────

const LOADING_STATES = [
  { text: 'Estabelecendo conexão...' },
  { text: 'Carregando ambiente visual...' },
  { text: 'Preparando protocolo de análise...' },
  { text: 'Iusim.' },
] as const

const STEP_DURATION = 800
const LAST_STEP_HOLD = 1200

// ─── LoaderCore — Aceternity visual logic ─────────────────────────────────────

function LoaderCore({ value }: { value: number }) {
  return (
    <div className={s.core}>
      <div
        className={s.stepList}
        style={{ transform: `translateY(-${value * 40}px)` }}
      >
        {LOADING_STATES.map((state, index) => {
          const distance = Math.abs(index - value)
          const opacity = Math.max(1 - distance * 0.2, 0)
          const isActive = index === value
          const isCompleted = index < value

          return (
            <div
              key={state.text}
              className={cn(s.step, isActive && s.stepActive)}
              style={{ opacity, transition: 'opacity 0.5s ease' }}
            >
              <div className={s.stepIconWrap}>
                {isCompleted || isActive ? (
                  <CheckFilled
                    className={cn(s.checkFilled, isActive && s.checkActive)}
                  />
                ) : (
                  <CheckIcon className={s.checkOutline} />
                )}
              </div>
              <span className={cn(s.stepText, isActive && s.stepTextActive)}>
                {state.text}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// ─── MultiStepLoader ──────────────────────────────────────────────────────────

export function MultiStepLoader() {
  const [current, setCurrent] = useState(0)
  const [visible, setVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)

  // Advance steps
  useEffect(() => {
    if (!visible) return

    const isLast = current === LOADING_STATES.length - 1
    const delay = isLast ? LAST_STEP_HOLD : STEP_DURATION

    const t = setTimeout(() => {
      if (isLast) {
        // Fade out overlay then unmount
        if (overlayRef.current) {
          gsap.to(overlayRef.current, {
            opacity: 0,
            duration: 0.7,
            ease: 'power2.inOut',
            onComplete: () => setVisible(false),
          })
        } else {
          setVisible(false)
        }
      } else {
        setCurrent((prev) => prev + 1)
      }
    }, delay)

    return () => clearTimeout(t)
  }, [current, visible])

  if (!visible) return null

  return (
    <div
      ref={overlayRef}
      className={s.overlay}
      role="status"
      aria-live="polite"
    >
      <div className={s.content}>
        <LoaderCore value={current} />
      </div>
      {/* Vignette — frames the step list, darkens edges */}
      <div className={s.vignette} aria-hidden="true" />
    </div>
  )
}
