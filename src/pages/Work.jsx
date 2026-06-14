import { useState, useEffect, useRef } from 'react'

const projects = [
  {
    id: 'P-001',
    title:    'DiagNet.v1',
    version:  'v1.2.0',
    category: 'Healthcare AI',
    status:   'DEPLOYED',
    img:      'https://lh3.googleusercontent.com/aida-public/AB6AXuABsoTXh37uphO3s_MX5rLrGlEA-u8mzTq2Vu4bVGKnt68hG_45LcWvUbiISfupcdVeaN-StCX5IUhHDZcIhzG2t-iJ2UjO6cumH7xbQJk_WqUuYUgI5Isi2prlozv0gD0v3mWp-3y10pKyPFKYtXoGTky3dSjwFPo9vvXPeDqg3W1J-0NX-gt0OPkoRuV9ouK89SbKGJBhAgwX75qqMrCrnu6zT78_0AwU9cVUoD1IYvjb2ksqHwXjrcpoLps8va_zNxMHoEEpf8o',
    desc:     'Automated cell morphology classification pipeline integrating directly with existing LIMS architectures. Reduced manual review time by 40% while maintaining 99.8% specificity.',
    problem:  'Manual differential cell counting consumes 3–6 hours per day. Errors compound under fatigue. The solution had to integrate with existing infrastructure — no rip-and-replace.',
    tags:     ['Python', 'TensorFlow', 'PostgreSQL'],
    metrics:  [{ val: '40%', label: 'Time Reduction' }, { val: '99.8%', label: 'Specificity' }],
  },
  {
    id: 'P-002',
    title:    'Serum Data API',
    version:  'v0.9.4',
    category: 'Systems Integration',
    status:   'BETA',
    img:      null,
    desc:     'A high-throughput, low-latency API designed for real-time aggregation of decentralized clinical trial data. Built with extreme constraints on payload size and parsing speed.',
    problem:  'Clinical trial data lives in silos across multiple facilities. Aggregation delays cause decision lag. A unified stream was needed without replacing existing infrastructure.',
    tags:     ['Rust', 'GraphQL', 'Redis'],
    metrics:  [{ val: '<12ms', label: 'Avg Latency' }, { val: '99.9%', label: 'Uptime' }],
  },
  {
    id: 'P-003',
    title:    'QC Anomaly Detector',
    version:  'v2.0.1',
    category: 'Data Analytics',
    status:   'DEPLOYED',
    img:      null,
    desc:     'Statistical process control system that flags Westgard rule violations in real-time and alerts scientists before patient results are released.',
    problem:  'QC failures discovered after result release cause costly repeats and patient risk. Early detection needed to be automatic — not another manual step.',
    tags:     ['Python', 'Make', 'n8n', 'HL7'],
    metrics:  [{ val: '100%', label: 'Auto-detection' }, { val: '0', label: 'Missed Violations' }],
  },
]

export default function Work() {
  const [open, setOpen] = useState(null)
  const ref = useRef()

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('show') })
    }, { threshold: 0.08 })
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
          Systems Deployed
        </h2>
      </div>

      <p style={{ fontFamily: 'var(--f-mono)', fontSize: 13, color: 'var(--on-surface-variant)', borderLeft: '2px solid var(--primary-container)', paddingLeft: 16, animation: 'fadeUp 0.7s ease 0.1s both' }}>
        Every project begins with a real problem inside a real laboratory.
      </p>

      {/* Project cards grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 24 }}>
        {projects.map((p, i) => (
          <div key={p.id} className="reveal" style={{
            background: 'var(--surface-low)',
            border:     '1px solid var(--surface-variant)',
            overflow:   'hidden',
            transition: 'border-color 0.3s',
            transitionDelay: `${i * 0.1}s`,
          }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--primary-container)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--surface-variant)'}
          >
            {/* Image or placeholder */}
            <div style={{
              height:       256,
              background:   'var(--surface)',
              borderBottom: '1px solid var(--surface-variant)',
              overflow:     'hidden',
              position:     'relative',
              display:      'flex',
              alignItems:   'center',
              justifyContent: 'center',
            }}>
              {p.img ? (
                <img src={p.img} alt={p.title} style={{
                  width: '100%', height: '100%', objectFit: 'cover',
                  opacity: 0.6, filter: 'grayscale(100%)',
                  transition: 'opacity 0.7s, transform 0.7s, filter 0.7s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.filter = 'grayscale(0%)' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = 0.6; e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.filter = 'grayscale(100%)' }}
                />
              ) : (
                <>
                  {/* dot pattern bg */}
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.2,
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4'%3E%3Crect width='4' height='4' fill='%231c1b1b'/%3E%3Crect width='1' height='1' fill='%23353534'/%3E%3C/svg%3E")`,
                  }} />
                  <span style={{ fontFamily: 'var(--f-mono)', fontSize: 14, color: 'var(--primary-container)', opacity: 0.5, position: 'relative', zIndex: 1 }}>
                    EXECUTING_QUERY...
                  </span>
                </>
              )}
            </div>

            {/* Content */}
            <div style={{ padding: 32 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <h3 style={{ fontFamily: 'var(--f-sans)', fontSize: 24, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.01em', color: 'var(--on-surface)' }}>
                  {p.title}
                </h3>
                <span style={{ fontFamily: 'var(--f-mono)', fontSize: 14, lineHeight: 1.4, color: 'var(--on-surface-variant)' }}>{p.version}</span>
              </div>

              <p style={{ fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.5, color: 'var(--on-surface-variant)', marginBottom: 24 }}>
                {p.desc}
              </p>

              {/* Expandable details */}
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  background: 'transparent', border: 'none',
                  fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.05em',
                  textTransform: 'uppercase', color: 'var(--primary-container)',
                  marginBottom: open === i ? 20 : 0,
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = 0.7}
                onMouseLeave={e => e.currentTarget.style.opacity = 1}
              >
                {open === i ? '− Less Detail' : '+ More Detail'}
              </button>

              {open === i && (
                <div style={{ marginBottom: 24, paddingTop: 16, borderTop: '1px solid var(--surface-variant)' }}>
                  <p style={{ fontFamily: 'var(--f-mono)', fontSize: 11, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginBottom: 8 }}>Problem Addressed</p>
                  <p style={{ fontFamily: 'var(--f-sans)', fontSize: 14, lineHeight: 1.6, color: 'var(--on-surface-variant)', marginBottom: 20 }}>{p.problem}</p>
                  <div style={{ display: 'flex', gap: 32 }}>
                    {p.metrics.map(m => (
                      <div key={m.label}>
                        <div style={{ fontFamily: 'var(--f-sans)', fontSize: 24, fontWeight: 600, color: 'var(--primary-container)', lineHeight: 1 }}>{m.val}</div>
                        <div style={{ fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--on-surface-variant)', marginTop: 4 }}>{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tags + links */}
              <div style={{ display: 'flex', gap: 16, borderTop: '1px solid var(--surface-variant)', paddingTop: 16, alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', gap: 16 }}>
                  {p.tags.map(t => (
                    <span key={t} style={{ fontFamily: 'var(--f-mono)', fontSize: 12, letterSpacing: '0.05em', color: 'var(--on-surface-variant)' }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  {['GitHub', 'Demo'].map(lbl => (
                    <a key={lbl} href="#" style={{
                      fontFamily: 'var(--f-mono)', fontSize: 10, letterSpacing: '0.05em',
                      textTransform: 'uppercase', color: 'var(--primary-container)',
                      border: '1px solid var(--primary-container)', padding: '4px 12px',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--on-primary-container)' }}
                      onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-container)' }}
                    >{lbl}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}