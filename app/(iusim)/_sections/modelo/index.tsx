'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Link } from '@/components/ui/link'
import s from './modelo.module.css'

gsap.registerPlugin(ScrollTrigger)

export function Modelo() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.headline}`,
        { opacity: 0, y: 28 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.headline}`,
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
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="modelo" ref={rootRef} className={s.root}>
      <div className={s.inner}>
        <div className={s.header}>
          <p className={s.sectionTag}>Alinhamento de Incentivos</p>
        </div>

        <div className={s.content}>
          <h2 className={s.headline}>
            Em ativos de valor singular,
            <br />
            os incentivos devem ser estruturais.
          </h2>

          <div className={s.body}>
            <p className={s.bodyText}>
              Para operações de escopo estendido, a Iusim opera com custo base
              de mobilização e remuneração variável vinculada à liquidação do
              ativo.
            </p>
            <p className={s.bodyText}>
              Não cobramos por horas de produção.
              <br />
              Respondemos pelo resultado da negociação.
            </p>
            <Link href="#contato" className={s.modelLink}>
              → Entender o modelo para ativos acima de R$10M
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
