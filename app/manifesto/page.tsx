import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Wrapper } from '@/components/layout/wrapper'
import { Image } from '@/components/ui/image'
import { Link } from '@/components/ui/link'
import s from './manifesto.module.css'
import { ManifestoImage } from './manifesto-image'

export const metadata: Metadata = {
  title: 'Manifesto — Iusim',
  description:
    'A Iusim não nasce para ocupar um espaço de mercado. Nasce para afirmar uma tese.',
}

const IMAGE_MAP: Record<string, string> = {
  'cover.jpg': '/images/manifesto-fundador/cover.jpg',
  'mid-content-1.jpg': '/images/manifesto-fundador/mid-content1.jpg',
  'mid-content-2.jpg': '/images/manifesto-fundador/mid-content2.jpg',
  'founder.jpg': '/images/manifesto-fundador/founder.jpg',
}

function getManifesto() {
  const filePath = path.join(
    process.cwd(),
    'content/manifesto-fundador/index-manifesto.mdx'
  )
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  // Replace image placeholder comments with markdown images, then strip remaining HTML comments
  const withImages = content
    .replace(
      /<!--\s*IMAGEM\s+([\w.-]+)[^>]*-->/g,
      (_match: string, filename: string) => {
        const src = IMAGE_MAP[filename]
        return src ? `\n![](${src})\n` : ''
      }
    )
    .replace(/<!--[\s\S]*?-->/g, '')

  return { data, content: withImages }
}

export default async function ManifestoPage() {
  const { data, content } = getManifesto()

  const formattedDate = new Date(data.date as string).toLocaleDateString(
    'pt-BR',
    { year: 'numeric', month: 'long' }
  )

  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <article className={s.root}>
        {/* Cover image */}
        <div className={s.cover}>
          <Image
            src="/images/manifesto-fundador/cover.jpg"
            alt="Manifesto Iusim"
            fill
            priority
            className={s.coverImage}
            desktopSize="100vw"
          />
          <div className={s.coverOverlay} />
        </div>

        <div className={s.inner}>
          {/* Header */}
          <header className={s.header}>
            <div className={s.meta}>
              <span className={s.tag}>{data.tag as string}</span>
              <span className={s.metaDivider} aria-hidden="true">
                ·
              </span>
              <time className={s.date} dateTime={data.date as string}>
                {formattedDate}
              </time>
            </div>
            <h1 className={s.title}>{data.title as string}</h1>
            <p className={s.excerpt}>{data.excerpt as string}</p>
          </header>

          {/* Body */}
          <div className={s.body}>
            <MDXRemote source={content} components={{ img: ManifestoImage }} />
          </div>

          {/* Footer */}
          <footer className={s.footer}>
            <Link href="/" className={s.backLink}>
              ← Voltar ao início
            </Link>
          </footer>
        </div>
      </article>
    </Wrapper>
  )
}
