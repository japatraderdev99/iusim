import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

const ARTICLES_DIR = path.join(process.cwd(), 'content/articles')

export interface ArticleMeta {
  slug: string
  title: string
  excerpt: string
  tag: string
  source: string
  date: string
  cover: string
  draft: boolean
}

export interface Article extends ArticleMeta {
  content: string
}

function parseArticle(slug: string): Article {
  const filePath = path.join(ARTICLES_DIR, slug, 'index.mdx')
  const raw = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(raw)

  return {
    slug,
    title: data.title as string,
    excerpt: data.excerpt as string,
    tag: data.tag as string,
    source: data.source as string,
    date: data.date as string,
    cover: data.cover as string,
    draft: (data.draft as boolean | undefined) ?? false,
    content,
  }
}

export function getAllArticles(): ArticleMeta[] {
  const slugs = fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)

  return slugs
    .map((slug) => {
      const { content: _content, ...meta } = parseArticle(slug)
      return meta
    })
    .filter((a) => !a.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(slug: string): Article {
  return parseArticle(slug)
}

export function getArticleSlugs(): string[] {
  return fs
    .readdirSync(ARTICLES_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}
