import { useEffect, useState } from 'react'
import { sections } from '../data/sections'

interface Marker {
  id: string
  y: number
}

const railSections = sections.filter((s) => s.rail)

/**
 * Сигнатурный элемент: вертикальный рельс пайплайна по левому краю
 * контентной колонки. Узлы стоят на уровне начала контента каждой секции,
 * участок выше активной секции залит акцентным цветом.
 */
export function Rail() {
  const [markers, setMarkers] = useState<Marker[]>([])
  const [active, setActive] = useState(railSections[0].id)

  useEffect(() => {
    const host = document.getElementById('rail-host')
    if (!host) return

    const measure = () => {
      const hostTop = host.getBoundingClientRect().top + window.scrollY
      setMarkers(
        railSections.map((s) => {
          const anchor = document.querySelector(`#${s.id} .rail-anchor`)
          const y = anchor ? anchor.getBoundingClientRect().top + window.scrollY - hostTop : 0
          return { id: s.id, y }
        }),
      )
    }

    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(document.body)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(e.target.id)
      },
      { rootMargin: '-20% 0px -60% 0px' },
    )
    for (const s of sections) {
      const el = document.getElementById(s.id)
      if (el) io.observe(el)
    }
    return () => io.disconnect()
  }, [])

  const activeMarker = markers.find((m) => m.id === active)
  // Активна секция вне рельса («Контакты») — рельс заполнен целиком
  const fillHeight = activeMarker ? `${activeMarker.y + 8}px` : '100%'

  return (
    <div className="pointer-events-none absolute inset-y-0 left-6 hidden w-40 lg:block" aria-hidden="true">
      <span className="absolute inset-y-0 left-[5.5px] w-px bg-line" />
      <span className="rail-fill absolute left-[5.5px] top-0 w-px bg-accent" style={{ height: fillHeight }} />
      {markers.map((m) => {
        const s = railSections.find((x) => x.id === m.id)
        if (!s) return null
        const isActive = m.id === active
        return (
          <span key={m.id} className="absolute flex items-center gap-3" style={{ top: m.y - 6, left: 0 }}>
            <span className="grid h-3 w-3 place-items-center">
              <span
                className="rotate-45 bg-accent"
                style={{ width: isActive ? 9 : 7, height: isActive ? 9 : 7 }}
              />
            </span>
            <a
              href={`#${s.id}`}
              tabIndex={-1}
              className={`pointer-events-auto whitespace-nowrap font-mono text-xs font-medium uppercase tracking-[0.02em] ${
                isActive ? 'text-ink' : 'text-slate'
              }`}
            >
              {s.num} / {s.label}
            </a>
          </span>
        )
      })}
    </div>
  )
}
