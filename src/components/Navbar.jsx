import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'About',   to: '/about'   },
  { label: 'Work',    to: '/work'    },
  { label: 'Writing', to: '/writing' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      background:     scrolled
        ? 'rgba(19,19,19,0.75)'
        : 'rgba(19,19,19,0.6)',
      backdropFilter: 'blur(16px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
      borderBottom:   '1px solid rgba(255,255,255,0.06)',
      position:       'sticky',
      top:            0,
      zIndex:         50,
      width:          '100%',
      transition:     'background 0.3s ease',
    }}>
      <div style={{
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        width:          '100%',
        maxWidth:       1280,
        margin:         '0 auto',
        padding:        '16px 40px',
      }}>

        {/* Logo */}
        <NavLink to="/" style={{
          fontFamily:    'var(--f-sans)',
          fontSize:      48,
          fontWeight:    700,
          lineHeight:    1.1,
          letterSpacing: '-0.02em',
          color:         'var(--primary-container)',
        }}>
          YUSUF.AI
        </NavLink>

        {/* Nav links */}
        <nav style={{ display: 'flex', gap: 32 }}>
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to} style={({ isActive }) => ({
              fontFamily:    'var(--f-sans)',
              fontSize:      16,
              lineHeight:    1.6,
              color:         isActive ? 'var(--primary-container)' : 'var(--on-surface-variant)',
              fontWeight:    isActive ? 700 : 400,
              borderBottom:  isActive ? '2px solid var(--primary-container)' : '2px solid transparent',
              paddingBottom: 4,
              transition:    'color 0.2s, border-color 0.2s',
              opacity:       isActive ? 0.9 : 1,
            })}
              onMouseEnter={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'var(--primary-container)' }}
              onMouseLeave={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'var(--on-surface-variant)' }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Connect button */}
        <NavLink to="/contact" style={{
          display:        'inline-flex',
          alignItems:     'center',
          justifyContent: 'center',
          padding:        '8px 24px',
          border:         '1px solid var(--primary-container)',
          color:          'var(--primary-container)',
          fontFamily:     'var(--f-mono)',
          fontSize:       12,
          letterSpacing:  '0.05em',
          textTransform:  'uppercase',
          transition:     'background 0.2s, color 0.2s',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--primary-container)'; e.currentTarget.style.color = 'var(--on-primary-container)' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent';              e.currentTarget.style.color = 'var(--primary-container)' }}
        >
          Connect
        </NavLink>
      </div>
    </header>
  )
}