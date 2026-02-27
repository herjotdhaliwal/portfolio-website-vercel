import { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import './Nav.css'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)

    const sections = document.querySelectorAll('.section, .hero')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { threshold: 0.3 })
    sections.forEach(s => observer.observe(s))

    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect() }
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  const handleClick = (e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="nav-logo">HD</div>
        <div className="nav-links">
          {links.map(l => (
            <a key={l.href} href={l.href}
              className={`nav-link ${active === l.href.slice(1) ? 'active' : ''}`}
              onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
          ))}
          <ThemeToggle />
        </div>
        <div className={`nav-hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <a key={l.href} href={l.href} className="mobile-link"
            onClick={(e) => handleClick(e, l.href)}>{l.label}</a>
        ))}
      </div>
    </>
  )
}
