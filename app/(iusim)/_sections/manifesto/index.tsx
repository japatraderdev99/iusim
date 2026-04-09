'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { DottedGlowBackground } from '@/components/ui/dotted-glow'
import { Link } from '@/components/ui/link'
import s from './manifesto.module.css'

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  {
    number: '96',
    suffix: '%',
    label: 'dos compradores',
    description:
      'iniciam a busca por imóveis exclusivamente em ambiente digital',
    source: 'NAR 2024',
  },
  {
    number: '+403',
    suffix: '%',
    label: 'de aumento em',
    description: 'consultas com vídeo narrativo de alto padrão',
    source: 'NAR 2023–2025',
  },
  {
    number: '68',
    suffix: '%',
    label: 'mais rápido',
    description: 'com captação aérea profissional integrada',
    source: 'NAR 2024',
  },
  {
    number: '2',
    suffix: '%',
    label: 'de proteção',
    description: 'no VGV em ativos com apresentação visual de excelência',
    source: 'Zoopla UK 2024',
  },
] as const

export function Manifesto() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.teaserBlock}`,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.teaserBlock}`,
            start: 'top 80%',
            once: true,
          },
        }
      )

      ScrollTrigger.batch(`.${s.statCell}`, {
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
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
    <section id="tese" ref={rootRef} className={s.root}>
      <div className={s.inner}>
        {/* Section header */}
        <div className={s.header}>
          <p className={s.sectionTag}>A Tese</p>
        </div>

        {/* Teaser */}
        <div className={s.teaserBlock}>
          <div className={s.teaserText}>
            <p className={s.teaserLead}>
              Percepção não é ornamento.
              <br />
              <em>É engrenagem.</em>
            </p>
            <p className={s.teaserBody}>
              O manifesto fundador da Iusim expõe a tese que antecede cada
              operação — e por que, no mercado de ativos singulares, a maneira
              como algo é apresentado altera concretamente o seu valor.
            </p>
          </div>

          <div className={s.teaserRight}>
            <p className={s.teaserClose}>
              Uma leitura para quem leva patrimônio a sério.
            </p>
            <Link href="/manifesto" className={s.manifestoLink}>
              Ler o Manifesto
              <span className={s.manifestoArrow} aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        {/* Stats block */}
        <div className={s.statsWrapper}>
          <DottedGlowBackground
            gap={20}
            radius={1.5}
            opacity={0.7}
            colorDarkVar="--color-ivory"
            glowColorDarkVar="--color-ivory"
            speedMin={0.2}
            speedMax={1.2}
            speedScale={0.7}
          />
          <ul className={s.statsGrid} aria-label="Dados de mercado">
            {STATS.map((stat) => (
              <li key={stat.label} className={s.statCell}>
                <span className={s.statNumber}>
                  {stat.number}
                  <span className={s.statSuffix}>{stat.suffix}</span>
                </span>
                <span className={s.statLabel}>{stat.label}</span>
                <p className={s.statDescription}>{stat.description}</p>
                <span className={s.statSource}>{stat.source}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
