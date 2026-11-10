import { stackGroups } from '../data/stack'

export function StackSection() {
  return (
    <ul className="flex flex-col">
      {stackGroups.map((group) => (
        <li
          key={group.title}
          className="flex flex-wrap gap-x-6 gap-y-1 border-b border-line py-[18px] first:pt-0 last:border-b-0"
        >
          <h3 className="flex-[0_0_120px] font-mono text-[13px] uppercase text-slate">{group.title}</h3>
          <p className="min-w-0 flex-[1_1_360px]">{group.items.join(' · ')}</p>
        </li>
      ))}
    </ul>
  )
}
