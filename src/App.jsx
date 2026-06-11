import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar  from './components/Navbar.jsx'
import Footer  from './components/Footer.jsx'
import Cursor  from './components/Cursor.jsx'
import Home    from './pages/Home.jsx'
import About   from './pages/About.jsx'
import Work    from './pages/Work.jsx'
import Writing from './pages/Writing.jsx'
import Contact from './pages/Contact.jsx'

function Loader({ onDone }) {
  const [pct, setPct] = useState(0)
  const [out, setOut] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPct(p => {
        const next = p + Math.random() * 9 + 2
        if (next >= 100) {
          clearInterval(id)
          setTimeout(() => { setOut(true); setTimeout(onDone, 500) }, 350)
          return 100
        }
        return next
      })
    }, 55)
    return () => clearInterval(id)
  }, [onDone])

  return (
    <div style={{
      position: 'fixed', inset: 0,
      background: 'var(--surface-lowest)',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      zIndex: 9999,
      opacity: out ? 0 : 1, transition: 'opacity 0.5s ease',
      pointerEvents: out ? 'none' : 'all',
    }}>
      <div style={{
        fontFamily:    'var(--f-sans)',
        fontSize:      48,
        fontWeight:    700,
        letterSpacing: '-0.02em',
        color:         'var(--primary-container)',
        marginBottom:  40,
      }}>
        YUSUF.AI
      </div>
      <div style={{ width: 200, height: 1, background: 'var(--surface-variant)', position: 'relative', marginBottom: 16 }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'var(--primary-container)',
          transform: `scaleX(${Math.min(pct, 100) / 100})`,
          transformOrigin: 'left',
          transition: 'transform 0.08s ease',
        }} />
      </div>
      <span style={{
        fontFamily:    'var(--f-mono)',
        fontSize:      12,
        letterSpacing: '0.05em',
        textTransform: 'uppercase',
        color:         'var(--on-surface-variant)',
      }}>
        Initializing System — {Math.min(100, Math.round(pct))}%
      </span>
    </div>
  )
}

export default function App() {
  const [ready, setReady] = useState(false)

  return (
    <BrowserRouter>
      <Cursor />
      {!ready && <Loader onDone={() => setReady(true)} />}
      <div style={{ opacity: ready ? 1 : 0, transition: 'opacity 0.7s ease' }}>
        <Navbar />
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/about"   element={<About />}   />
          <Route path="/work"    element={<Work />}    />
          <Route path="/writing" element={<Writing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
