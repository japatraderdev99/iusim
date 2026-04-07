'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import s from './reel.module.css'

gsap.registerPlugin(ScrollTrigger)

const ARTICLES = [
  {
    tag: 'NAR · 2024',
    title:
      '96% dos compradores de alto padrão iniciam a busca exclusivamente online',
    excerpt:
      'O relatório Profile of Home Buyers and Sellers da NAR confirma que a decisão de visita presencial é tomada com base na qualidade da apresentação visual digital.',
    source: 'National Association of Realtors',
    href: '#',
  },
  {
    tag: 'Zoopla · 2024',
    title:
      'Imóveis com fotografia profissional vendem até 32% mais rápido e por até 2% acima do pedido',
    excerpt:
      'Análise de 500 mil transações no Reino Unido demonstra correlação direta entre qualidade visual de apresentação e proteção do VGV em ativos premium.',
    source: 'Zoopla Property Research',
    href: '#',
  },
  {
    tag: 'NAR · 2023–2025',
    title:
      'Vídeos narrativos de alto padrão aumentam consultas qualificadas em +403%',
    excerpt:
      'Propriedades com cinematografia profissional integrada registram mais de quatro vezes o volume de contatos de compradores com capacidade de decisão comprovada.',
    source: 'National Association of Realtors',
    href: '#',
  },
] as const

export function Reel() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.title}`,
        { opacity: 0, y: 24 },
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

      gsap.fromTo(
        `.${s.mainReel}`,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.mainReel}`,
            start: 'top 85%',
            once: true,
          },
        }
      )

      ScrollTrigger.batch(`.${s.caseItem}`, {
        onEnter: (els) => {
          gsap.fromTo(
            els,
            { opacity: 0, y: 24 },
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
        start: 'top 90%',
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="acervo" ref={rootRef} className={s.root}>
      <div className={s.inner}>
        <div className={s.header}>
          <div>
            <p className={s.sectionTag}>Evidência — Dados de Mercado</p>
            <h2 className={s.title}>
              A Tese
              <br />
              Comprovada.
            </h2>
          </div>
        </div>

        {/* Main reel — hero video */}
        <div className={s.mainReel}>
          <video
            className={s.mainReelVideo}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster="/videos/reel-poster.jpg"
            aria-label="Showreel Iusim — Cinematografia de Ativos Premium"
          >
            <source src="/videos/iusim-reel.mp4" type="video/mp4" />
          </video>
          <div className={s.mainReelOverlay}>
            <div className={s.playButton}>
              <button
                type="button"
                className={s.playCircle}
                aria-label="Assistir reel"
              >
                <svg
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M1 1L15 9L1 17V1Z" fill="rgba(245,240,234,0.8)" />
                </svg>
              </button>
              <span className={s.playLabel}>Showreel 2026</span>
            </div>
          </div>
        </div>

        {/* Articles grid */}
        <div className={s.caseGrid}>
          {ARTICLES.map((article) => (
            <div key={article.tag} className={s.caseItem}>
              <div className={s.caseInfo}>
                <p className={s.caseCode}>{article.tag}</p>
                <h3 className={s.caseName}>{article.title}</h3>
                <p className={s.caseScope}>{article.excerpt}</p>
                <p className={s.articleSource}>{article.source}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
