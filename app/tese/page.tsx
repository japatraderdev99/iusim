import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import { getAllArticles } from '@/lib/articles'
import s from './tese.module.css'

export const metadata: Metadata = {
  title: 'A Tese — Iusim',
  description:
    'A apresentação visual de ativos imobiliários de alto padrão não é marketing. É defesa de valor.',
}

const STATS = [
  {
    number: '96',
    suffix: '%',
    label: 'dos compradores premium',
    description:
      'iniciam a busca por imóveis exclusivamente em ambiente digital — a decisão de visita é formada pela tela, antes de qualquer contato presencial',
    source: 'NAR · 2024',
  },
  {
    number: '+403',
    suffix: '%',
    label: 'de aumento em consultas',
    description:
      'em listagens com vídeo narrativo de alto padrão em relação a listagens sem nenhum vídeo',
    source: 'NAR · 2023–2025',
  },
  {
    number: '68',
    suffix: '%',
    label: 'mais rápido',
    description:
      'é o tempo de venda com captação aérea profissional integrada à apresentação visual do ativo',
    source: 'NAR · 2024',
  },
  {
    number: '2',
    suffix: '%',
    label: 'de proteção no VGV',
    description:
      'em ativos com apresentação visual de excelência — em R$40M, isso representa R$800K preservados',
    source: 'Zoopla UK · 2024',
  },
] as const

export default function TesePage() {
  const articles = getAllArticles()

  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        {/* Header */}
        <header className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.tag}>— A Tese Estratégica —</p>
            <h1 className={s.headline}>
              Percepção
              <br />
              <em className={s.headlineItalic}>é Valor.</em>
            </h1>
            <p className={s.subheadline}>
              No mercado imobiliário de alto padrão, a imagem não documenta o
              ativo — ela participa da formação do seu valor na consciência de
              quem o encontra.
            </p>
          </div>
        </header>

        {/* Opening */}
        <section className={s.opening}>
          <div className={s.openingInner}>
            <div className={s.openingText}>
              <p className={s.openingLead}>
                Ativos singulares não possuem comparáveis de mercado. Sem
                parâmetros objetivos, o comprador calibra valor pela qualidade
                da informação que recebe.
              </p>
              <p className={s.openingBody}>
                Esse mecanismo — documentado pela literatura de finanças
                comportamentais como <em>information quality premium</em> — é
                especialmente pronunciado em imóveis de luxo: quanto menor a
                disponibilidade de dados comparativos, maior o peso atribuído à
                experiência visual na formação da percepção de valor.
              </p>
              <p className={s.openingBody}>
                Em mercados onde metade dos ativos acima de R$5M ainda é
                apresentada com produção visual inadequada, a excelência não é
                diferencial — é proteção de valor.
              </p>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className={s.statsSection}>
          <div className={s.statsInner}>
            <p className={s.statsLabel}>Os dados confirmam</p>
            <ul className={s.statsGrid}>
              {STATS.map((stat) => (
                <li key={stat.number} className={s.statCell}>
                  <span className={s.statNumber}>
                    {stat.number}
                    <span className={s.statSuffix}>{stat.suffix}</span>
                  </span>
                  <span className={s.statCellLabel}>{stat.label}</span>
                  <p className={s.statDesc}>{stat.description}</p>
                  <span className={s.statSource}>{stat.source}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ROI section */}
        <section className={s.roi}>
          <div className={s.roiInner}>
            <div className={s.roiLeft}>
              <p className={s.roiTag}>A matemática da percepção</p>
              <h2 className={s.roiHeadline}>
                O custo da excelência visual é uma fração da proteção que ela
                gera.
              </h2>
            </div>
            <div className={s.roiRight}>
              <div className={s.roiBlock}>
                <span className={s.roiBlockLabel}>Ativo de R$10M</span>
                <div className={s.roiCalc}>
                  <div className={s.roiRow}>
                    <span className={s.roiItem}>2% de proteção no VGV</span>
                    <span className={s.roiValue}>R$200.000</span>
                  </div>
                  <div className={s.roiRow}>
                    <span className={s.roiItem}>Produção Signature</span>
                    <span className={s.roiValue}>R$6.490</span>
                  </div>
                  <div className={s.roiDivider} aria-hidden="true" />
                  <div className={s.roiRow}>
                    <span className={s.roiItem}>Retorno sobre proteção</span>
                    <span className={s.roiValueHighlight}>30×</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Articles */}
        {articles.length > 0 && (
          <section className={s.articles}>
            <div className={s.articlesInner}>
              <p className={s.articlesTag}>Evidência — Dados de Mercado</p>
              <h2 className={s.articlesHeadline}>A Tese Comprovada.</h2>
              <div className={s.articlesGrid}>
                {articles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/blog/${article.slug}`}
                    className={s.articleCard}
                  >
                    <p className={s.articleTag}>{article.tag}</p>
                    <h3 className={s.articleTitle}>{article.title}</h3>
                    <p className={s.articleExcerpt}>{article.excerpt}</p>
                    <span className={s.articleSource}>{article.source}</span>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaInner}>
            <p className={s.ctaText}>
              Cada ativo tem uma lacuna de percepção.
              <br />
              <em>A Iusim fecha essa lacuna.</em>
            </p>
            <Link href="/#contato" className={s.ctaButton}>
              Solicitar Avaliação
            </Link>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
