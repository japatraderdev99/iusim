import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './servicos.module.css'

export const metadata: Metadata = {
  title: 'Serviços — Iusim',
  description:
    'Estrutura de entrega em engenharia visual estratégica para ativos imobiliários de alto padrão.',
}

const TIERS = [
  {
    code: '01',
    name: 'Essential',
    price: 'R$1.490',
    description:
      'Para ativos em lançamento com prazo reduzido. Síntese visual dinâmica de 30 segundos, mapeamento aéreo de contexto e otimização para plataformas mobile.',
    includes: [
      'Vídeo síntese 30s',
      'Drone — mapeamento aéreo',
      'Otimização mobile',
      'Entrega em 5 dias úteis',
    ],
  },
  {
    code: '02',
    name: 'Pro',
    price: 'R$2.990',
    description:
      'Cinematografia estendida para ativos com narrativa mais densa. Masterização multiplataforma e 2 cápsulas táticas para distribuição segmentada.',
    includes: [
      'Vídeo principal 60–90s',
      'Masterização multiplataforma',
      '2 cápsulas táticas',
      'Entrega em 7 dias úteis',
    ],
  },
  {
    code: '03',
    name: 'Signature',
    price: 'R$6.490',
    description:
      'Engenharia visual completa para ativos de valor singular. Gestão de luz natural, operações de drone complexas, arquivo fotográfico premium e 3 a 5 cápsulas estratégicas.',
    includes: [
      'Vídeo principal 90–120s',
      'Golden e blue hour',
      'Drone complexo — voos internos',
      'Arquivo fotográfico premium',
      '3–5 cápsulas táticas',
      'Entrega em 10 dias úteis',
    ],
  },
  {
    code: '—',
    name: 'Bespoke',
    price: 'Consulta',
    description:
      'Operação de grande envergadura para ativos acima de R$10M. Estrutura de remuneração atrelada ao VGV — alinhamento total de incentivos entre Iusim e proprietário.',
    includes: [
      'Diagnóstico perceptual completo',
      'Operação sob medida',
      'Modelo success fee disponível',
      'SLA negociado por projeto',
    ],
  },
] as const

const EXTENSIONS = [
  { name: 'Voice-over Institucional', price: 'R$1.290' },
  { name: 'Host In-Scene', price: 'R$1.290–R$1.790' },
  { name: 'Fly-Through Interior', price: 'R$1.490' },
  { name: 'Priority SLA (48h)', price: 'R$990' },
  { name: 'Cápsulas Adicionais', price: 'R$690 / un.' },
] as const

const WA_MESSAGE = encodeURIComponent(
  'Olá! Gostaria de solicitar uma avaliação do meu ativo com a Iusim. Aguardo o retorno.'
)

export default function ServicosPage() {
  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        {/* Header */}
        <header className={s.hero}>
          <div className={s.heroInner}>
            <p className={s.tag}>— Portfólio de Entrega —</p>
            <h1 className={s.headline}>
              Estrutura
              <br />
              <em className={s.headlineItalic}>de Serviços.</em>
            </h1>
            <p className={s.subheadline}>
              Cada ativo recebe o nível exato de engenharia visual que sua
              singularidade exige. Nenhum excesso. Nenhuma omissão.
            </p>
          </div>
        </header>

        {/* Tiers */}
        <section className={s.tiers}>
          <div className={s.tiersInner}>
            {TIERS.map((tier) => (
              <div key={tier.code} className={s.tierCard}>
                <div className={s.tierHeader}>
                  <span className={s.tierCode}>{tier.code}</span>
                  <div className={s.tierMeta}>
                    <h2 className={s.tierName}>{tier.name}</h2>
                    <span className={s.tierPrice}>{tier.price}</span>
                  </div>
                </div>
                <p className={s.tierDesc}>{tier.description}</p>
                <ul className={s.tierList}>
                  {tier.includes.map((item) => (
                    <li key={item} className={s.tierItem}>
                      <span className={s.tierDot} aria-hidden="true">
                        —
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Extensions */}
        <section className={s.extensions}>
          <div className={s.extensionsInner}>
            <div className={s.extensionsLeft}>
              <p className={s.extensionsTag}>Extensões Táticas</p>
              <h2 className={s.extensionsHeadline}>
                Módulos adicionais disponíveis em qualquer nível de entrega.
              </h2>
            </div>
            <div className={s.extensionsRight}>
              <ul className={s.extensionsList}>
                {EXTENSIONS.map((ext) => (
                  <li key={ext.name} className={s.extensionRow}>
                    <span className={s.extensionName}>{ext.name}</span>
                    <span className={s.extensionPrice}>{ext.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Note */}
        <section className={s.note}>
          <div className={s.noteInner}>
            <p className={s.noteText}>
              Todos os pacotes são dimensionados por ativo, não por tempo. O
              investimento final reflete a complexidade da operação, não o
              volume de horas. Para ativos acima de R$10M, o modelo Bespoke
              contempla estrutura de success fee com alinhamento total de
              incentivos.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className={s.cta}>
          <div className={s.ctaInner}>
            <div className={s.ctaLeft}>
              <p className={s.ctaHeadline}>
                Qual é o nível de singularidade do seu ativo?
              </p>
              <p className={s.ctaBody}>
                A avaliação é gratuita e sem compromisso. Nossa equipe
                identifica o nível de operação adequado antes de qualquer
                proposta.
              </p>
            </div>
            <div className={s.ctaActions}>
              <Link
                href={`https://wa.me/5548999685129?text=${WA_MESSAGE}`}
                className={s.ctaButtonPrimary}
              >
                Solicitar via WhatsApp
              </Link>
              <Link href="/#contato" className={s.ctaButtonSecondary}>
                Formulário de Avaliação
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
