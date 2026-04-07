import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import { getAllArticles } from '@/lib/articles'
import s from './blog.module.css'

export const metadata: Metadata = {
  title: 'Blog — Evidências de Mercado',
  description:
    'Dados e pesquisas que fundamentam a tese da Iusim sobre engenharia visual e liquidez imobiliária.',
}

export default function BlogPage() {
  const articles = getAllArticles()

  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        <div className={s.inner}>
          <header className={s.header}>
            <p className={s.sectionTag}>Evidência — Dados de Mercado</p>
            <h1 className={s.title}>
              A Tese
              <br />
              Comprovada.
            </h1>
          </header>

          <div className={s.grid}>
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className={s.card}
              >
                {article.cover && (
                  <div className={s.cardMedia}>
                    <Image
                      src={article.cover}
                      alt={article.title}
                      fill
                      className={s.cardImage}
                    />
                  </div>
                )}
                <div className={s.cardBody}>
                  <p className={s.cardTag}>{article.tag}</p>
                  <h2 className={s.cardTitle}>{article.title}</h2>
                  <p className={s.cardExcerpt}>{article.excerpt}</p>
                  <p className={s.cardSource}>{article.source}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
