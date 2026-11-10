import { timeline } from '../data/timeline'

export function Timeline() {
  return (
    <div className="mt-14 border-t border-line">
      <h3 className="pb-4 pt-6 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
        Другие проекты в Galamat Tech
      </h3>
      {timeline.map((item) => (
        <div
          key={item.name}
          className="grid grid-cols-[96px_1fr] gap-4 border-b border-line py-4 lg:gap-8"
        >
          <span className="pt-0.5 font-mono text-[13px] font-medium leading-[1.5] text-slate">
            {item.period}
          </span>
          <p className="text-[15px] leading-[1.55]">
            <span className="font-semibold">{item.name}</span> — {item.text}
          </p>
        </div>
      ))}
    </div>
  )
}
