import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './institucional.module.css'

export const metadata: Metadata = {
  title: 'Institucional — Iusim',
  description:
    'Iusim não é o nome de uma empresa. É o sobrenome do fundador — uma assinatura de responsabilidade pessoal em cada entrega.',
}

const PILLARS = [
  {
    code: '01',
    title: 'Patronímico',
    body: 'Como Armani, Hermès e Porsche, o sobrenome comunica algo que nenhuma marca fabricada consegue: responsabilidade pessoal. O nome do fundador está em jogo em cada operação.',
  },
  {
    code: '02',
    title: 'Ativo Intransferível',
    body: 'Um sobrenome não pode ser copiado, registrado por terceiros ou diluído. É propriedade por nascimento — proteção jurídica e intelectual absolutas.',
  },
  {
    code: '03',
    title: 'Arquitetura Escalável',
    body: 'O patronímico funciona como guarda-chuva para um ecossistema de operações de alto padrão, cada uma com autonomia e coerência de posicionamento.',
  },
] as const

const ECOSYSTEM = [
  {
    name: 'Iusim | Estratégia Visual',
    tag: 'Operação Principal',
    description:
      'Engenharia visual para o mercado imobiliário de alto padrão. Fotografia, cinematografia, drone e documentários de ativo — cada entrega calibrada para defender o valor de um patrimônio singular.',
  },
  {
    name: 'Iusim Fine Art',
    tag: 'Arte Autoral',
    description:
      'Fotografia autoral e de colecionador. Paisagens e edições limitadas para o mercado de arte e decoração de luxo — onde a imagem é o próprio ativo.',
  },
  {
    name: 'Iusim Asset Refine',
    tag: 'Lançamento Futuro',
    description:
      'Unidade de refino físico de ativos: iluminação, acabamentos, staging. A percepção começa antes da câmera. Em parceria operacional, em breve.',
  },
] as const

const WA_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de solicitar uma avaliação do meu ativo com a Iusim. Aguardo o retorno.'
)

export default function InstitucionalPage() {
  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        {/* Hero */}
        <header className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.tag}>— Sobre a Iusim —</p>
            <h1 className={s.headline}>
              Uma
              <br />
              <em className={s.headlineItalic}>Assinatura.</em>
            </h1>
            <p className={s.subheadline}>
              Iusim não é o nome de uma empresa. É o sobrenome do fundador —
              presente em cada entrega como garantia de responsabilidade
              pessoal.
            </p>
          </div>
        </header>

        {/* Statement */}
        <section className={s.statement}>
          <div className={s.statementInner}>
            <div className={s.statementBlock}>
              <p className={s.statementQuote}>
                "Vista360 era o nome de uma empresa que faz vídeos. Iusim é o
                nome de quem defende o valor de um ativo."
              </p>
              <p className={s.statementAuthor}>
                Alexandre Iusim — Founder &amp; Estratégia de Valor
              </p>
            </div>
            <div className={s.statementBody}>
              <p className={s.statementText}>
                Fundada em janeiro de 2026 em Santa Catarina, a operação nasceu
                focada em fotografia, videografia e drone para o mercado
                imobiliário de alto padrão. Em menos de três meses, o escopo
                evoluiu: casos de R$40M em Jurerê Internacional, equipamentos de
                nível profissional, estrutura de entrega em camadas.
              </p>
              <p className={s.statementText}>
                O nome Vista360 tornou-se uma limitação. Remetia a tour virtual
                banalizado, prendia a marca ao formato e expunha a operação a
                risco jurídico real. A solução foi estrutural, não estética:
                adotar o sobrenome do fundador como assinatura permanente.
              </p>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section className={s.pillars}>
          <div className={s.pillarsInner}>
            <div className={s.pillarsHeader}>
              <p className={s.pillarsTag}>Por Que o Sobrenome</p>
              <h2 className={s.pillarsHeadline}>
                Três razões estruturais para uma escolha que não é estética.
              </h2>
            </div>
            <div className={s.pillarsGrid}>
              {PILLARS.map((pillar) => (
                <div key={pillar.code} className={s.pillarCard}>
                  <span className={s.pillarCode}>{pillar.code}</span>
                  <h3 className={s.pillarTitle}>{pillar.title}</h3>
                  <p className={s.pillarBody}>{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ecosystem */}
        <section className={s.ecosystem}>
          <div className={s.ecosystemInner}>
            <div className={s.ecosystemHeader}>
              <p className={s.ecosystemTag}>Ecossistema Iusim</p>
              <h2 className={s.ecosystemHeadline}>
                Um patronímico. Três operações. Coerência absoluta de
                posicionamento.
              </h2>
            </div>
            <div className={s.ecosystemList}>
              {ECOSYSTEM.map((unit) => (
                <div key={unit.name} className={s.ecosystemItem}>
                  <div className={s.ecosystemItemHeader}>
                    <span className={s.ecosystemItemTag}>{unit.tag}</span>
                    <h3 className={s.ecosystemItemName}>{unit.name}</h3>
                  </div>
                  <p className={s.ecosystemItemDesc}>{unit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founder */}
        <section className={s.founder}>
          <div className={s.founderInner}>
            <div className={s.founderLeft}>
              <p className={s.founderTag}>O Fundador</p>
              <h2 className={s.founderName}>Alexandre Iusim</h2>
              <p className={s.founderRole}>
                Founder &amp; Estratégia de Valor · Economista, UFSC
              </p>
            </div>
            <div className={s.founderRight}>
              <p className={s.founderBio}>
                Economista de formação, Alexandre Iusim opera na interseção
                entre teoria do valor e execução visual. A tese que fundamenta a
                operação — de que a percepção participa ativamente na formação
                do preço de ativos singulares — é derivada diretamente da
                literatura de finanças comportamentais e do seu percurso prático
                no mercado imobiliário de alto padrão catarinense.
              </p>
              <p className={s.founderBio}>
                Cada projeto carrega o sobrenome porque cada projeto carrega a
                consequência. Não há distância entre a assinatura e a entrega.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaInner}>
            <div className={s.ctaLeft}>
              <p className={s.ctaHeadline}>
                A operação começa com uma conversa.
              </p>
              <p className={s.ctaBody}>
                Avaliação gratuita, sem compromisso. Diagnóstico do ativo antes
                de qualquer proposta.
              </p>
            </div>
            <div className={s.ctaActions}>
              <Link
                href={`https://wa.me/5548999685129?text=${WA_MESSAGE}`}
                className={s.ctaButtonPrimary}
              >
                Iniciar Conversa
              </Link>
              <Link href="/manifesto" className={s.ctaButtonSecondary}>
                Ler o Manifesto
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
