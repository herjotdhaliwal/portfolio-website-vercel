import { motion } from 'framer-motion'
import './Skills.css'

const categories = [
  { title: 'Languages', items: ['C#', 'TypeScript', 'JavaScript', 'Python', 'SQL (PostgreSQL)', 'Java', 'C'] },
  { title: 'Frameworks', items: ['React', 'Fluent UI', 'ASP.NET Core', 'Node.js / Express', 'FastAPI', 'Django'] },
  { title: 'Cloud & Delivery', items: ['Azure Functions', 'Cosmos DB', 'Azure DevOps', 'CI/CD', 'Staged Rollouts', 'A/B Testing'] },
  { title: 'AI & Testing', items: ['GitHub Copilot', 'AI Agents & Skills', 'Playwright MCP', 'LLM APIs', 'E2E Test Automation'] },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">03.</span> Skills
        </motion.h2>
        <div className="skills-grid">
          {categories.map((cat, ci) => (
            <motion.div className="skill-category glass" key={cat.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.1, duration: 0.5, type: 'spring' }}>
              <h3 className="skill-category-title">{cat.title}</h3>
              <div className="skill-items">
                {cat.items.map((item, ii) => (
                  <motion.div className="skill-chip" key={item}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.1 + ii * 0.05, duration: 0.3 }}>
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
