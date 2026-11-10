import { layersNote, productLayers, teamNote } from '../data/profile'

/** Блок «Один продукт, все слои»: слои проявляются снизу вверх, рельс растёт следом */
export function ProductLayers() {
  const last = productLayers.length - 1

  return (
    <aside
      aria-label="Слои продукта, которые я делаю сам"
      className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-6"
    >
      <p className="flex justify-between gap-3 font-mono text-[12px] uppercase tracking-[0.06em] text-slate">
        <span>Один продукт, все слои</span>
        <span aria-hidden="true">↑ релиз</span>
      </p>
      <div className="flex gap-3.5">
        <div className="relative w-1 shrink-0 rounded-full bg-line" aria-hidden="true">
          <div className="layers-rail absolute inset-x-0 bottom-0 h-full rounded-full bg-accent" />
        </div>
        <ol className="flex min-w-0 flex-1 flex-col gap-2">
          {productLayers.map((layer, i) => (
            <li
              key={layer.name}
              className={`layers-item layers-item-${last - i + 1} flex flex-col gap-0.5 rounded-[10px] border px-3.5 py-3 ${
                layer.highlight ? 'border-accent bg-accent-dim' : 'border-line'
              }`}
            >
              <span className="font-medium">{layer.name}</span>
              <span className={`font-mono text-[12px] ${layer.highlight ? 'text-ink' : 'text-slate'}`}>{layer.tech}</span>
            </li>
          ))}
        </ol>
      </div>
      <p className="layers-note text-[14px] leading-[1.5]">
        {layersNote} <span className="text-slate">{teamNote}</span>
      </p>
    </aside>
  )
}
