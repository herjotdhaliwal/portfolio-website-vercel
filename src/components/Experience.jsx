import { motion } from 'framer-motion'
import './Experience.css'

const jobs = [
  {
    title: 'Software Engineer 2',
    company: 'Microsoft · Gaming Organization',
    date: 'Mar 2026 — Present',
    points: [
      <>Owned and delivered the <span className="highlight">Parental Consent experience for Xbox</span> end-to-end, enabling a full platform migration that modernized the UX for millions of users while maintaining <span className="highlight">99.99% service reliability</span>.</>,
      'Architected a staged rollout strategy — authored the rollout plan, monitored system health at each phase, and provided data-driven go/no-go recommendations ensuring zero-downtime deployment.',
      'Coordinated across 3+ engineering teams to unblock dependencies, keeping a multi-month project on schedule despite external blockers.',
      'Directed multiple bug bashes pre-launch; triaged all findings by severity and resolved every critical bug, achieving a clean production release.',
    ],
    tags: ['React', 'C#', 'TypeScript', 'Azure', 'Fluent UI'],
  },
  {
    title: 'Software Engineer',
    company: 'Microsoft · Gaming Organization',
    date: 'Aug 2023 — Mar 2026',
    points: [
      <>Reduced manual testing effort by <span className="highlight">50%+</span> by leveraging AI tooling to automate migration of a large-scale test suite.</>,
      'Shipped features across 2 major product releases with zero production incidents.',
      'Mentored a summer intern to independent contribution within 3 weeks, contributing to a return offer.',
    ],
    tags: ['React', 'C#', 'Azure', 'ASP.NET Core'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    date: 'May 2022 — Jul 2022',
    points: [
      <>Optimized an asynchronous job tracking system, reducing processing time by <span className="highlight">20%</span>.</>,
      'Migrated authentication framework from ADAL to MSAL, hardening security for all user flows.',
      <>Executed a security audit that resolved <span className="highlight">50+ vulnerabilities</span>.</>,
    ],
    tags: ['C#', 'ASP.NET Core', 'Azure'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Microsoft',
    date: 'May 2021 — Aug 2021',
    points: [
      <>Built a scalable backend pipeline using Azure Functions, Blob Storage, and Cosmos DB, increasing workflow efficiency by <span className="highlight">30%</span>.</>,
      'Implemented async job tracking with concurrent processing, eliminating user wait times.',
    ],
    tags: ['Azure Functions', 'Cosmos DB', 'Blob Storage'],
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
