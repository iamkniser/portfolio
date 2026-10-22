import { Fragment } from 'react'
import type { CaseDiagram } from '../data/cases'

/** Схема пайплайна кейса — вместо скриншота */
export function PipelineDiagram({ stages, caption }: CaseDiagram) {
  return (
    <figure className="mt-7 rounded-lg border border-line bg-paper p-4 lg:p-5">
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs font-medium tracking-[0.02em]">
        {stages.map((stage, i) => (
          <Fragment key={stage}>
            {i > 0 && (
              <span className="text-slate" aria-hidden="true">
                →
              </span>
            )}
            <span className="rounded border border-line bg-surface px-2 py-1 uppercase">{stage}</span>
          </Fragment>
        ))}
      </div>
      <figcaption className="mt-3 text-[13px] leading-[1.5] text-slate">{caption}</figcaption>
    </figure>
  )
}
