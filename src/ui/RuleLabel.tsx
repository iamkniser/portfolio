import type { ReactNode } from 'react'

/** Моно-лейбл с линией: «── ЗАДАЧА ─────» */
export function RuleLabel({ children }: { children: ReactNode }) {
  return (
    <div className="mb-3 mt-7 flex items-center gap-3">
      <span className="font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
        {children}
      </span>
      <span className="h-px flex-1 bg-line" aria-hidden="true" />
    </div>
  )
}
