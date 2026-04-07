'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Link } from '@/components/ui/link'
import type { ArticleMeta } from '@/lib/articles'
import s from './reel.module.css'

gsap.registerPlugin(ScrollTrigger)

interface ReelProps {
  articles: ArticleMeta[]
}

export function Reel({ articles }: ReelProps) {
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
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className={s.caseItem}
            >
              <div className={s.caseInfo}>
                <p className={s.caseCode}>{article.tag}</p>
                <h3 className={s.caseName}>{article.title}</h3>
                <p className={s.caseScope}>{article.excerpt}</p>
                <p className={s.articleSource}>{article.source}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
