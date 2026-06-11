import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const WORDS = [
  'Clinical Intelligence.',
  'Lab Automation.',
  'Healthcare AI.',
  'Diagnostic Systems.',
]

export default function Home() {
  const navigate = useNavigate()
  const [word,     setWord]     = useState(0)
  const [typed,    setTyped]    = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const target = WORDS[word]
    let t
    if (!deleting && typed.length < target.length) {
      t = setTimeout(() => setTyped(target.slice(0, typed.length + 1)), 75)
    } else if (!deleting && typed.length === target.length) {
      t = setTimeout(() => setDeleting(true), 2200)
    } else if (deleting && typed.length > 0) {
      t = setTimeout(() => setTyped(target.slice(0, typed.length - 1)), 40)
    } else {
      setDeleting(false)
      setWord(w => (w + 1) % WORDS.length)
    }
    return () => clearTimeout(t)
  }, [typed, deleting, word])

  return (
    <main style={{
      maxWidth: 1280,
      margin:   '0 auto',
      padding:  '48px 40px 96px',
    }}>

      {/* ── Hero ── */}
      <section style={{
        display:        'flex',
        flexDirection:  'column',
        justifyContent: 'center',
        minHeight:      614,
        gap:            32,
        animation:      'fadeUp 0.8s ease both',
      }}>
        {/* Status indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            width: 8, height: 8,
            background: 'var(--primary-container)',
            animation:  'pulse-green 2s ease-in-out infinite',
          }} />
          <span style={{
            fontFamily:    'var(--f-mono)',
            fontSize:      12,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            color:         'var(--primary-container)',
          }}>
            System Online
          </span>
        </div>

        {/* Headline */}
        <h1 style={{
          fontFamily:    'var(--f-sans)',
          fontSize:      48,
          fontWeight:    600,
          lineHeight:    1.1,
          letterSpacing: '-0.02em',
          color:         'var(--on-surface)',
          maxWidth:      896,
        }}>
          Intelligence built on clinical experience<br />
          and{' '}
          <span style={{ color: 'var(--primary-container)' }}>
            {typed}
            <span style={{
              display:    'inline-block',
              width:      2,
              height:     '0.85em',
              background: 'var(--primary-container)',
              marginLeft: 2,
              verticalAlign: 'middle',
              animation:  'blink 1s step-end infinite',
            }} />
          </span>
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: 'var(--f-sans)',
          fontSize:   16,
          lineHeight: 1.6,
          color:      'var(--on-surface-variant)',
          maxWidth:   672,
        }}>
          Medical Laboratory Scientist &amp; Healthcare AI Builder. Mastery through restraint.
          Bridging the critical gap between diagnostic reality and algorithmic capability.
        </p>

        {/* CTA */}
        <div style={{ paddingTop: 32, display: 'flex', gap: 16 }}>
          <button
            onClick={() => navigate('/work')}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent:'center',
              padding:       '12px 32px',
              background:    'var(--surface-low)',
              border:        '1px solid var(--surface-variant)',
              color:         'var(--on-surface)',
              fontFamily:    'var(--f-mono)',
              fontSize:      12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition:    'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--primary-container)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface-variant)';    e.currentTarget.style.color = 'var(--on-surface)' }}
          >
            View Systems
          </button>
          <button
            onClick={() => navigate('/contact')}
            style={{
              display:       'inline-flex',
              alignItems:    'center',
              justifyContent:'center',
              padding:       '12px 32px',
              background:    'transparent',
              border:        '1px solid var(--primary-container)',
              color:         'var(--primary-container)',
              fontFamily:    'var(--f-mono)',
              fontSize:      12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition:    'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--on-primary-container)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-container)' }}
          >
            Let's Connect
          </button>
        </div>
      </section>

      {/* ── Problem Statement ── */}
      <section style={{
        borderLeft: '2px solid var(--primary-container)',
        paddingLeft: 48,
        paddingTop:  16,
        paddingBottom: 16,
        marginBottom: 128,
        animation: 'fadeUp 0.8s ease 0.15s both',
      }}>
        <p style={{
          fontFamily:    'var(--f-sans)',
          fontSize:      24,
          fontWeight:    500,
          lineHeight:    1.2,
          letterSpacing: '-0.01em',
          color:         'var(--on-surface)',
          maxWidth:      768,
        }}>
          "The gap between code and clinic is where solutions fail. Precision demands context."
        </p>
        <span style={{
          display:       'block',
          marginTop:     16,
          fontFamily:    'var(--f-mono)',
          fontSize:      14,
          lineHeight:    1.4,
          color:         'var(--on-surface-variant)',
        }}>
          &gt; _IDENTIFIED_CONSTRAINT: LACK OF DOMAIN EXPERTISE IN AI DEPLOYMENTS
        </span>
      </section>

      {/* ── Photo ── */}
      <div style={{
        position:   'fixed',
        right:      0,
        top:        0,
        bottom:     0,
        width:      '40%',
        zIndex:     0,
        pointerEvents: 'none',
      }}>
        <img src="/background.png" alt="" style={{
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
          objectPosition: 'top center',
          opacity:    0.12,
          filter:     'grayscale(20%)',
        }} />
        <div style={{
          position:   'absolute',
          inset:      0,
          background: 'linear-gradient(to right, var(--surface-lowest) 0%, rgba(14,14,14,0.5) 50%, transparent 100%)',
        }} />
      </div>
    </main>
  )
}
