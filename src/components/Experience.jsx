import { motion } from 'framer-motion'
import './Experience.css'

const jobs = [
  {
    title: 'Software Engineer 2',
    company: 'Microsoft · Gaming Organization',
    date: 'Mar 2026 — Present',
    points: [
      <>Built core screens for the Fluent UI rebuild of Xbox parental consent; an A/B test showed <span className="highlight">~33% higher consent completion</span>, 6% higher child sign-in, and 34.5% fewer backend round-trips.</>,
      'Took 3 child sign-up releases through staged rollout to full promotion, owning go/no-go readouts, health monitoring, and results reporting.',
      <>Shipped age-restriction UI and routing for child sign-up to general availability; <span className="highlight">2,400+ child accounts</span> used it with zero frontend exceptions in 21 days.</>,
      'Built a Playwright MCP AI test agent that runs Azure DevOps test cases end to end, captures evidence, and reports results—replacing a 2-day manual test pass.',
      'Authored the South Korea expansion design doc defining regional age-verification gating.',
      'Owned the end-to-end test plan and cross-team bug bashes; added 18+ API test cases and instrumented 6 views while preserving legacy event names for comparable funnel dashboards.',
      'Fixed gamepad and focus issues in consent flows and reported an upstream Fluent UI focus bug.',
    ],
    tags: ['React', 'TypeScript', 'Fluent UI', 'Playwright MCP', 'Azure DevOps'],
  },
  {
    title: 'Software Engineer',
    company: 'Microsoft · Gaming Organization',
    date: 'Aug 2023 — Mar 2026',
    points: [
      'Led the migration of Xbox parental consent to a modern React codebase, preserving country-specific rules with zero downtime and 99.99% reliability.',
      'Delivered 2 major Xbox child-account creation releases early across 3+ teams, with zero incidents.',
      'Introduced Copilot workflows adopted by the team for coding and testing, and used AI to migrate a large test suite.',
      'Mentored an intern to independent contribution in 3 weeks, contributing to a return offer.',
    ],
    tags: ['React', 'C#', 'GitHub Copilot', 'Azure'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft · 2 consecutive summers',
    date: 'May 2021 — Jul 2022',
    points: [
      <>Re-architected an asynchronous job-tracking system for concurrency, cutting processing time by <span className="highlight">20%</span>.</>,
      'Resolved 50+ security vulnerabilities and migrated all authentication flows from ADAL to MSAL.',
      <>Built an Azure Functions and Cosmos DB pipeline, improving console-entitlement workflow efficiency by <span className="highlight">30%</span>.</>,
    ],
    tags: ['C#', 'Azure Functions', 'Cosmos DB', 'MSAL'],
  },
  {
    title: 'Explore Intern',
    company: 'Microsoft',
    date: 'Summer 2020',
    points: [
      <>Built Grafana dashboard auto-publishing in React and TypeScript, cutting publishing time by <span className="highlight">80%</span>.</>,
    ],
    tags: ['React', 'TypeScript', 'Grafana'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <motion.h2 className="section-title"
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="section-number">02.</span> Experience
        </motion.h2>
        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div className="timeline-item" key={i}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}>
              <div className="timeline-marker" />
              <div className="timeline-card glass">
                <div className="timeline-header">
                  <h3>{job.title}</h3>
                  <span className="timeline-company">{job.company}</span>
                  <span className="timeline-date">{job.date}</span>
                </div>
                <ul className="timeline-points">
                  {job.points.map((p, j) => <li key={j}>{p}</li>)}
                </ul>
                <div className="timeline-tags">
                  {job.tags.map(t => <span className="tag" key={t}>{t}</span>)}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
