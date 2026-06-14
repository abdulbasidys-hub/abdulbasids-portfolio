import { useEffect, useRef } from 'react'

const skills = [
  'n8n','Make','Healthcare AI','Data Analytics','HTML / CSS / JS',
  'Prompt Engineering','Lab Information Systems','Adobe Creative Suite',
  'API Integration','QC Trend Analysis','Python','TensorFlow',
]

const creds = [
  { tag: 'Degree',   text: 'B.MLS — Maryam Abacha American University of Niger', year: '2023'     },
  { tag: 'License',  text: 'MLSCN Licensed — Inducted',                           year: 'Dec 2025'  },
  { tag: 'Clinical', text: 'Federal Teaching Hospital Katsina',                    year: '2023'      },
  { tag: 'Clinical', text: 'Federal Teaching Hospital Gombe',                      year: '2024–25'   },
]

const story = [
  {
    n: '01', title: 'The Foundation',
    text: 'Trained as a Medical Laboratory Scientist with clinical postings at two Federal Teaching Hospitals — Katsina and Gombe. Real institutions. Real pressure. Nearly two years of hands-on lab work showing me exactly what a working laboratory looks like from the inside: the workflows, the bottlenecks, the manual processes that still dominate even the best-equipped facilities.',
  },
  {
    n: '02', title: 'The Realisation',
    text: 'During training I kept seeing the same problem: labs drowning in data but starving for intelligence. Skilled scientists spending hours on tasks that software could handle in seconds. Diagnostic errors that better systems could prevent. I knew both worlds — the science and the technology — and started asking why nobody was building the bridge.',
  },
  {
    n: '03', title: 'The Builder',
    text: 'So I became that bridge. I build AI and automation solutions specifically for healthcare laboratory environments — drawing on clinical training, 15+ years of technical self-education, and deep knowledge of AI tools and workflows. Mission: smarter labs, faster diagnoses, better patient outcomes.',
  },
]

export default function About() {
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
    }, { threshold: 0.1 })
    ref.current?.querySelectorAll('.reveal,.reveal-left,.reveal-right')
      .forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <main ref={ref} style={{
      maxWidth: 1280,
      margin:   '0 auto',
      padding:  '48px 40px 96px',
    }}>

      {/* ── About / Story ── */}
      <section style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
        <div style={{
          borderBottom:   '1px solid var(--surface-variant)',
          paddingBottom:  16,
        }}>
          <h2 style={{ fontFamily: 'var(--f-sans)', fontSize: 24, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--on-surface)' }}>
            Origin Story
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64 }}>
          {/* Story movements */}
          <div className="reveal-left" style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {story.map((s, i) => (
              <div key={s.n} style={{ display: 'flex', gap: 20 }}>
                <span style={{
                  fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.05em',
                  color: 'var(--primary-container)', flexShrink: 0, paddingTop: 2,
                }}>{s.n}</span>
                <div>
                  <h3 style={{ fontFamily: 'var(--f-sans)', fontSize: 16, fontWeight: 600, color: 'var(--on-surface)', marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.7, color: 'var(--on-surface-variant)' }}>{s.text}</p>
                </div>
              </div>
            ))}
            <blockquote style={{
              borderLeft:  '2px solid var(--primary-container)',
              paddingLeft: 16,
              fontFamily:  'var(--f-mono)',
              fontSize:    13,
              color:       'var(--primary-container)',
              lineHeight:  1.6,
              marginTop:   8,
            }}>
              "From the laboratory bench to the AI frontier —<br />built on 15 years of technical curiosity."
            </blockquote>
          </div>

          {/* Photo */}
          <div className="reveal-right" style={{ display: 'flex' }}>
            <div style={{
              border:   '1px solid var(--surface-variant)',
              overflow: 'hidden',
              aspectRatio: '4 / 5',
              background: 'var(--surface-low)',
              width:    '100%',
            }}>
              <img
                src="/me.JPG"
                alt="Abdulbasid Yusuf"
                style={{
                  width:      '100%',
                  height:     '100%',
                  objectFit:  'cover',
                  display:    'block',
                  filter:     'grayscale(15%)',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Credentials + Skills ── */}
      <section style={{ marginTop: 64, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
        {/* Credentials */}
        <div className="reveal" style={{ background: 'var(--surface-low)', border: '1px solid var(--surface-variant)', padding: 32 }}>
          <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--primary-container)', marginBottom: 24 }}>
            Credentials
          </p>
          {creds.map((c, i) => (
            <div key={i} style={{
              display: 'flex', flexDirection: 'column', gap: 4,
              paddingBottom: 16, marginBottom: i < creds.length - 1 ? 16 : 0,
              borderBottom: i < creds.length - 1 ? '1px solid var(--surface-variant)' : 'none',
            }}>
              <p style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--on-surface-variant)' }}>{c.tag}</p>
              <p style={{ fontFamily: 'var(--f-sans)', fontSize: 14, color: 'var(--on-surface)', lineHeight: 1.5 }}>{c.text}</p>
              <span style={{ fontFamily: 'var(--f-mono)', fontSize: 12, color: 'var(--primary-container)' }}>{c.year}</span>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div className="reveal" style={{ background: 'var(--surface-low)', border: '1px solid var(--surface-variant)', padding: 32 }}>
          <p style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--primary-container)', marginBottom: 20 }}>
            Skills &amp; Tools
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {skills.map(s => (
              <span key={s} style={{
                background:    'var(--surface)',
                padding:       '4px 8px',
                fontFamily:    'var(--f-mono)',
                fontSize:      12,
                letterSpacing: '0.05em',
                color:         'var(--on-surface-variant)',
                border:        '1px solid var(--surface-variant)',
                transition:    'border-color 0.2s, color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--primary-container)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--surface-variant)'; e.currentTarget.style.color = 'var(--on-surface-variant)' }}
              >{s}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}