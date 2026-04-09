'use client'

import { Image } from '@/components/ui/image'
import s from './manifesto.module.css'

interface ManifestoImageProps {
  src?: string
  alt?: string
}

export function ManifestoImage({ src, alt }: ManifestoImageProps) {
  if (!src) return null
  return (
    <div className={s.bodyImageWrap}>
      <Image
        src={src}
        alt={alt ?? ''}
        width={1200}
        height={720}
        className={s.bodyImage}
        desktopSize="53vw"
      />
    </div>
  )
}
