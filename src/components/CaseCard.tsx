import { useState, type ReactNode } from 'react'
import type { CaseStudy } from '../data/cases'
import { CaseDemo } from './CaseDemo'

function DetailsHeading({ children }: { children: ReactNode }) {
  return <h4 className="font-mono text-xs uppercase tracking-[0.06em] text-slate">{children}</h4>
}

/**
 * Слева — суть простым языком (для рекрутера), справа — зацикленное демо ключевой механики.
 * «Как это устроено» раскрывает под ними панель для техлида: задача, шаги, ключевые решения.
 */
export function CaseCard({ study, index }: { study: CaseStudy; index: number }) {
  const titleId = `case-${study.id}`
  const detailsId = `case-${study.id}-details`
  const num = String(index).padStart(2, '0')
  const [open, setOpen] = useState(false)

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

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="min-h-11 self-start py-2.5 font-medium text-accent hover:opacity-80"
        >
          {open ? 'Свернуть ↑' : 'Как это устроено ↓'}
        </button>
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

      {open && (
        <div
          id={detailsId}
          className="flex min-w-0 flex-[1_1_100%] flex-wrap gap-x-10 gap-y-8 rounded-2xl border border-line bg-surface p-6 text-[15px] leading-[1.6] sm:p-8"
        >
          <section className="flex min-w-0 flex-[1_1_240px] flex-col gap-3">
            <DetailsHeading>Задача</DetailsHeading>
            <p>{study.task}</p>
          </section>

          <section className="flex min-w-0 flex-[2_1_380px] flex-col gap-3">
            <DetailsHeading>Как устроено</DetailsHeading>
            <ol className="flex flex-col gap-2.5">
              {study.how.map((step, i) => (
                <li key={step.lead} className="flex gap-3">
                  <span className="flex-[0_0_22px] font-mono text-[13px] text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <b className="font-semibold">{step.lead}</b>: {step.text}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="flex min-w-0 flex-[1_1_260px] flex-col gap-3">
            <DetailsHeading>Ключевые решения</DetailsHeading>
            <ul className="flex list-disc flex-col gap-2.5 pl-[18px] text-ink/85">
              {study.decisions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>
      )}
    </article>
  )
}
