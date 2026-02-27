import { useEffect, useRef } from 'react'

export default function Particles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId
    let time = 0

    function resize() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const blobs = [
      { x: 0.3, y: 0.3, r: 0.4, color: [124, 58, 237], speed: 0.0003 },
      { x: 0.7, y: 0.6, r: 0.35, color: [99, 102, 241], speed: 0.0004 },
      { x: 0.5, y: 0.8, r: 0.3, color: [192, 132, 252], speed: 0.00035 },
      { x: 0.2, y: 0.7, r: 0.25, color: [52, 211, 153], speed: 0.00025 },
    ]

    function animate() {
      time++
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      blobs.forEach((blob, i) => {
        const cx = (blob.x + Math.sin(time * blob.speed + i) * 0.15) * canvas.width
        const cy = (blob.y + Math.cos(time * blob.speed * 1.3 + i * 2) * 0.12) * canvas.height
        const r = blob.r * Math.min(canvas.width, canvas.height)

        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${blob.color.join(',')}, 0.15)`)
        gradient.addColorStop(0.5, `rgba(${blob.color.join(',')}, 0.05)`)
        gradient.addColorStop(1, `rgba(${blob.color.join(',')}, 0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, canvas.width, canvas.height)
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} style={{
    position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
    zIndex: 0, pointerEvents: 'none',
  }} />
}
