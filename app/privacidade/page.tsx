import type { Metadata } from 'next'
import { Wrapper } from '@/components/layout/wrapper'
import { Link } from '@/components/ui/link'
import s from './privacidade.module.css'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Iusim',
  description:
    'Como a Iusim coleta, utiliza e protege os seus dados pessoais, em conformidade com a LGPD.',
}

export default function PrivacidadePage() {
  return (
    <Wrapper theme="dark" lenis={{ lerp: 0.05, smoothWheel: true }}>
      <div className={s.root}>
        <header className={s.hero}>
          <p className={s.tag}>— Legal —</p>
          <h1 className={s.headline}>
            Política de
            <br />
            <em className={s.headlineItalic}>Privacidade.</em>
          </h1>
          <p className={s.meta}>Última atualização: abril de 2026</p>
        </header>

        <div className={s.body}>
          <section className={s.section}>
            <h2 className={s.sectionTitle}>1. Controlador dos Dados</h2>
            <p className={s.text}>
              A <strong>Iusim Estratégia Visual</strong> (CNPJ em constituição),
              com sede em Florianópolis – SC, é a controladora dos dados
              pessoais coletados por meio deste site e dos formulários de
              contato. Dúvidas:{' '}
              <Link href="mailto:contato@iusim.com" className={s.link}>
                contato@iusim.com
              </Link>
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>2. Dados Coletados</h2>
            <p className={s.text}>
              Coletamos exclusivamente os dados que você fornece ao preencher o
              formulário de qualificação: nome completo, empresa/gestora, tipo
              de ativo, faixa de VGV e localização. Não coletamos dados de
              navegação, cookies de rastreamento ou informações sensíveis.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>3. Finalidade do Tratamento</h2>
            <p className={s.text}>
              Os dados são utilizados exclusivamente para:
            </p>
            <ul className={s.list}>
              <li>Realizar a análise preliminar do ativo imobiliário;</li>
              <li>
                Entrar em contato para apresentação de proposta comercial;
              </li>
              <li>Responder a solicitações enviadas pelo formulário.</li>
            </ul>
            <p className={s.text}>
              Nenhum dado será utilizado para fins de marketing de terceiros ou
              vendido a qualquer empresa.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>4. Base Legal (LGPD)</h2>
            <p className={s.text}>
              O tratamento dos dados é fundamentado no{' '}
              <strong>consentimento</strong> (art. 7º, I, Lei 13.709/2018), que
              é obtido de forma livre, informada e inequívoca no momento do
              envio do formulário, e na{' '}
              <strong>
                execução de contrato ou procedimentos preliminares
              </strong>{' '}
              (art. 7º, V), quando aplicável.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>5. Compartilhamento</h2>
            <p className={s.text}>
              Os dados não são compartilhados com terceiros, exceto em
              cumprimento a obrigação legal ou ordem judicial. O canal de
              comunicação utilizado é o WhatsApp Business, sujeito à política de
              privacidade da Meta Platforms Inc.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>6. Prazo de Retenção</h2>
            <p className={s.text}>
              Os dados são mantidos pelo prazo necessário à prestação do serviço
              ou, no máximo, por 5 (cinco) anos após o último contato, salvo
              obrigação legal de retenção por prazo superior.
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>7. Seus Direitos</h2>
            <p className={s.text}>
              Nos termos da LGPD, você tem direito a: confirmar a existência de
              tratamento; acessar seus dados; corrigir dados incompletos ou
              inexatos; solicitar anonimização, bloqueio ou eliminação; revogar
              o consentimento a qualquer momento; e obter informações sobre o
              compartilhamento realizado.
            </p>
            <p className={s.text}>
              Para exercer qualquer desses direitos, entre em contato:{' '}
              <Link href="mailto:contato@iusim.com" className={s.link}>
                contato@iusim.com
              </Link>
            </p>
          </section>

          <section className={s.section}>
            <h2 className={s.sectionTitle}>8. Segurança</h2>
            <p className={s.text}>
              Adotamos medidas técnicas e organizacionais adequadas para
              proteger os dados contra acesso não autorizado, perda ou
              divulgação indevida.
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
