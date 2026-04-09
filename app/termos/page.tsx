import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './termos.module.css'

export const metadata: Metadata = {
  title: 'Termos de Uso — Iusim',
  description:
    'Condições gerais de uso do site e dos serviços da Iusim Estratégia Visual.',
}

export default function TermosPage() {
  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        <header className={s.hero}>
          <p className={s.tag}>— Legal —</p>
          <h1 className={s.headline}>
            Termos
            <br />
            <em className={s.headlineItalic}>de Uso.</em>
          </h1>
          <p className={s.meta}>Última atualização: abril de 2026</p>
        </header>

        <div className={s.body}>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>1. Aceitação</h2>
            <p className={s.text}>
              Ao acessar e utilizar este site, você concorda com os presentes
              Termos de Uso. Caso não concorde com alguma disposição,
              recomendamos que não utilize o site.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>2. Serviços Descritos</h2>
            <p className={s.text}>
              A Iusim Estratégia Visual oferece serviços de engenharia visual
              para ativos imobiliários de alto padrão, incluindo produção
              fotográfica, cinematográfica, modelagem 3D e estratégia de
              apresentação. As informações apresentadas neste site têm caráter
              meramente informativo e não constituem oferta vinculante.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>3. Propriedade Intelectual</h2>
            <p className={s.text}>
              Todo o conteúdo deste site — incluindo textos, imagens, vídeos,
              logotipos e composições visuais — é de propriedade exclusiva da
              Iusim ou de seus licenciadores, protegido pela Lei 9.610/98 (Lei
              de Direitos Autorais). A reprodução, total ou parcial, sem
              autorização expressa é vedada.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>4. Uso Permitido</h2>
            <p className={s.text}>
              O acesso ao site é concedido para uso pessoal e não comercial. É
              vedado: realizar engenharia reversa, copiar ou distribuir conteúdo
              sem autorização, utilizar bots ou scrapers, ou praticar qualquer
              ato que comprometa a integridade do sistema.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>5. Isenção de Responsabilidade</h2>
            <p className={s.text}>
              O site é fornecido "no estado em que se encontra". A Iusim não
              garante disponibilidade ininterrupta e não se responsabiliza por
              danos decorrentes de indisponibilidade temporária, erros ou
              conteúdo desatualizado.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>6. Links Externos</h2>
            <p className={s.text}>
              Este site pode conter links para plataformas externas (ex.:
              Instagram, WhatsApp). A Iusim não se responsabiliza pelo conteúdo,
              políticas ou práticas de privacidade de sites de terceiros.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>7. Alterações</h2>
            <p className={s.text}>
              A Iusim reserva-se o direito de modificar estes Termos a qualquer
              momento. A data de "última atualização" no topo da página indica a
              versão vigente. O uso continuado do site após alterações constitui
              aceitação dos novos termos.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>8. Foro</h2>
            <p className={s.text}>
              Fica eleito o foro da Comarca de Florianópolis – SC para dirimir
              quaisquer controvérsias decorrentes destes Termos, com renúncia a
              qualquer outro, por mais privilegiado que seja.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>9. Contato</h2>
            <p className={s.text}>
              Para questões relativas a estes Termos:{' '}
              <Link href="mailto:contato@iusim.com" className={s.link}>
                contato@iusim.com
              </Link>
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
