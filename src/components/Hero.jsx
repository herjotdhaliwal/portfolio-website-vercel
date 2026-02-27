import { useEffect, useState, Suspense, Component } from 'react'
import { motion } from 'framer-motion'
import Hero3D from './Hero3D'
import './Hero.css'

class Hero3DBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  render() { return this.state.hasError ? null : this.props.children }
}

const phrases = [
  'Building platform experiences for Xbox',
  'Shipping features to millions of users',
  'Obsessed with the process',
  'React · C# · TypeScript · Azure',
  'Chasing summits on PNW trails',
]

export default function Hero() {
  const [text, setText] = useState('')

  useEffect(() => {
    let phraseIdx = 0, charIdx = 0, deleting = false, timer

    function type() {
      const current = phrases[phraseIdx]
      if (!deleting) {
        setText(current.substring(0, charIdx + 1))
        charIdx++
        if (charIdx === current.length) {
          timer = setTimeout(() => { deleting = true; type() }, 2000)
          return
        }
        timer = setTimeout(type, 50 + Math.random() * 30)
      } else {
        setText(current.substring(0, charIdx - 1))
        charIdx--
        if (charIdx === 0) {
          deleting = false
          phraseIdx = (phraseIdx + 1) % phrases.length
          timer = setTimeout(type, 400)
          return
        }
        timer = setTimeout(type, 25)
      }
    }
    timer = setTimeout(type, 800)
    return () => clearTimeout(timer)
  }, [])

  const scrollTo = (e, id) => {
    e.preventDefault()
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <Hero3DBoundary>
        <Suspense fallback={null}>
          <Hero3D />
        </Suspense>
      </Hero3DBoundary>
      <div className="hero-content">
        <motion.p className="hero-greeting"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}>
          Hi, I'm
        </motion.p>
        <motion.h1 className="hero-name"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}>
          Herjot Dhaliwal
        </motion.h1>
        <motion.div className="hero-typing"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}>
          <span className="typing-prefix">&gt; </span>
          <span>{text}</span>
          <span className="typing-cursor">|</span>
        </motion.div>
        <motion.p className="hero-sub"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}>
          Software Engineer at <span className="highlight">Microsoft</span> · Xbox &amp; Gaming
        </motion.p>
        <motion.p className="hero-tagline"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}>
          <em>Obsessed with the process.</em>
        </motion.p>
        <motion.div className="hero-cta"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}>
          <a href="#experience" className="btn btn-primary" onClick={(e) => scrollTo(e, '#experience')}>View My Work</a>
          <a href="#contact" className="btn btn-outline" onClick={(e) => scrollTo(e, '#contact')}>Get In Touch</a>
        </motion.div>
        <motion.div className="hero-social"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}>
          <a href="https://www.linkedin.com/in/herjotdhaliwal/" target="_blank" rel="noopener" className="social-link" aria-label="LinkedIn">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
          <a href="mailto:herjot18@outlook.com" className="social-link" aria-label="Email">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
        </motion.div>
      </div>
      <div className="scroll-indicator">
        <div className="scroll-arrow" />
      </div>
    </section>
  )
}
