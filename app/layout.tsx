import { Analytics } from '@vercel/analytics/next'
import { TransformProvider } from 'hamo'
import type { Metadata, Viewport } from 'next'
import { type PropsWithChildren, Suspense } from 'react'
import { ReactTempus } from 'tempus/react'
import { Link } from '@/components/ui/link'
import { RealViewport } from '@/components/ui/real-viewport'
import { OptionalFeatures } from '@/lib/features'
import { themes } from '@/lib/styles/colors'
import { fontsVariable } from '@/lib/styles/fonts'
import '@/lib/styles/css/index.css'

const APP_BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://iusim.co'

export const metadata: Metadata = {
  metadataBase: new URL(APP_BASE_URL),
  applicationName: 'Iusim',
  title: {
    default: 'Iusim — Estratégia Visual',
    template: '%s · Iusim',
  },
  description:
    'Engenharia visual especializada na formação de percepção de valor de ativos imobiliários premium. Defesa do VGV, redução do Days on Market e cinematografia de rigor técnico incontestável.',
  keywords: [
    'fotografía imobiliária',
    'videografia imobiliária',
    'cinematografia premium',
    'imóveis alto padrão',
    'Florianópolis',
    'Santa Catarina',
    'Jurerê Internacional',
    'Balneário Camboriú',
    'VGV',
    'liquidez imobiliária',
  ],
  alternates: { canonical: '/' },
  appleWebApp: { capable: true, statusBarStyle: 'black', title: 'Iusim' },
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    siteName: 'Iusim — Estratégia Visual',
    title: {
      default: 'Iusim — Engenharia Visual da Liquidez',
      template: '%s · Iusim',
    },
    description:
      'Não produzimos vídeos. Estruturamos a percepção comercial de ativos singulares.',
    url: APP_BASE_URL,
    locale: 'pt_BR',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Iusim — Estratégia Visual',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Iusim — A Engenharia Visual da Liquidez',
    description:
      'Cinematografia de rigor técnico para defesa do VGV e aceleração de liquidez no mercado imobiliário premium.',
  },
  authors: [{ name: 'Alexandre Iusim', url: 'https://iusim.co' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: themes.dark.primary,
  colorScheme: 'dark',
}

export default function Layout({ children }: PropsWithChildren) {
  return (
    <html
      lang="pt-BR"
      dir="ltr"
      className={fontsVariable}
      suppressHydrationWarning
    >
      <body>
        <Suspense fallback={null}>
          <Link
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-black focus:px-4 focus:py-2 focus:text-white focus:outline-none focus:ring-2 focus:ring-white"
          >
            Ir para o conteúdo principal
          </Link>
        </Suspense>
        <RealViewport>
          <TransformProvider>{children}</TransformProvider>
        </RealViewport>
        <OptionalFeatures />
        <ReactTempus patch />
        <Analytics />
      </body>
    </html>
  )
}
