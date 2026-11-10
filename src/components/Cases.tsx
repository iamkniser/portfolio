import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

export function Cases() {
  return (
    <div className="flex flex-col">
      {cases.map((study, i) => (
        <CaseCard key={study.id} study={study} index={i + 1} />
      ))}
    </div>
  )
}
