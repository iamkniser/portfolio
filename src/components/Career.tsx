import { career } from '../data/career'

/** Места работы: компания, должность, даты — то, что рекрутер ищет первым */
export function Career() {
  return (
    <div className="flex flex-col border-t border-line">
      {career.map((item) => (
        <div
          key={item.period}
          className="grid gap-2 border-b border-line py-6 lg:grid-cols-[200px_1fr] lg:gap-8"
        >
          <span className="pt-1 font-mono text-[13px] font-medium leading-[1.5] text-slate">{item.period}</span>
          <div>
            <h3 className="text-[18px] font-semibold leading-[1.3] lg:text-[20px]">{item.company}</h3>
            <p className="mt-1 text-[15px] font-medium text-accent">{item.role}</p>
            <p className="mt-2 max-w-[66ch] text-[15px] leading-[1.55] text-slate lg:text-[16px]">{item.text}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
