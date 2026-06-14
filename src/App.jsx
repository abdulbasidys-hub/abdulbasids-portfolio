import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar  from './components/Navbar.jsx'
import Footer  from './components/Footer.jsx'
import Cursor  from './components/Cursor.jsx'
import Home    from './pages/Home.jsx'
import About   from './pages/About.jsx'
import Work    from './pages/Work.jsx'
import Writing from './pages/Writing.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Cursor />
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />}    />
        <Route path="/about"   element={<About />}   />
        <Route path="/work"    element={<Work />}    />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}