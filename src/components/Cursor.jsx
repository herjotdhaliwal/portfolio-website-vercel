import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dotRef = useRef(null)
  const trailRef = useRef(null)

  useEffect(() => {
    if ('ontouchstart' in window) return

    let cx = 0, cy = 0, tx = 0, ty = 0
    const dot = dotRef.current
    const trail = trailRef.current

    const onMove = (e) => {
      cx = e.clientX; cy = e.clientY
      dot.style.left = cx - 4 + 'px'
      dot.style.top = cy - 4 + 'px'
    }
    document.addEventListener('mousemove', onMove)

    let animId
    function follow() {
      tx += (cx - tx) * 0.15
      ty += (cy - ty) * 0.15
      trail.style.left = tx - 16 + 'px'
      trail.style.top = ty - 16 + 'px'
      animId = requestAnimationFrame(follow)
    }
    follow()

    const interactives = document.querySelectorAll('a, .btn, .skill-chip, .stat-card, .timeline-card, .nav-hamburger, .beyond-card, .chat-fab')
    const enter = () => { dot.classList.add('hover'); trail.classList.add('hover') }
    const leave = () => { dot.classList.remove('hover'); trail.classList.remove('hover') }
    interactives.forEach(el => { el.addEventListener('mouseenter', enter); el.addEventListener('mouseleave', leave) })

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(animId)
      interactives.forEach(el => { el.removeEventListener('mouseenter', enter); el.removeEventListener('mouseleave', leave) })
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null

  return (
    <>
      <div className="cursor" ref={dotRef} />
      <div className="cursor-trail" ref={trailRef} />
    </>
  )
}
