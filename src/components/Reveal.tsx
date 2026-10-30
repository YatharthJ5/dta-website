import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

export default function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const { ref, className: c } = useReveal<HTMLDivElement>()
  return (
    <div ref={ref} className={`${c} ${className}`} style={{ ['--d' as string]: `${delay}ms` }}>
      {children}
    </div>
  )
}
