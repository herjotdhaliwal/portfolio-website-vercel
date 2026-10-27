import { motion } from 'framer-motion'
import './Education.css'

export default function Education() {
  return (
    <section id="education" className="section section-sm">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">04.</span> Education
        </motion.h2>
        <motion.div className="edu-card glass"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <div className="edu-icon">🎓</div>
          <div className="edu-info">
            <h3>University of Toronto</h3>
            <p>Honours BSc in Computer Science and Geographic Information Systems</p>
            <span className="edu-date">2018 — 2023</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
