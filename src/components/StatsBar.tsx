import { stats } from '../data/stats'

export function StatsBar() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] border-b border-t border-b-line border-t-ink">
      {stats.map((s) => (
        <div key={s.label} className="flex flex-col gap-2 py-7 pr-6">
          <div className="whitespace-nowrap font-display text-[34px] font-medium">{s.value}</div>
          <div className="text-[14px] text-slate">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
