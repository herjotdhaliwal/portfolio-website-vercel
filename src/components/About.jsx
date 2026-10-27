import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } }),
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">01.</span> About Me
        </motion.h2>
        <div className="bento-grid">
          <motion.div className="bento-card bento-bio glass"
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p>I'm a Software Engineer 2 at <span className="highlight">Microsoft Gaming</span>, building Xbox child sign-up and parental consent experiences.</p>
            <p>I take features from implementation through staged rollout and general availability. Recent work includes an A/B test with ~33% higher consent completion, an end-to-end AI test agent, and test instrumentation that keeps product analytics comparable across releases.</p>
          </motion.div>

          <motion.div className="bento-card bento-quote glass"
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="bento-quote-mark">"</span>
            <p>To crave the result but not the process is to guarantee disappointment.</p>
          </motion.div>

          <motion.div className="bento-card bento-location glass"
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="bento-emoji">📍</span>
            <p className="bento-location-city">Seattle, WA</p>
            <p className="bento-location-sub">UofT → Microsoft</p>
          </motion.div>

          <StatCard num={3} label="Child Sign-Up Releases Promoted" delay={3} />
          <StatCard num={2} label="Day Manual Test Pass Replaced" delay={4} />
          <StatCard num={18} suffix="+" label="API Test Cases Added" delay={5} />
        </div>
      </div>
    </section>
  )
}

function StatCard({ num, suffix = '', label, delay }) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let current = 0
        const inc = num / 40
        const timer = setInterval(() => {
          current += inc
          if (current >= num) { current = num; clearInterval(timer) }
          el.textContent = Math.floor(current) + suffix
        }, 30)
        observer.unobserve(el)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [num, suffix])

  return (
    <motion.div className="bento-card bento-stat glass"
      custom={delay} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
      <span className="stat-number" ref={ref}>0</span>
      <span className="stat-label">{label}</span>
    </motion.div>
  )
}
