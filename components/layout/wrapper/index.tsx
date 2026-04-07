'use client'

import cn from 'clsx'
import type { LenisOptions } from 'lenis'
import { Footer } from '@/components/layout/footer'
import { Header } from '@/components/layout/header'
import { Lenis } from '@/components/layout/lenis'
import { Theme } from '@/components/layout/theme'
import type { ThemeName } from '@/styles/config'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: ThemeName
  lenis?: boolean | LenisOptions
  webgl?: boolean
}

export function Wrapper({
  children,
  theme = 'dark',
  className,
  lenis = true,
  webgl: _webgl = false,
  ...props
}: WrapperProps) {
  return (
    <Theme theme={theme} global>
      <Header />
      <main
        id="main-content"
        className={cn('relative flex grow flex-col', className)}
        {...props}
      >
        {children}
      </main>
      <Footer />
      {lenis && (
        <Lenis
          root
          options={typeof lenis === 'object' ? lenis : {}}
          syncScrollTrigger
        />
      )}
    </Theme>
  )
}
