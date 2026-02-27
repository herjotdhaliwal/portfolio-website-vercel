import { useState, useRef, useEffect } from 'react'
import './AiChat.css'

const HERJOT_INFO = {
  role: "Software Engineer 2 at Microsoft in the Gaming organization",
  location: "Seattle, WA",
  school: "University of Toronto, Honours BSc in Computer Science (2018-2023)",
  experience: "5 years at Microsoft including 3 internships and a full-time role",
  flagship: "Led and shipped Parental Consent for Xbox end-to-end with 99.99% reliability",
  skills: "C#, React, TypeScript, Azure, ASP.NET Core, Fluent UI, Node.js, Python",
  hobbies: "hiking, lifting, reading, travel, and hunting for delicious food",
  quote: "To crave the result but not the process is to guarantee disappointment",
  tagline: "Obsessed with the process",
  email: "herjot18@outlook.com",
  linkedin: "linkedin.com/in/herjotdhaliwal",
}

function getResponse(input) {
  const q = input.toLowerCase()

  // Greetings
  if (q.match(/^(hi|hello|hey|sup|what'?s up)/))
    return "Hey! 👋 I'm Herjot's AI assistant. Ask me anything about his work, skills, or interests!"

  // Personal / outside of work — must come BEFORE "work" matcher
  if (q.match(/outside|beyond|free time|personal|like as a person|fun|hobby|hobbies|interests?\b/))
    return `Outside of code, Herjot is into ${HERJOT_INFO.hobbies}. He lives in Seattle — perfect for PNW trail hunting. His life philosophy: "${HERJOT_INFO.quote}." He's the kind of person who brings the same intensity to a summit hike as he does to a production rollout. 🏔️`

  // Specific hobbies
  if (q.match(/food|eat|restaurant|cook/))
    return `Herjot is a certified food explorer 🍜. He's always hunting for the next great spot in Seattle. If you have a recommendation, that's basically a job offer in his book.`

  if (q.match(/lift|gym|workout|fitness|strong|exercise/))
    return `Consistency over intensity — that's Herjot's gym philosophy. The same discipline that ships Xbox features also shows up at the squat rack. 🏋️`

  if (q.match(/hike|trail|mountain|summit|outdoor|nature/))
    return `PNW trails are Herjot's weekend recharge. There's something about earning a summit view that puts a production rollout into perspective. 🏔️`

  if (q.match(/read|book/))
    return `Always has a book going. Reading is how Herjot keeps thinking differently — the best engineers are the ones who look beyond code for inspiration. 📚`

  if (q.match(/travel/))
    return `New places, new perspectives, new food — that's how Herjot travels. He's always looking for the next destination that'll challenge how he thinks. ✈️`

  // Quote / philosophy
  if (q.match(/quote|philosophy|motto|believe|mindset/))
    return `"${HERJOT_INFO.quote}" — this drives everything Herjot does, from shipping Xbox features to hitting PRs at the gym. 💪`

  // Xbox / flagship project
  if (q.match(/xbox|game|gaming|parental|flagship|biggest/))
    return `He owned the Parental Consent experience for Xbox end-to-end — from design through staged production rollout. The migration served millions of users with 99.99% service reliability and zero rollback. That's his flagship project. 🎮`

  // Promotion
  if (q.match(/promot|swe 2|level up|advance/))
    return `Herjot was promoted to Software Engineer 2 in March 2026, after leading the Xbox Parental Consent project end-to-end. The promotion was earned through strong ownership, cross-team leadership, and consistently delivering high-impact work. 🏆`

  // Internships
  if (q.match(/intern/))
    return `Herjot did 3 internships at Microsoft: Explore Intern (2020), SWE Intern (2021), and SWE Intern (2022). Each summer he shipped real features — from auto-publishing Grafana dashboards to building Azure pipelines. That intern-to-full-time pipeline hits different. 🎯`

  // Work / experience / career
  if (q.match(/experience|career|job|what does he do|work\b|microsoft|role/))
    return `Herjot has ${HERJOT_INFO.experience}. His biggest achievement: leading the Parental Consent migration for Xbox end-to-end, from design through staged production rollout. He was recently promoted to SWE 2. 📈`

  // Skills / tech
  if (q.match(/skill|tech|stack|language|framework|code|program/))
    return `His core stack: ${HERJOT_INFO.skills}. He's worked full-stack from frontend React to Azure cloud infrastructure. He also leverages AI tooling to automate testing — reduced manual effort by 50%+. 💻`

  // Education
  if (q.match(/school|education|university|toronto|degree|study|studied/))
    return `${HERJOT_INFO.school}. Go Varsity Blues! 🎓`

  // Contact
  if (q.match(/hire|contact|email|reach|connect|linkedin|talk to/))
    return `You can reach Herjot at ${HERJOT_INFO.email} or connect on ${HERJOT_INFO.linkedin}. He's always open to interesting conversations! 📬`

  // Location
  if (q.match(/location|where.*live|city|seattle|based/))
    return `Herjot is based in ${HERJOT_INFO.location}. Previously from the Toronto area. The PNW is his happy place — mountains, food, and tech all in one spot. 🌲`

  // General "who is" / "tell me about"
  if (q.match(/who is|about him|tell me|describe/))
    return `Herjot is a ${HERJOT_INFO.role}, based in ${HERJOT_INFO.location}. At work, he ships platform experiences for millions of Xbox users. Outside of work, he's into ${HERJOT_INFO.hobbies}. His philosophy? "${HERJOT_INFO.tagline}." 🚀`

  // Fallback
  return `Great question! I'd recommend asking Herjot directly — he's approachable and always happy to chat. Reach him at ${HERJOT_INFO.email} or try asking me about his skills, experience, hobbies, or how to contact him! 😊`
}

const suggestions = [
  "What does Herjot do?",
  "Tell me about the Xbox project",
  "What are his top skills?",
  "What's he like outside of work?",
  "How do I reach him?",
]

export default function AiChat() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'ai', text: "Hey! 👋 I'm Herjot's AI assistant. Ask me anything about his work, skills, or what he's like outside of code!" }
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  useEffect(() => {
    if (open) inputRef.current?.focus()
  }, [open])

  const send = async (text) => {
    const userMsg = text || input.trim()
    if (!userMsg) return
    setInput('')

    const newMessages = [...messages, { role: 'user', text: userMsg }]
    setMessages(newMessages)
    setTyping(true)

    try {
      // Build chat history for the API (convert our format to OpenAI format)
      const apiMessages = newMessages
        .filter(m => m.role !== 'ai' || m !== messages[0]) // skip initial greeting
        .map(m => ({
          role: m.role === 'ai' ? 'assistant' : 'user',
          content: m.text,
        }))

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: apiMessages }),
      })

      if (!res.ok) throw new Error('API error')

      const data = await res.json()
      setTyping(false)
      setMessages(prev => [...prev, { role: 'ai', text: data.reply }])
    } catch {
      // Fallback to pattern matching if API is unavailable
      const response = getResponse(userMsg)
      setTyping(false)
      setMessages(prev => [...prev, { role: 'ai', text: response }])
    }
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() }
  }

  return (
    <>
      <button className={`chat-fab ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}
        aria-label="Chat with AI assistant">
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            <circle cx="9" cy="10" r="1" fill="currentColor"/>
            <circle cx="12" cy="10" r="1" fill="currentColor"/>
            <circle cx="15" cy="10" r="1" fill="currentColor"/>
          </svg>
        )}
        <span className="fab-label">Ask AI</span>
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-dot" />
            <span>Ask Herjot's AI</span>
            <span className="chat-header-badge">✨ AI</span>
          </div>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-msg ${msg.role}`}>
                {msg.role === 'ai' && <span className="chat-avatar">🤖</span>}
                <div className="chat-bubble">{msg.text}</div>
              </div>
            ))}
            {typing && (
              <div className="chat-msg ai">
                <span className="chat-avatar">🤖</span>
                <div className="chat-bubble typing">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {messages.length === 1 && (
            <div className="chat-suggestions">
              {suggestions.map(s => (
                <button key={s} className="suggestion-chip" onClick={() => send(s)}>{s}</button>
              ))}
            </div>
          )}

          <div className="chat-input-bar">
            <input ref={inputRef} type="text" placeholder="Ask me anything..."
              value={input} onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey} disabled={typing} />
            <button className="chat-send" onClick={() => send()} disabled={!input.trim() || typing}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
