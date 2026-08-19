import { cases } from '../data/cases'
import { CaseCard } from './CaseCard'

export function Cases() {
  return (
    <div className="flex flex-col gap-12">
      {cases.map((study) => (
        <CaseCard key={study.id} study={study} />
      ))}
    </div>
  )
}
