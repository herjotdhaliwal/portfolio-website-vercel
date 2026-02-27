import { Component } from 'react'
import Particles from './components/Particles'
import Cursor from './components/Cursor'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import BeyondCode from './components/BeyondCode'
import AiChat from './components/AiChat'
import Contact from './components/Contact'
import Footer from './components/Footer'

class ErrorBoundary extends Component {
  constructor(props) { super(props); this.state = { hasError: false } }
  static getDerivedStateFromError() { return { hasError: true } }
  render() { return this.state.hasError ? this.props.fallback : this.props.children }
}

export default function App() {
  return (
    <ErrorBoundary fallback={<FallbackApp />}>
      <Particles />
      <Cursor />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <BeyondCode />
      <Contact />
      <AiChat />
      <Footer />
    </ErrorBoundary>
  )
}

function FallbackApp() {
  return (
    <>
      <Particles />
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <BeyondCode />
      <Contact />
      <AiChat />
      <Footer />
    </>
  )
}
