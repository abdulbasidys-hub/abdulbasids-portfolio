import { useState, useEffect, useRef } from 'react'

const articles = [
  {
    title:    'Why Every Healthcare AI Startup Is Missing a Lab Scientist',
    summary:  'The single most common failure mode in clinical AI products — and how domain expertise at the build stage changes everything about what gets shipped.',
    platform: 'LinkedIn', date: 'May 2026', read: '6 min',
    tags:     ['Healthcare AI', 'Opinion'],
  },
  {
    title:    'Building a QC Anomaly Detector With n8n and Westgard Rules',
    summary:  'A complete walkthrough of automating quality control in a clinical laboratory using open-source workflow tools. No enterprise license required.',
    platform: 'Medium', date: 'Apr 2026', read: '12 min',
    tags:     ['Tutorial', 'Automation'],
  },
  {
    title:    'What Two Years Inside a Federal Teaching Hospital Taught Me About Data',
    summary:  'Reflections on diagnostic delays, paper-based workflows, and the growing gap between what technology promises and what labs actually use.',
    platform: 'Substack', date: 'Mar 2026', read: '8 min',
    tags:     ['Clinical', 'Reflection'],
  },
]

export default function Writing() {
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main ref={ref} style={{
      maxWidth: 1280, margin: '0 auto',
      padding: '48px 40px 96px',
      display: 'flex', flexDirection: 'column', gap: 48,
    }}>

      {/* Header */}
      <div style={{
        borderBottom: '1px solid var(--surface-variant)', paddingBottom: 16,
        animation: 'fadeUp 0.7s ease both',
      }}>
        <h2 style={{ fontFamily: 'var(--f-sans)', fontSize: 24, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--on-surface)' }}>
          Thinking Out Loud
        </h2>
      </div>

      {/* Articles */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        {articles.map((a, i) => (
          <a key={a.title} href="#" className="reveal" style={{
            display:         'grid',
            gridTemplateColumns: '120px 1fr 32px',
            gap:             32,
            alignItems:      'center',
            padding:         '32px 0',
            borderBottom:    '1px solid var(--surface-variant)',
            transition:      'background 0.2s',
            transitionDelay: `${i * 0.1}s`,
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'var(--surface-container)'
              e.currentTarget.querySelector('.article-title').style.color = 'var(--primary-container)'
              e.currentTarget.querySelector('.article-arrow').style.opacity = 1
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.querySelector('.article-title').style.color = 'var(--on-surface)'
              e.currentTarget.querySelector('.article-arrow').style.opacity = 0.3
            }}
          >
            {/* Meta */}
            <div style={{ paddingLeft: 0 }}>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--primary-container)', letterSpacing: '0.05em', marginBottom: 4 }}>{a.platform}</p>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--on-surface-variant)' }}>{a.date}</p>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, color: 'var(--on-surface-variant)', marginTop: 2 }}>{a.read} read</p>
            </div>

            {/* Content */}
            <div>
              <h3 className="article-title" style={{
                fontFamily:    'var(--f-sans)',
                fontSize:      18,
                fontWeight:    600,
                lineHeight:    1.3,
                letterSpacing: '-0.01em',
                color:         'var(--on-surface)',
                marginBottom:  10,
                transition:    'color 0.2s',
              }}>{a.title}</h3>
              <p style={{ fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: 12 }}>{a.summary}</p>
              <div style={{ display: 'flex', gap: 8 }}>
                {a.tags.map(t => (
                  <span key={t} style={{
                    background:    'var(--surface)',
                    padding:       '3px 8px',
                    fontFamily:    'var(--f-mono)',
                    fontSize:      10,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color:         'var(--on-surface-variant)',
                    border:        '1px solid var(--surface-variant)',
                  }}>{t}</span>
                ))}
              </div>
            </div>

            {/* Arrow */}
            <span className="article-arrow" style={{ fontSize: 20, color: 'var(--primary-container)', opacity: 0.3, transition: 'opacity 0.2s' }}>→</span>
          </a>
        ))}
      </div>
    </main>
  )
}