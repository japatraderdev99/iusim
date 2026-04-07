import { Link } from '@/components/ui/link'
import s from './footer.module.css'

export function Footer() {
  return (
    <footer className={s.root} role="contentinfo">
      <div className={s.inner}>
        {/* Top row — 4 columns */}
        <div className={s.topRow}>
          {/* Brand */}
          <div className={s.brand}>
            <p className={s.brandName}>Iusim</p>
            <div className={s.brandContact}>
              <Link href="https://iusim.co" className={s.brandLink}>
                iusim.co
              </Link>
              <Link href="mailto:alexandre@iusim.co" className={s.brandLink}>
                alexandre@iusim.co
              </Link>
            </div>
          </div>

          {/* Diretório */}
          <nav aria-label="Diretório">
            <p className={s.navGroupTitle}>Diretório</p>
            <ul className={s.navList}>
              <li>
                <Link href="#tese" className={s.navLink}>
                  A Tese
                </Link>
              </li>
              <li>
                <Link href="#servicos" className={s.navLink}>
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#acervo" className={s.navLink}>
                  Arquivo
                </Link>
              </li>
              <li>
                <Link href="#contato" className={s.navLink}>
                  Institucional
                </Link>
              </li>
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal">
            <p className={s.navGroupTitle}>Legal</p>
            <ul className={s.navList}>
              <li>
                <Link href="/" className={s.navLink}>
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/" className={s.navLink}>
                  Termos
                </Link>
              </li>
              <li>
                <Link href="/" className={s.navLink}>
                  Compliance
                </Link>
              </li>
            </ul>
          </nav>

          {/* Localização */}
          <div>
            <p className={s.navGroupTitle}>Localização</p>
            <address className={s.address}>
              <p className={s.addressLine}>Florianópolis</p>
              <p className={s.addressLine}>Santa Catarina, BR</p>
              <Link href="tel:+5548999685129" className={s.addressPhone}>
                (48) 99968-5129
              </Link>
            </address>
          </div>
        </div>

        {/* Divider */}
        <div className={s.divider} aria-hidden="true" />

        {/* Bottom row */}
        <div className={s.bottomRow}>
          <p className={s.copyright}>
            © 2026 Iusim. Todos os direitos reservados.
          </p>
          <div className={s.social}>
            <Link
              href="https://instagram.com/iusim.co"
              className={s.socialLink}
              aria-label="Instagram"
            >
              Instagram
            </Link>
            <Link
              href="https://wa.me/5548999685129"
              className={s.socialLink}
              aria-label="WhatsApp"
            >
              WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
