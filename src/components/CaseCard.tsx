import { ChevronDown } from 'lucide-react'
import type { CaseStudy } from '../data/cases'
import { RuleLabel } from '../ui/RuleLabel'
import { PipelineDiagram } from './PipelineDiagram'

const bullet =
  'relative pl-5 before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rotate-45 before:bg-accent'

/**
 * Два уровня чтения: сверху — суть и результат простым языком (для рекрутера),
 * под «Как это устроено» — задача и технические детали (для техлида).
 */
export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <article className="rounded-lg border border-line bg-surface p-6 lg:p-8">
      <div className="flex items-baseline justify-between gap-4 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
        <span>{study.name}</span>
        <span>{study.year}</span>
      </div>

      <h3 className="mt-4 max-w-[62ch] text-[18px] font-semibold leading-[1.3] lg:text-[20px]">
        {study.tagline}
      </h3>

      <span className="mt-3 inline-block rounded bg-accent-dim px-2 py-1 text-[13px] font-medium text-accent">
        {study.role}
      </span>

      <ul className="mt-6 flex max-w-[66ch] flex-col gap-3">
        {study.highlights.map((item) => (
          <li key={item} className={`${bullet} text-[16px] leading-[1.55] lg:text-[17px] lg:leading-[1.6]`}>
            {item}
          </li>
        ))}
      </ul>

      {study.result && (
        <div className="mt-6 max-w-[66ch] border-l-2 border-accent pl-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.02em] text-accent">Результат</p>
          <p className="mt-1 text-[15px] leading-[1.55] lg:text-[16px]">{study.result}</p>
        </div>
      )}

      {study.diagram && <PipelineDiagram {...study.diagram} />}

      {study.image && (
        <figure className="mt-7">
          <img
            src={study.image.src}
            alt={study.image.alt}
            loading="lazy"
            className="aspect-video w-full rounded border border-line object-cover"
          />
          {study.image.caption && (
            <figcaption className="mt-2 text-[13px] text-slate">{study.image.caption}</figcaption>
          )}
        </figure>
      )}

      <details className="group mt-7 border-t border-line pt-4">
        <summary className="flex cursor-pointer list-none items-center gap-2 text-[15px] font-medium text-accent hover:opacity-80 [&::-webkit-details-marker]:hidden">
          Как это устроено
          <ChevronDown size={16} className="transition-transform group-open:rotate-180" aria-hidden="true" />
        </summary>

        <RuleLabel>Задача</RuleLabel>
        <p className="max-w-[62ch] text-[15px] leading-[1.55] lg:text-[16px] lg:leading-[1.6]">{study.task}</p>

        <RuleLabel>Решение</RuleLabel>
        <ul className="flex max-w-[70ch] flex-col gap-3">
          {study.solution.map((item) => (
            <li key={item} className={`${bullet} text-[15px] leading-[1.55] lg:text-[16px] lg:leading-[1.6]`}>
              {item}
            </li>
          ))}
        </ul>
      </details>

      <p className="mt-6 border-t border-line pt-4 font-mono text-xs font-medium tracking-[0.02em] text-slate">
        {study.stack.join(' · ')}
      </p>
    </article>
  )
}
