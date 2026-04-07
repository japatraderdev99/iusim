import { Wrapper } from '@/components/layout/wrapper'
import { MultiStepLoader } from '@/components/ui/multi-step-loader'
import { getAllArticles } from '@/lib/articles'
import { Contact } from './(iusim)/_sections/contact'
import { Distincao } from './(iusim)/_sections/distincao'
import { Hero } from './(iusim)/_sections/hero'
import { Manifesto } from './(iusim)/_sections/manifesto'
import { Modelo } from './(iusim)/_sections/modelo'
import { Reel } from './(iusim)/_sections/reel'
import { Services } from './(iusim)/_sections/services'

export default function Home() {
  const articles = getAllArticles()

  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <MultiStepLoader />
      <Hero />
      <Manifesto />
      <Reel articles={articles} />
      <Distincao />
      <Services />
      <Modelo />
      <Contact />
    </Wrapper>
  )
}
