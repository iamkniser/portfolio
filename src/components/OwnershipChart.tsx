import type { CSSProperties } from 'react'
import { ownership, teamNote } from '../data/profile'

/** Блок «Владение кодом»: доля коммитов по соло-проектам */
export function OwnershipChart() {
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
        Владение кодом · доля коммитов
      </p>
      <div className="flex flex-col gap-5">
        {ownership.map((row, i) => (
          <div key={row.name}>
            <div className="flex items-baseline justify-between gap-3 font-mono text-[13px] font-medium">
              <span className="uppercase tracking-[0.02em]">
                {row.name}
                {row.scope && <span className="normal-case text-slate"> · {row.scope}</span>}
              </span>
              <span className="shrink-0 text-slate">{row.commits}</span>
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="h-[6px] flex-1 bg-line">
                <div
                  className="bar-fill h-full bg-accent"
                  style={{ width: `${row.pct}%`, '--delay': `${i * 100}ms` } as CSSProperties}
                />
              </div>
              <span className="w-9 text-right font-mono text-xs text-slate">{row.pct}%</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 border-t border-line pt-4 text-[14px] leading-[1.5] text-slate">{teamNote}</p>
    </div>
  )
}
