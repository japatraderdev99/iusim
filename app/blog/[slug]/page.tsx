import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Wrapper } from '@/components/layout/wrapper'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import { getArticle, getArticleSlugs } from '@/lib/articles'
import s from './article.module.css'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const article = getArticle(slug)

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: article.cover ? [{ url: article.cover }] : [],
    },
  }
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  const article = getArticle(slug)

  const formattedDate = new Date(article.date).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <article className={s.root}>
        {/* Cover */}
        {article.cover && (
          <div className={s.cover}>
            <Image
              src={article.cover}
              alt={article.title}
              fill
              priority
              className={s.coverImage}
            />
            <div className={s.coverOverlay} />
          </div>
        )}

        <div className={s.inner}>
          {/* Header */}
          <header className={s.header}>
            <div className={s.meta}>
              <span className={s.tag}>{article.tag}</span>
              <span className={s.metaDivider}>·</span>
              <time className={s.date} dateTime={article.date}>
                {formattedDate}
              </time>
            </div>
            <h1 className={s.title}>{article.title}</h1>
            <p className={s.excerpt}>{article.excerpt}</p>
            <p className={s.source}>{article.source}</p>
          </header>

          {/* Body */}
          <div className={s.body}>
            <MDXRemote source={article.content} />
          </div>

          {/* Back link */}
          <footer className={s.footer}>
            <Link href="/blog" className={s.backLink}>
              ← Voltar para Evidências
            </Link>
          </footer>
        </div>
      </article>
    </Wrapper>
  )
}
