import type { CaseStudy } from '../data/cases'
import { RuleLabel } from '../ui/RuleLabel'
import { PipelineDiagram } from './PipelineDiagram'

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

      <RuleLabel>Задача</RuleLabel>
      <p className="max-w-[62ch] text-[15px] leading-[1.55] lg:text-[17px] lg:leading-[1.6]">
        {study.task}
      </p>

      <RuleLabel>Решение</RuleLabel>
      <ul className="flex max-w-[70ch] flex-col gap-3">
        {study.solution.map((item) => (
          <li
            key={item}
            className="relative pl-5 text-[15px] leading-[1.55] before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rotate-45 before:bg-accent lg:text-[17px] lg:leading-[1.6]"
          >
            {item}
          </li>
        ))}
      </ul>

      {study.diagram && <PipelineDiagram />}

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

      {study.result && (
        <>
          <RuleLabel>Результат</RuleLabel>
          <p className="max-w-[62ch] text-[15px] leading-[1.55] lg:text-[17px] lg:leading-[1.6]">
            {study.result}
          </p>
        </>
      )}

      <p className="mt-7 border-t border-line pt-4 font-mono text-xs font-medium tracking-[0.02em] text-slate">
        {study.stack.join(' · ')}
      </p>
    </article>
  )
}
