'use client'

import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useEffect, useRef } from 'react'
import { Link } from '@/components/ui/link'
import s from './contact.module.css'

gsap.registerPlugin(ScrollTrigger)

const VGV_RANGES = [
  'R$1M – R$5M',
  'R$5M – R$15M',
  'R$15M – R$50M',
  'Acima de R$50M',
] as const

const ASSET_TYPES = [
  'Apartamento',
  'Cobertura',
  'Penthouse',
  'Casa',
  'Lote / Terreno',
  'Empreendimento comercial',
] as const

export function Contact() {
  const rootRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        `.${s.title}`,
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.title}`,
            start: 'top 80%',
            once: true,
          },
        }
      )

      gsap.fromTo(
        `.${s.formCard}`,
        { opacity: 0, x: 32 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: `.${s.formCard}`,
            start: 'top 85%',
            once: true,
          },
        }
      )
    }, rootRef)

    return () => ctx.revert()
  }, [])

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    const name = data.get('name')?.toString().trim() ?? ''
    const company = data.get('company')?.toString().trim() ?? ''
    const tipo = data.get('tipo')?.toString() ?? ''
    const vgv = data.get('vgv')?.toString() ?? ''
    const localizacao = data.get('localizacao')?.toString().trim() ?? ''

    const companyPart = company ? ` da ${company}` : ''
    const message =
      `Olá! Aqui é o ${name}${companyPart}. ` +
      `Possuo ${tipo.toLowerCase()} com objetivo de valorizar para venda, ` +
      `avaliado entre ${vgv}, localizado em ${localizacao}. ` +
      `Aguardo o retorno.`

    window.open(
      `https://wa.me/5548999685129?text=${encodeURIComponent(message)}`,
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="contato" ref={rootRef} className={s.root}>
      {/* Architectural background text */}
      <span className={s.bgText} aria-hidden="true">
        Iusim
      </span>

      <div className={s.inner}>
        {/* Left column */}
        <div className={s.leftCol}>
          <p className={s.sectionTag}>Protocolo de Qualificação</p>
          <h2 className={s.title}>
            Solicitar
            <br />
            <em className={s.titleItalic}>Avaliação de Ativo.</em>
          </h2>
          <p className={s.description}>
            Nossa equipe realiza uma análise preliminar da estrutura visual do
            ativo antes de qualquer compromisso contratual.
          </p>
          <p className={s.responseTime}>Resposta em 72 horas.</p>
          <div className={s.contactItems}>
            <div className={s.contactItem}>
              <span className={s.contactLabel}>Email</span>
              <Link href="mailto:alexandre@iusim.co" className={s.contactValue}>
                alexandre@iusim.co
              </Link>
            </div>
            <div className={s.contactItem}>
              <span className={s.contactLabel}>WhatsApp</span>
              <Link
                href="https://wa.me/5548999685129"
                className={s.contactValue}
              >
                (48) 99968-5129
              </Link>
            </div>
          </div>
        </div>

        {/* Right column — form */}
        <div className={s.rightCol}>
          <div className={s.formCard}>
            <form onSubmit={handleSubmit} noValidate>
              <div className={s.formFields}>
                {/* Row: Nome + Empresa */}
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label htmlFor="name" className={s.formLabel}>
                      Titular / Executivo
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={s.formInput}
                      placeholder="Nome completo"
                      required
                      autoComplete="name"
                    />
                  </div>
                  <div className={s.formGroup}>
                    <label htmlFor="company" className={s.formLabel}>
                      Corporativo / Gestora
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className={s.formInput}
                      placeholder="Nome da empresa"
                      autoComplete="organization"
                    />
                  </div>
                </div>

                {/* Row: Tipo + Localização */}
                <div className={s.formRow}>
                  <div className={s.formGroup}>
                    <label htmlFor="tipo" className={s.formLabel}>
                      Tipo de ativo
                    </label>
                    <select
                      id="tipo"
                      name="tipo"
                      className={s.formSelect}
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        Selecionar tipo
                      </option>
                      {ASSET_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className={s.formGroup}>
                    <label htmlFor="localizacao" className={s.formLabel}>
                      Localização do ativo
                    </label>
                    <input
                      id="localizacao"
                      name="localizacao"
                      type="text"
                      className={s.formInput}
                      placeholder="Cidade / Bairro"
                      required
                      autoComplete="off"
                    />
                  </div>
                </div>

                {/* VGV select */}
                <div className={s.formGroup}>
                  <label htmlFor="vgv" className={s.formLabel}>
                    VGV estimado do ativo
                  </label>
                  <select
                    id="vgv"
                    name="vgv"
                    className={s.formSelect}
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>
                      Selecionar faixa
                    </option>
                    {VGV_RANGES.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className={s.submitButton}>
                Submeter Protocolo de Análise
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
