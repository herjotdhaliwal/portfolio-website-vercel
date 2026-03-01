import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">06.</span> Get In Touch
        </motion.h2>
        <motion.div className="contact-content"
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ delay: 0.1, duration: 0.5 }}>
          <p className="contact-text">
            I'm always open to interesting conversations and new opportunities.
            Whether you have a question, want to collaborate, or just want to say hi — my inbox is open.
          </p>
          <a href="mailto:herjot18@outlook.com" className="btn btn-primary btn-lg">Say Hello</a>
          <div className="contact-links">
            <a href="https://www.linkedin.com/in/herjotdhaliwal/" target="_blank" rel="noopener">LinkedIn</a>
            <span className="contact-sep">·</span>
            <a href="mailto:herjot18@outlook.com">herjot18@outlook.com</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
