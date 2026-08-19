import type { CSSProperties } from 'react'
import { ownership } from '../data/profile'

/** Блок «Владение кодом»: доля коммитов по трём соло-проектам */
export function OwnershipChart() {
  return (
    <div className="rounded-lg border border-line bg-surface p-6">
      <p className="mb-6 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
        Владение кодом · доля коммитов
      </p>
      <div className="flex flex-col gap-5">
        {ownership.map((row, i) => (
          <div key={row.name}>
            <div className="flex items-baseline justify-between font-mono text-[13px] font-medium">
              <span className="uppercase tracking-[0.02em]">{row.name}</span>
              <span className="text-slate">{row.commits}</span>
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
    </div>
  )
}
