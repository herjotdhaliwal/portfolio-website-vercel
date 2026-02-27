import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Loader.css'

export default function Loader({ onComplete }) {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false)
      setTimeout(onComplete, 500)
    }, 1800)
    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <svg className="loader-logo" viewBox="0 0 100 100" width="80" height="80">
            <motion.text
              x="50" y="58"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="none"
              stroke="var(--accent2)"
              strokeWidth="1.5"
              fontSize="36"
              fontFamily="var(--font-mono)"
              fontWeight="700"
              initial={{ strokeDasharray: 200, strokeDashoffset: 200 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            >
              HD
            </motion.text>
            <motion.text
              x="50" y="58"
              textAnchor="middle"
              dominantBaseline="middle"
              fontSize="36"
              fontFamily="var(--font-mono)"
              fontWeight="700"
              fill="var(--accent2)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              HD
            </motion.text>
          </svg>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
