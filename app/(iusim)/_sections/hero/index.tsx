'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Spotlight } from '@/components/ui/spotlight'
import s from './hero.module.css'

export function Hero() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set([`.${s.eyebrow}`, `.${s.headline}`, `.${s.descriptor}`], {
        y: 28,
      })

      const tl = gsap.timeline({ delay: 0.2 })

      tl.to(`.${s.eyebrow}`, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
      })
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
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className={s.root}>
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
