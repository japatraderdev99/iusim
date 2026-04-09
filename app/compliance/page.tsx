import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './compliance.module.css'

export const metadata: Metadata = {
  title: 'Compliance — Iusim',
  description:
    'Compromissos éticos, práticas anticorrupção e padrões de governança da Iusim Estratégia Visual.',
}

export default function CompliancePage() {
  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        <header className={s.hero}>
          <p className={s.tag}>— Legal —</p>
          <h1 className={s.headline}>
            Compliance
            <br />
            <em className={s.headlineItalic}>& Ética.</em>
          </h1>
          <p className={s.meta}>Última atualização: abril de 2026</p>
        </header>

        <div className={s.body}>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>Declaração de Princípios</h2>
            <p className={s.text}>
              A Iusim Estratégia Visual opera segundo padrões rigorosos de
              integridade, transparência e respeito às normas legais vigentes no
              Brasil. Nosso compromisso ético não é um requisito mínimo — é
              parte constitutiva da nossa identidade de marca e do valor que
              entregamos a clientes e parceiros.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Anticorrupção</h2>
            <p className={s.text}>
              A Iusim adota política de tolerância zero a qualquer forma de
              corrupção, suborno ou conflito de interesses, em conformidade com
              a Lei Anticorrupção Brasileira (Lei 12.846/2013). Nenhum
              colaborador, parceiro ou prestador de serviços está autorizado a
              oferecer, prometer ou aceitar vantagens indevidas em nome da
              empresa.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Proteção de Dados (LGPD)</h2>
            <p className={s.text}>
              O tratamento de dados pessoais é realizado em estrita conformidade
              com a Lei Geral de Proteção de Dados (Lei 13.709/2018). Mantemos
              registros de operações de tratamento, garantimos os direitos dos
              titulares e aplicamos medidas técnicas de segurança adequadas ao
              risco das operações realizadas.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Relações Comerciais</h2>
            <p className={s.text}>
              A Iusim seleciona parceiros e fornecedores com base em critérios
              de qualidade, idoneidade e alinhamento ético. Contratos são
              formalizados com clareza de escopo, valores e responsabilidades.
              Não estabelecemos relações comerciais com empresas envolvidas em
              práticas ilegais ou antiéticas.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Propriedade Intelectual</h2>
            <p className={s.text}>
              Respeitamos direitos autorais, marcas registradas e patentes de
              terceiros. Todo o conteúdo produzido pela Iusim é original ou
              licenciado de forma adequada. Não utilizamos materiais de
              terceiros sem a devida autorização.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>Canal de Comunicação</h2>
            <p className={s.text}>
              Questões relacionadas a ética, compliance ou potenciais
              irregularidades podem ser comunicadas de forma confidencial pelo
              canal:{' '}
              <Link href="mailto:contato@iusim.com" className={s.link}>
                contato@iusim.com
              </Link>
              . Todas as comunicações são tratadas com sigilo e seriedade.
            </p>
          </section>

          <div className={s.back}>
            <Link href="/" className={s.backLink}>
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
