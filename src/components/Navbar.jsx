import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

const links = [
  { label: 'Home',    to: '/'        },
  { label: 'Work',    to: '/work'    },
  { label: 'Writing', to: '/writing' },
  { label: 'About',   to: '/about'   },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header style={{
      background:           scrolled ? 'rgba(19,19,19,0.75)' : 'rgba(19,19,19,0.55)',
      backdropFilter:       'blur(16px) saturate(1.4)',
      WebkitBackdropFilter: 'blur(16px) saturate(1.4)',
      borderBottom:         '1px solid rgba(255,255,255,0.06)',
      position:             'sticky',
      top:                  0,
      zIndex:               50,
      width:                '100%',
      transition:           'background 0.3s ease',
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
          fontSize:      22,
          fontWeight:    700,
          lineHeight:    1.1,
          letterSpacing: '-0.01em',
          color:         'var(--primary-container)',
          whiteSpace:    'nowrap',
        }}>
          Mls. Abdulbasid Yusuf
        </NavLink>

        {/* Desktop nav — centered, leaning right */}
        <nav className="navbar-links" style={{
          display:    'flex',
          gap:        32,
          flex:       1,
          justifyContent: 'flex-end',
          paddingRight: 40,
        }}>
          {links.map(({ label, to }) => (
            <NavLink key={to} to={to} end style={({ isActive }) => ({
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
              onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary-container)' }}
              onMouseLeave={e => { if (!e.currentTarget.classList.contains('active')) e.currentTarget.style.color = 'var(--on-surface-variant)' }}
            >
              {label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Toggle menu"
          style={{
            display:    'none',
            background: 'transparent',
            border:     'none',
            color:      'var(--primary-container)',
            padding:    8,
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6"  x2="21" y2="6"  />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {menuOpen && (
        <nav style={{
          display:        'flex',
          flexDirection:  'column',
          gap:            0,
          borderTop:      '1px solid rgba(255,255,255,0.06)',
          background:     'rgba(19,19,19,0.85)',
          backdropFilter: 'blur(16px) saturate(1.4)',
        }}>
          {links.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                fontFamily:    'var(--f-sans)',
                fontSize:      16,
                padding:       '16px 40px',
                color:         isActive ? 'var(--primary-container)' : 'var(--on-surface-variant)',
                fontWeight:    isActive ? 700 : 400,
                borderBottom:  '1px solid rgba(255,255,255,0.05)',
              })}
            >
              {label}
            </NavLink>
          ))}
        </nav>
      )}

      {/* Responsive rules */}
      <style>{`
        @media (max-width: 768px) {
          .navbar-links { display: none !important; }
          .navbar-hamburger { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </header>
  )
}