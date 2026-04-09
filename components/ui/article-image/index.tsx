'use client'

import { Image } from '@/components/ui/image'
import s from './article-image.module.css'

interface ArticleImageProps {
  src?: string
  alt?: string
}

export function ArticleImage({ src, alt }: ArticleImageProps) {
  if (!src) return null
  return (
    <div className={s.wrap}>
      <Image
        src={src}
        alt={alt ?? ''}
        width={1200}
        height={675}
        className={s.image}
        desktopSize="53vw"
      />
    </div>
  )
}
