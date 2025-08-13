import type { JSX } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

export function AnimatedText({ children }: { children: JSX.Element | string }) {
  const shouldReduce = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (shouldReduce) return <span>{children}</span>
  return (
    <motion.span initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {children}
    </motion.span>
  )
}
