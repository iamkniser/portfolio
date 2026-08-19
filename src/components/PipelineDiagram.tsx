import { Fragment } from 'react'

const stages = ['Источник · MTProto', 'Очереди · pgmq', 'AI-обогащение', 'Кластеризация', 'Дашборд']

/** Схема пайплайна медиа-платформы — вместо скриншота */
export function PipelineDiagram() {
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
      <figcaption className="mt-3 text-[13px] leading-[1.5] text-slate">
        Каждая стадия — отдельная очередь pgmq со своим воркером и общей dead-letter-очередью;
        AI-обогащение: язык · релевантность · тональность · сущности · категории · эмбеддинги.
      </figcaption>
    </figure>
  )
}
