'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './distincao.module.css'

gsap.registerPlugin(ScrollTrigger)

const PILLARS = [
  {
    title: 'Análise de Risco Perceptual',
    description:
      'Diagnóstico dos vetores estéticos que deprimem a percepção de valor do ativo.',
  },
  {
    title: 'Engenharia de Presença',
    description:
      'Construção da narrativa visual que ancora o preço e qualifica o comprador antes da visita.',
  },
  {
    title: 'Parceria de Liquidez',
    description:
      'Alinhamento de incentivos: nosso modelo contempla remuneração atrelada ao VGV.',
  },
] as const

export function Distincao() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.statement}`,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.statement}`,
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        `.${s.body}`,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.body}`,
            start: 'top 82%',
            once: true,
          },
        }
      )

      ScrollTrigger.batch(`.${s.pillar}`, {
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, y: 24 },
            {
              opacity: 1,
              y: 0,
              duration: 0.9,
              stagger: 0.12,
              ease: 'power3.out',
            }
          )
        },
        once: true,
        start: 'top 88%',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="posicionamento" ref={rootRef} className={s.root}>
      <div className={s.inner}>
        {/* Header */}
        <div className={s.header}>
          <p className={s.sectionTag}>Posicionamento</p>
        </div>

        {/* Main statement */}
        <div className={s.statementCol}>
          <p className={s.statement}>
            A Iusim não é uma produtora audiovisual.
          </p>
          <div className={s.body}>
            <p className={s.bodyLine}>
              Produtoras entregam vídeos.
              <br />A Iusim estrutura a inteligibilidade comercial de um ativo.
            </p>
            <p className={s.bodyPara}>
              Cada operação começa com uma análise de risco perceptual:
              identificamos os pontos de atrito estético que comprometem a
              percepção de valor antes de qualquer proposta visual.
            </p>
            <p className={s.bodyPara}>
              O resultado é uma arquitetura de presença calibrada para o
              comprador ao qual o ativo se destina.
            </p>
          </div>
        </div>

        {/* Rule */}
        <div className={s.rule} aria-hidden="true" />

        {/* Three pillars */}
        <ul className={s.pillarsGrid}>
          {PILLARS.map((pillar) => (
            <li key={pillar.title} className={s.pillar}>
              <h3 className={s.pillarTitle}>{pillar.title}</h3>
              <p className={s.pillarDesc}>{pillar.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
