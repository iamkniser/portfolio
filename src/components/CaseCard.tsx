import type { CaseStudy } from '../data/cases'
import { RuleLabel } from '../ui/RuleLabel'
import { CaseDemo } from './CaseDemo'

/**
 * Слева — суть простым языком (для рекрутера) и «Как это устроено» с деталями (для техлида),
 * справа — зацикленное демо ключевой механики.
 */
export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const titleId = `case-${study.id}`
  const num = String(index).padStart(2, '0')

  return (
    <article aria-labelledby={titleId} className="flex flex-wrap gap-12 border-t border-line py-14">
      <div className="flex min-w-0 flex-[1_1_420px] flex-col gap-[18px]">
        <p className="font-mono text-[13px] text-slate">
          {num} · {study.year} · {study.role}
        </p>
        <h3 id={titleId} className="font-display text-[28px] font-medium leading-[1.2]">
          {study.name}
        </h3>
        <p className="text-[18px]">{study.tagline}</p>

        <ul className="flex list-disc flex-col gap-2.5 pl-5">
          {study.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        {study.result && <p className="rounded-[10px] bg-accent-dim px-4 py-3.5 text-[15px]">{study.result}</p>}

        <ul aria-label="Стек" className="flex flex-wrap gap-1.5 font-mono text-[12px]">
          {study.stack.map((tech) => (
            <li key={tech} className="rounded-full border border-line px-2.5 py-1">
              {tech}
            </li>
          ))}
        </ul>

        <details className="group">
          <summary className="inline-flex cursor-pointer list-none items-center gap-1.5 py-2.5 font-medium text-accent hover:opacity-80 [&::-webkit-details-marker]:hidden">
            <span className="underline underline-offset-[3px]">Как это устроено</span>
            <span aria-hidden="true" className="transition-transform group-open:rotate-90">
              →
            </span>
          </summary>

          <RuleLabel>Задача</RuleLabel>
          <p className="text-[15px] leading-[1.6]">{study.task}</p>

          <RuleLabel>Решение</RuleLabel>
          <ul className="flex list-disc flex-col gap-2.5 pl-5 text-[15px] leading-[1.6]">
            {study.solution.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </details>
      </div>

      {study.demo ? (
        <div className="min-w-0 flex-[1_1_520px]">
          <CaseDemo {...study.demo} />
        </div>
      ) : (
        study.image && (
          <figure className="min-w-0 flex-[1_1_520px]">
            <img
              src={study.image.src}
              alt={study.image.alt}
              loading="lazy"
              className="aspect-video w-full rounded-2xl border border-line object-cover"
            />
            {study.image.caption && (
              <figcaption className="mt-3 text-[14px] text-slate">{study.image.caption}</figcaption>
            )}
          </figure>
        )
      )}
    </article>
  )
}
