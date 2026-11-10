import type { ReactNode } from 'react'

interface SectionProps {
  id: string
  num: string
  label: string
  title?: string
  /**
   * hero — без заголовка и линии;
   * top — заголовок строкой над контентом, без верхней линии (её роль играет нижняя линия полосы цифр);
   * split — тёмная линия сверху, заголовок в левой колонке, контент справа.
   */
  variant: 'hero' | 'top' | 'split'
  /** Моно-подпись; по умолчанию «03 · Опыт» */
  note?: string
  children: ReactNode
}

const heading = 'font-display text-[clamp(28px,3.4vw,44px)] font-medium'

export function Section({ id, num, label, title, variant, note, children }: SectionProps) {
  const titleId = `${id}-title`
  const noteText = `${num} · ${note ?? label}`

  if (variant === 'hero' || !title) {
    return (
      <section id={id} aria-label={label} className="scroll-mt-20">
        {children}
      </section>
    )
  }

  if (variant === 'top') {
    return (
      <section id={id} aria-labelledby={titleId} className="scroll-mt-20 pb-10 pt-[112px]">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3">
          <h2 id={titleId} className={heading}>
            {title}
          </h2>
          <p className="font-mono text-[13px] text-slate">{noteText}</p>
        </div>
        {children}
      </section>
    )
  }

  return (
    <section id={id} aria-labelledby={titleId} className="scroll-mt-20 border-t border-ink py-[72px]">
      <div className="flex flex-wrap gap-x-16 gap-y-8">
        <div className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
          {/* Плотный интервал: в узкой колонке заголовок может уйти на две строки */}
          <h2 id={titleId} className={`${heading} leading-[1.15]`}>
            {title}
          </h2>
          <p className="font-mono text-[13px] text-slate">{noteText}</p>
        </div>
        <div className="min-w-0 flex-[3_1_560px]">{children}</div>
      </div>
    </section>
  )
}
