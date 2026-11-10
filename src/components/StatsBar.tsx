import { stats } from '../data/stats'

// Разделители: на десктопе только вертикальные, на мобильном сетка 2×2
const cellBorders = [
  '',
  'border-l lg:border-l',
  'border-t lg:border-l lg:border-t-0',
  'border-l border-t lg:border-t-0',
]

export function StatsBar() {
  return (
    <div className="mt-16 grid grid-cols-2 border-y border-line lg:mt-24 lg:grid-cols-4">
      {stats.map((s, i) => (
        <div key={s.label} className={`border-line px-4 py-7 lg:px-6 ${cellBorders[i]}`}>
          <div className="whitespace-nowrap font-display text-[26px] font-medium leading-none lg:text-[34px]">
            {s.value}
          </div>
          <div className="mt-2 text-[15px] leading-[1.4] text-slate">{s.label}</div>
        </div>
      ))}
    </div>
  )
}
