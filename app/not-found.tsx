import { Link } from '@/components/ui/link'

export default function NotFound() {
  return (
    <div
      style={{
        display: 'flex',
        minHeight: '100dvh',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'var(--color-midnight)',
        color: 'var(--color-ivory)',
        padding: '0 var(--safe)',
        textAlign: 'center',
        fontFamily: 'var(--font-sans)',
      }}
    >
      <p
        style={{
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          color: 'var(--color-ivory-muted)',
          marginBottom: '24px',
        }}
      >
        — Erro 404 —
      </p>
      <h1
        style={{
          fontFamily: 'var(--font-serif)',
          fontWeight: 300,
          fontSize: 'clamp(48px, 8vw, 96px)',
          lineHeight: 0.95,
          letterSpacing: '-0.025em',
          marginBottom: '32px',
        }}
      >
        Página não
        <br />
        <em>encontrada.</em>
      </h1>
      <p
        style={{
          fontSize: '15px',
          fontWeight: 300,
          color: 'var(--color-ivory-dim)',
          marginBottom: '48px',
          maxWidth: '360px',
          lineHeight: 1.7,
        }}
      >
        A página que você procura não existe ou foi movida.
      </p>
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '16px 36px',
          backgroundColor: 'var(--color-ivory)',
          color: 'var(--color-midnight)',
          fontFamily: 'var(--font-sans)',
          fontSize: '10px',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          textDecoration: 'none',
        }}
      >
        Voltar ao início
      </Link>
    </div>
  )
}
