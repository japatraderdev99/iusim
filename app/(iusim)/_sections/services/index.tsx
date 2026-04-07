'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './services.module.css'

gsap.registerPlugin(ScrollTrigger)

const TIERS = [
  {
    code: '01',
    name: 'Essential',
    description:
      'Estabilização visual do ativo. Fundação técnica para portfólios de alta rotação.',
  },
  {
    code: '02',
    name: 'Pro',
    description:
      'Expansão de mercado. Cinematografia estendida e estratégia editorial integrada.',
  },
  {
    code: '03',
    name: 'Signature',
    description:
      'Arquitetura completa de presença. Cinema grade, distribuição global e curadoria narrativa.',
  },
  {
    code: '—',
    name: 'Bespoke',
    description:
      'Seleção privada. Operações sob confidencialidade. Acesso por indicação.',
  },
] as const

export function Services() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.title}`,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.title}`,
            start: 'top 85%',
            once: true,
          },
        }
      )

      ScrollTrigger.batch(`.${s.tierCard}`, {
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.1,
              ease: 'power3.out',
            }
          )
        },
        once: true,
        start: 'top 85%',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="servicos" ref={rootRef} className={s.root}>
      <div className={s.inner}>
        {/* Header */}
        <div className={s.header}>
          <p className={s.sectionTag}>Esteira de Alocação</p>
          <h2 className={s.title}>Módulos de Defesa.</h2>
        </div>

        {/* Tier cards */}
        <div className={s.tiersGrid}>
          {TIERS.map((tier) => (
            <div key={tier.code} className={s.tierCard}>
              <span className={s.tierCode}>{tier.code}</span>
              <h3 className={s.tierName}>{tier.name}</h3>
              <p className={s.tierDesc}>{tier.description}</p>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className={s.footerNote}>
          <p className={s.footerNoteLine}>
            Cada módulo é dimensionado após avaliação do ativo.
          </p>
          <p className={s.footerNoteLine}>
            Operações de magnitude singular seguem modelo Bespoke — estruturadas
            em reunião executiva.
          </p>
        </div>
      </div>
    </section>
  )
}
