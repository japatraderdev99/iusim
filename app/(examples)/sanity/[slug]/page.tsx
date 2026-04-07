import { notFound } from 'next/navigation'
import { Wrapper } from '@/components/layout/wrapper'
import { client } from '@/integrations/sanity/client'
import { sanityFetch } from '@/integrations/sanity/live'
import { allArticlesQuery, articleQuery } from '@/integrations/sanity/queries'
import type { Article } from '@/integrations/sanity/sanity.types'
import { generateSanityMetadata } from '@/utils/metadata'
import { SanityArticle } from './_components/article'

export const dynamicParams = false

export async function generateStaticParams() {
  if (!client) return [{ slug: '_placeholder' }]

  const data = await client.fetch(allArticlesQuery)

  if (!(data && Array.isArray(data)) || data.length === 0)
    return [{ slug: '_placeholder' }]

  return data.map((article) => ({ slug: article.slug?.current ?? '' }))
}

export default async function SanityArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === '_placeholder') return null

  const { data } = await sanityFetch({
    query: articleQuery,
    params: { slug },
  })

  if (!data) return notFound()

  return (
    <Wrapper theme="light" className="font-mono uppercase">
      <div className="max-dt:dr-px-16 flex grow items-center justify-center">
        <SanityArticle data={data as Article} />
      </div>
    </Wrapper>
  )
}

// https://nextjs.org/docs/app/api-reference/functions/generate-metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  if (slug === '_placeholder') return

  const { data } = await sanityFetch({
    query: articleQuery,
    params: { slug },
  })

  if (!data) return

  return generateSanityMetadata({
    document: data,
    url: `/sanity/${slug}`,
    type: 'article',
  })
}
