import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const WORDS = [
  'Clinical Intelligence.',
  'Lab Automation.',
  'Healthcare AI.',
  'Diagnostic Systems.',
]

const offerings = [
  {
    icon: 'lab_research',
    title: 'Healthcare AI Solutions',
    desc:  'Building intelligent tools for clinical laboratory environments — automated workflows, QC anomaly detection, AI integration grounded in real diagnostic science.',
    tags:  ['PyTorch', 'TensorFlow', 'Python'],
  },
  {
    icon: 'sync_alt',
    title: 'Automation & Integration',
    desc:  'Connecting disconnected healthcare systems with n8n, Make, and API integrations. LIS integration, reporting pipelines, zero manual bottlenecks.',
    tags:  ['n8n', 'Make', 'API', 'LIS'],
  },
  {
    icon: 'monitoring',
    title: 'Data Analytics & Intelligence',
    desc:  'Turning raw laboratory data into dashboards, QC trend analysis, and decision-support systems that turn numbers into clinical insight.',
    tags:  ['Dashboards', 'QC Trends', 'Analytics'],
  },
]

export default function Home() {
  const navigate = useNavigate()
  const ref = useRef()
  const [word,     setWord]     = useState(0)
  const [typed,    setTyped]    = useState('')
  const [deleting, setDeleting] = useState(false)
  const [scrollY,  setScrollY]  = useState(0)

  // Reveal-on-scroll for .reveal elements
  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

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

  // Track scroll to fade out the background image
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fade image out over the first ~500px of scroll
  const imgOpacity = Math.max(0, 0.35 - scrollY / 500 * 0.35)

  return (
    <main ref={ref} style={{
      maxWidth: 1280,
      margin:   '0 auto',
      padding:  '48px 40px 96px',
      position: 'relative',
      zIndex:   1,
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
        marginBottom: 96,
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

      {/* ── Services ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 48, marginTop: 96 }}>
        <div style={{
          borderBottom:   '1px solid var(--surface-variant)',
          paddingBottom:  16,
        }}>
          <h2 style={{
            fontFamily:    'var(--f-sans)',
            fontSize:      24,
            fontWeight:    500,
            lineHeight:    1.2,
            letterSpacing: '-0.01em',
            color:         'var(--on-surface)',
          }}>Services</h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 24 }}>
          {offerings.map((o, i) => (
            <div key={o.title} className="reveal" style={{
              background:  'var(--surface-low)',
              border:      '1px solid var(--surface-variant)',
              padding:     32,
              transition:  'border-color 0.3s, transform 0.3s',
              transitionDelay: `${i * 0.12}s`,
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--primary-container)'
                e.currentTarget.style.transform = 'translateY(-6px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--surface-variant)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <span className="material-symbols-outlined" style={{
                color:        'var(--primary-container)',
                fontSize:     32,
                display:      'block',
                marginBottom: 24,
                fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24",
              }}>
                {o.icon}
              </span>
              <h3 style={{
                fontFamily:   'var(--f-sans)',
                fontSize:     16,
                fontWeight:   600,
                lineHeight:   1.6,
                color:        'var(--on-surface)',
                marginBottom: 12,
              }}>{o.title}</h3>
              <p style={{
                fontFamily:   'var(--f-sans)',
                fontSize:     14,
                lineHeight:   1.5,
                color:        'var(--on-surface-variant)',
                marginBottom: 24,
              }}>{o.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {o.tags.map(t => (
                  <span key={t} style={{
                    background:    'var(--surface)',
                    padding:       '4px 8px',
                    fontFamily:    'var(--f-mono)',
                    fontSize:      12,
                    letterSpacing: '0.05em',
                    color:         'var(--on-surface-variant)',
                    border:        '1px solid var(--surface-variant)',
                  }}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <div style={{
        position:   'fixed',
        right:      0,
        top:        0,
        bottom:     0,
        width:      '40%',
        zIndex:     0,
        pointerEvents: 'none',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, black 100%)',
        maskImage:       'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.5) 35%, black 100%)',
      }}>
        <img src="/background.PNG" alt="" style={{
          width:      '100%',
          height:     '100%',
          objectFit:  'cover',
          objectPosition: 'top center',
          opacity:    imgOpacity,
          filter:     'grayscale(20%)',
          transition: 'opacity 0.1s linear',
        }} />
      </div>
    </main>
  )
}