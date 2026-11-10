import { principles } from '../data/principles'

export function Principles() {
  return (
    <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
      {principles.map((p) => (
        <div key={p.title}>
          <h3 className="text-[18px] font-semibold leading-[1.3]">{p.title}</h3>
          <p className="mt-2 text-slate">{p.text}</p>
        </div>
      ))}
    </div>
  )
}
