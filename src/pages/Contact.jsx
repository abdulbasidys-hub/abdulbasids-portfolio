import { useState } from 'react'

const socials = [
  {
    label: 'LinkedIn',
    href:  'https://www.linkedin.com/in/abdulbasid-yusuf',
    icon:  (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'X / Twitter',
    href:  'https://x.com/abdulbaseedys',
    icon:  (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [form, setForm]   = useState({ email: '', message: '' })
  const [sent, setSent]   = useState(false)
  const [focused, setFoc] = useState(null)

  const handleSend = () => {
    if (!form.email || !form.message) return
    setSent(true)
    setForm({ email: '', message: '' })
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <main style={{
      maxWidth: 1280,
      margin:   '0 auto',
      padding:  '48px 40px 96px',
      display:  'flex',
      flexDirection: 'column',
      gap:      48,
    }}>

      {/* Header */}
      <div style={{
        borderBottom:   '1px solid var(--surface-variant)',
        paddingBottom:  16,
        animation:      'fadeUp 0.7s ease both',
      }}>
        <h2 style={{
          fontFamily:    'var(--f-sans)',
          fontSize:      24,
          fontWeight:    500,
          lineHeight:    1.2,
          letterSpacing: '-0.01em',
          color:         'var(--on-surface)',
        }}>
          Initiate Protocol
        </h2>
      </div>

      {/* Form — centered */}
      <div style={{
        maxWidth:      672,
        margin:        '0 auto',
        width:         '100%',
        display:       'flex',
        flexDirection: 'column',
        gap:           48,
        animation:     'fadeUp 0.8s ease 0.1s both',
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily:    'var(--f-sans)',
            fontSize:      48,
            fontWeight:    600,
            lineHeight:    1.1,
            letterSpacing: '-0.02em',
            color:         'var(--on-surface)',
            marginBottom:  16,
          }}>
            Initiate Protocol
          </h1>
          <p style={{
            fontFamily: 'var(--f-sans)',
            fontSize:   16,
            lineHeight: 1.6,
            color:      'var(--on-surface-variant)',
          }}>
            For clinical consulting or technical collaboration.
          </p>
        </div>

        {/* Form card */}
        <div style={{
          background:    'var(--surface-low)',
          padding:       32,
          border:        '1px solid var(--surface-variant)',
          display:       'flex',
          flexDirection: 'column',
          gap:           32,
        }}>
          {/* Email */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label htmlFor="email" style={{
              fontFamily:    'var(--f-mono)',
              fontSize:      12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color:         'var(--on-surface-variant)',
            }}>
              Target Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="user@domain.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFoc('email')}
              onBlur={() => setFoc(null)}
              style={{
                width:        '100%',
                background:   'var(--surface)',
                border:       'none',
                borderBottom: `1px solid ${focused === 'email' ? 'var(--primary-container)' : 'var(--surface-variant)'}`,
                color:        'var(--on-surface)',
                fontFamily:   'var(--f-mono)',
                fontSize:     14,
                lineHeight:   1.4,
                padding:      '12px 0',
                outline:      'none',
                transition:   'border-color 0.2s',
              }}
            />
          </div>

          {/* Message */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <label htmlFor="message" style={{
              fontFamily:    'var(--f-mono)',
              fontSize:      12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              color:         'var(--on-surface-variant)',
            }}>
              Transmission Data
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Enter transmission details..."
              value={form.message}
              onChange={e => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFoc('message')}
              onBlur={() => setFoc(null)}
              style={{
                width:        '100%',
                background:   'var(--surface)',
                border:       'none',
                borderBottom: `1px solid ${focused === 'message' ? 'var(--primary-container)' : 'var(--surface-variant)'}`,
                color:        'var(--on-surface)',
                fontFamily:   'var(--f-sans)',
                fontSize:     14,
                lineHeight:   1.5,
                padding:      '12px 0',
                outline:      'none',
                resize:       'none',
                transition:   'border-color 0.2s',
              }}
            />
          </div>

          {/* Availability */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{
              width:      7,
              height:     7,
              background: 'var(--primary-container)',
              animation:  'pulse-green 2.2s ease-in-out infinite',
              flexShrink: 0,
            }} />
            <p style={{
              fontFamily:    'var(--f-mono)',
              fontSize:      11,
              letterSpacing: '0.05em',
              color:         'var(--on-surface-variant)',
            }}>
              Currently available for freelance, consulting &amp; collaborations in healthcare AI.
            </p>
          </div>

          {/* Submit */}
          <button
            onClick={handleSend}
            style={{
              width:         '100%',
              padding:       '16px',
              border:        `1px solid ${sent ? 'var(--outline-variant)' : 'var(--primary-container)'}`,
              background:    sent ? 'var(--surface-variant)' : 'transparent',
              color:         sent ? 'var(--on-surface-variant)' : 'var(--primary-container)',
              fontFamily:    'var(--f-mono)',
              fontSize:      12,
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition:    'background 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { if (!sent) { e.currentTarget.style.background = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--on-primary-container)' } }}
            onMouseLeave={e => { if (!sent) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--primary-container)' } }}
          >
            {sent ? '✓ Transmission Sent' : 'Transmit'}
          </button>
        </div>

        {/* Social icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: 32, alignItems: 'center' }}>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                color:      'var(--on-secondary-container)',
                transition: 'color 0.2s',
                display:    'flex',
                alignItems: 'center',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--primary-container)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--on-secondary-container)'}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}