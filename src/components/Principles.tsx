import { principles } from '../data/principles'

export function Principles() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
      {principles.map((p) => (
        <div key={p.title}>
          <h3 className="text-[18px] font-semibold leading-[1.3] lg:text-[20px]">{p.title}</h3>
          <p className="mt-2 max-w-[62ch] text-[15px] leading-[1.55] text-slate lg:text-[17px] lg:leading-[1.6]">
            {p.text}
          </p>
        </div>
      ))}
    </div>
  )
}
