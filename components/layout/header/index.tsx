'use client'

import cn from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { Link } from '@/components/ui/link'
import s from './header.module.css'

const NAV_LINKS = [
  { href: '#posicionamento', label: 'Filosofia' },
  { href: '#tese', label: 'A Tese' },
  { href: '#servicos', label: 'Serviços' },
  { href: '#contato', label: 'Institucional' },
] as const

export function Header() {
  const headerRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header ref={headerRef} className={cn(s.root, scrolled && s.isScrolled)}>
      <div className={s.inner}>
        {/* Logo */}
        <Link
          href="/"
          className={s.logo}
          aria-label="Iusim — Estratégia Visual"
        >
          <svg
            viewBox="0 0 1003 1003"
            className={s.logoMark}
            aria-hidden="true"
            fill="currentColor"
          >
            <path d="M727.86,501.08c49.25-56.36,70.93-124.27,69.52-200.29,69.87,39.02,124.87,114.99,124.87,203.72,0,73.4-36.65,146.75-101.23,199.48l.86.45c65.28-46.48,116.91-120.44,116.91-202.61,0-127.39-104.35-236.94-218.14-243.14l42.25,20.57c7.51,64.88-8.37,131.27-59.74,197.77-62.21-58.88-136.01-82.93-232.25-77.89l-13.21,34.18c76.58-6.3,145.49,11.04,219.6,67.75-22.84,22.53-36.75,33.47-60.75,44.46l-8.42,39.57c34.78-12.86,62.56-31.86,93.06-59.34,42.8,49.61,62.46,101.68,60.9,173.82-2.97,134.05-109.04,262.35-261.49,261.44-110.3-.6-189.55-61.35-238.86-148.52l-39.37-5.39c46.18,98.15,140.75,186.93,278.23,186.93,165.76,0,295.67-139.64,295.67-292.04,0-74.26-27.42-150.89-68.41-200.94h0Z" />
            <path d="M500.5,8.7c-160.06,0-300.41,126.18-300.41,296.38,0,70.22,26.67,136.62,69.82,193.48-48.04,52.28-71.59,122.35-69.82,205.53-73.05-38.31-129.71-113.98-129.71-203.67,0-74.46,32.11-143.58,108.99-201.8l-.35-.35c-71.49,44.36-119.93,115.95-119.93,201.75,0,119.53,89.28,227.51,210.27,247.07l10.59,1.46-43.51-24.85c-6.45-65.59,13.71-131.02,56.71-194.74,57.17,53.69,126.54,76.78,234.17,74.21l14.27-34.78c-70.22,9.33-143.32-7.97-219.7-65.69,26.11-24.95,37.91-33.02,59.49-44.56l8.82-39.57c-34.73,15.22-55.66,31.36-91.5,60.19-40.58-52.28-62.01-112.07-62.01-169.24,0-132.64,111.92-266.13,261.14-267.19,106.07-.76,193.58,62.16,239.31,147.1l39.37,9.07C733.76,84.27,631.62,8.7,500.5,8.7Z" />
            <path d="M501.51,61.89c-130.87,0-244.4,108.34-248.94,225.6l24.45-47.69c69.37-4.54,138.08,11.14,196.36,59.18-58.88,62.61-82.93,136.62-75.82,239.76l32.87,7.56c-9.23-72.59,9.12-144.68,68.66-221.51,19.41,21.68,27.22,35.29,39.22,57.82l43.25,7.81c-16.54-39.22-33.68-63.12-58.58-91.45,47.09-42.45,109.19-61.35,168.18-61.35,140.65,0,268.85,108.34,268.85,263.46,0,96.29-55.45,191.06-150.33,243.59l-3.08,36.55c106.77-44.21,188.34-140.05,187.99-280.8-.35-159-131.53-297.43-297.59-297.43-79.2,0-145.24,25.46-196.46,70.83-54.5-47.14-121.39-68.11-201.6-69.32,42.75-76.12,118.27-127.8,203.16-127.8,73.6,0,138.89,33.52,199.48,105.87l1.16-.55c-46.78-73.4-114.89-120.13-201.25-120.13h0Z" />
            <path d="M191.67,224.06C86.11,267.62,8.17,370.71,8.17,502.95c0,155.52,125.02,295.22,294.06,295.22,79.6,0,147.96-30.65,196.61-68.11,53.49,45.37,121.19,68.36,198.12,68.36-38.41,71.38-111.31,127.59-199.53,127.59-74.01,0-143.68-36.9-198.52-106.82l-4.79.3c45.88,67.65,104.56,110.66,200.89,110.66,126.03,0,232.3-111.11,238.15-190.96l12-27.27-25.06,55.81c-62.36,3.58-128.8-13.61-197.87-62.41,54.5-60.09,82.17-139.24,78.24-236.84l-33.52-10.38c11.24,69.07-4.49,149.22-69.12,223.98-21.98-22.48-34.03-39.73-41.64-61.25l-39.83-8.72c15.12,37.56,33.27,67.55,57.57,94.27-49.66,39.57-105.46,60.55-173.62,60.55-138.18,0-262.04-117.92-262.04-265.83,0-106.02,62.76-200.19,148.06-236.69l5.34-40.33h0Z" />
          </svg>
          <span className={s.logoText}>Iusim</span>
        </Link>

        {/* Desktop navigation */}
        <nav className={s.nav} aria-label="Navegação principal">
          <ul className={s.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={s.navLink}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA + mobile toggle */}
        <div className={s.actions}>
          <Link
            href="#contato"
            className={cn(s.ctaButton, 'dt:inline-flex hidden')}
          >
            Solicitar Avaliação
          </Link>
          <button
            type="button"
            className={s.menuToggle}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={menuOpen}
          >
            <span className={cn(s.menuLine, menuOpen && s.menuLineTopOpen)} />
            <span
              className={cn(
                s.menuLine,
                s.menuLineMiddle,
                menuOpen && s.menuLineMidOpen
              )}
            />
            <span
              className={cn(s.menuLine, menuOpen && s.menuLineBottomOpen)}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(s.mobileMenu, menuOpen && s.mobileMenuOpen)}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Menu mobile">
          <ul className={s.mobileNavList}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={s.mobileNavLink}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <Link
          href="#contato"
          className="btn-primary"
          onClick={() => setMenuOpen(false)}
        >
          Solicitar Avaliação
        </Link>
      </div>
    </header>
  )
}
