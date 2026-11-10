import { career } from '../data/career'

/** Места работы: компания, должность, даты — то, что рекрутер ищет первым */
export function Career() {
  return (
    <ol className="flex flex-col">
      {career.map((item) => (
        <li
          key={item.period}
          className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-[18px] first:pt-0"
        >
          <span className="flex-[0_0_120px] font-mono text-[13px] text-slate">{item.period}</span>
          <div className="min-w-0 flex-[1_1_360px]">
            <h3 className="text-[18px] font-semibold leading-[1.3]">{item.company}</h3>
            <p className="mt-1 text-[15px] font-medium text-accent">{item.role}</p>
            <p className="mt-2 text-slate">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
