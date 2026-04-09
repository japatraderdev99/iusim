import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Metadata } from 'next'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './manifesto.module.css'

export const metadata: Metadata = {
  title: 'Manifesto — Iusim',
  description:
    'A Iusim não nasce para ocupar um espaço de mercado. Nasce para afirmar uma tese.',
}

function getManifesto() {
  const filePath = path.join(
    process.cwd(),
    'content/manifesto-fundador/index-manifesto.mdx'
  )
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)
  // Strip HTML comments (image placeholders) — MDX v2 doesn't support them
  const clean = content.replace(/<!--[\s\S]*?-->/g, '')
  return { data, content: clean }
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
            <MDXRemote source={content} />
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
