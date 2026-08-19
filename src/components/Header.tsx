import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import { sections } from '../data/sections'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null

  return (
    <header className="fixed inset-x-0 top-0 z-40 h-14 border-b border-line bg-paper/80 backdrop-blur-[8px]">
      <div className="mx-auto flex h-full max-w-[1120px] items-center justify-between px-6">
        <a href="#profile" className="text-[15px] font-semibold">
          Никита Кривошеев
        </a>
        <nav aria-label="Разделы страницы" className="hidden gap-6 md:flex">
          {sections
            .filter((s) => s.nav)
            .map((s) => (
              <a key={s.id} href={`#${s.id}`} className="text-[15px] text-slate hover:text-ink">
                {s.nav}
              </a>
            ))}
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={profile.resumePdf}
            download
            className="hidden rounded border border-line px-3 py-1.5 text-[14px] font-medium hover:border-accent sm:inline-block"
          >
            Резюме (PDF)
          </a>
        </div>
      </div>
    </header>
  )
}
