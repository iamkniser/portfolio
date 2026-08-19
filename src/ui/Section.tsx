import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  num: string
  label: string
  title?: string
  /** true для hero — меньший верхний отступ */
  first?: boolean
  children: ReactNode
}

export function Section({ id, num, label, title, first, children }: SectionProps) {
  return (
    <section id={id} className={`rail-section ${first ? 'pt-6 lg:pt-10' : 'pt-16 lg:pt-24'}`}>
      {/* Анкер для узла рельса — выравнивает узел по началу контента, а не по padding */}
      <span className="rail-anchor block" aria-hidden="true" />
      <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate lg:hidden">
        {num} / {label}
      </p>
      {title && (
        <h2 className="mb-8 font-display text-[26px] font-medium leading-[1.2] lg:mb-10 lg:text-[34px] lg:leading-[1.15]">
          {title}
        </h2>
      )}
      {children}
    </section>
  )
}
