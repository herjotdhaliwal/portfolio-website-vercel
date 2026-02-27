import { motion } from 'framer-motion'
import './BeyondCode.css'

const hobbies = [
  { icon: '🏔️', title: 'Hiking', desc: 'Chasing summits and fresh air on PNW trails.' },
  { icon: '🏋️', title: 'Lifting', desc: 'Consistency over intensity. The gym is my second office.' },
  { icon: '📚', title: 'Reading', desc: 'Always have a book going — the best way to think differently.' },
  { icon: '✈️', title: 'Travel', desc: 'New places, new perspectives, new food.' },
  { icon: '🍜', title: 'Food', desc: "If it's delicious, I'm there. Always hunting the next great spot." },
]

export default function BeyondCode() {
  return (
    <section id="beyond" className="section section-sm">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">05.</span> Beyond Code
        </motion.h2>
        <motion.p className="beyond-intro"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
          I build things at Microsoft, lift heavy things at the gym, and eat delicious things everywhere in between.
        </motion.p>
        <div className="beyond-grid">
          {hobbies.map((h, i) => (
            <motion.div className="beyond-card glass" key={h.title}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4, type: 'spring' }}>
              <span className="beyond-icon">{h.icon}</span>
              <h3>{h.title}</h3>
              <p>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
