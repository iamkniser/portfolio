import { stackGroups } from '../data/stack'

export function StackSection() {
  return (
    <div className="border-t border-line">
      {stackGroups.map((group) => (
        <div
          key={group.title}
          className="grid gap-2 border-b border-line py-5 lg:grid-cols-[200px_1fr] lg:gap-8 lg:py-6"
        >
          <h3 className="pt-1 font-mono text-xs font-medium uppercase tracking-[0.02em] text-slate">
            {group.title}
          </h3>
          <p className="text-[15px] leading-[1.7] lg:text-[17px]">{group.items.join(' · ')}</p>
        </div>
      ))}
    </div>
  )
}
