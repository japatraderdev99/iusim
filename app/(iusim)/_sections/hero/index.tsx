'use client'

import cn from 'clsx'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import s from './hero.module.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)
  const videoDesktopRef = useRef<HTMLVideoElement>(null)
  const videoMobileRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([`.${s.eyebrow}`, `.${s.headline}`, `.${s.descriptor}`], {
        y: 28,
      })

      const tl = gsap.timeline({ delay: 0.2 })

      tl.to(`.${s.videoWrap}`, {
        opacity: 1,
        duration: 2,
        ease: 'power2.out',
      })
        .to(
          `.${s.eyebrow}`,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=1.4'
        )
        .to(
          `.${s.headline}`,
          {
            opacity: 1,
            y: 0,
            duration: 1.4,
            ease: 'power3.out',
          },
          '-=0.7'
        )
        .to(
          `.${s.descriptor}`,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
          },
          '-=0.8'
        )
        .to(
          `.${s.scrollMark}`,
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.4'
        )
        .to(
          `.${s.soundToggle}`,
          {
            opacity: 1,
            duration: 0.6,
            ease: 'power2.out',
          },
          '-=0.3'
        )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  function toggleSound() {
    const nextMuted = !isMuted
    setIsMuted(nextMuted)

    for (const ref of [videoDesktopRef, videoMobileRef]) {
      const el = ref.current
      if (!el) continue
      el.muted = nextMuted
      if (!nextMuted) el.volume = 0.18 // starts at low volume, not full blast
    }
  }

  return (
    <section ref={rootRef} className={s.root}>
      {/* Background video */}
      <div className={s.videoWrap} aria-hidden="true">
        <video
          ref={videoDesktopRef}
          className={cn(s.video, s.videoDesktop)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/iusim-hero-video1.mp4" type="video/mp4" />
        </video>
        <video
          ref={videoMobileRef}
          className={cn(s.video, s.videoMobile)}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src="/video/iumin-video-hero-mobile.mp4" type="video/mp4" />
        </video>
        <div className={s.videoOverlay} />
        <div className={s.videoVignette} />
      </div>

      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="rgba(255,255,255,1)"
      />

      <div className={s.topRule} aria-hidden="true" />

      <div className={s.inner}>
        {/* Headline column */}
        <div className={s.headlineCol}>
          <p className={s.eyebrow}>— Protocolo de Defesa Patrimonial —</p>
          <h1 className={s.headline}>
            A Engenharia
            <br />
            <em className={s.headlineItalic}>Visual</em>
            <br />
            da Liquidez.
          </h1>
        </div>

        {/* Descriptor column */}
        <div className={s.descriptorCol}>
          <p className={s.descriptor}>
            Defendemos o valor de ativos imobiliários singulares através de
            engenharia visual de precisão.
          </p>
        </div>
      </div>

      {/* Sound toggle */}
      <button
        type="button"
        className={cn(s.soundToggle, !isMuted && s.isUnmuted)}
        onClick={toggleSound}
        aria-label={isMuted ? 'Ativar som' : 'Desativar som'}
      >
        <span className={s.soundIcon} aria-hidden="true">
          {isMuted ? (
            /* Speaker off */
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            /* Speaker on */
            <svg
              aria-hidden="true"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </span>
        <span className={s.soundLabel}>{isMuted ? 'Som' : 'Mudo'}</span>
      </button>

      {/* Bottom section transition */}
      <div className={s.sectionFade} aria-hidden="true" />

      {/* Scroll indicator */}
      <div className={s.scrollMark} aria-hidden="true">
        <div className={s.scrollLine}>
          <div className={s.scrollLineTrack} />
        </div>
        <span className={s.scrollMarkLabel}>Scroll</span>
      </div>
    </section>
  )
}
