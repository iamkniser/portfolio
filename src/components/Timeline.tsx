import { timeline } from '../data/timeline'

export function Timeline() {
  return (
    <div className="mt-14">
      <h3 className="pb-2 font-mono text-[13px] uppercase text-slate">Другие проекты в Galamat Tech</h3>
      <ol className="flex flex-col">
        {timeline.map((item) => (
          <li
            key={item.name}
            className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-[18px] last:border-b-0"
          >
            <span className="flex-[0_0_120px] font-mono text-[13px] text-slate">{item.period}</span>
            <p className="min-w-0 flex-[1_1_360px]">
              <strong className="font-semibold">{item.name}</strong> — {item.text}
            </p>
          </li>
        ))}
      </ol>
    </div>
  )
}
