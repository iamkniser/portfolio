import { profile } from '../data/profile'
import { sections } from '../data/sections'
import { ThemeToggle } from '../ui/ThemeToggle'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-[8px]">
      <div className="mx-auto flex max-w-[1288px] flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3.5">
        <a href="#profile" className="font-display text-[15px] font-medium text-ink no-underline">
          Кривошеев
        </a>
        <div className="flex flex-wrap items-center gap-x-5 gap-y-1">
          <nav aria-label="Разделы страницы" className="hidden gap-5 md:flex">
            {sections
              .filter((s) => s.nav)
              .map((s) => (
                <a key={s.id} href={`#${s.id}`} className="py-2.5 text-[14px] text-ink hover:text-accent">
                  {s.nav}
                </a>
              ))}
          </nav>
          <ThemeToggle />
          <a
            href={profile.resumePdfEn}
            download
            lang="en"
            aria-label="Resume in English (PDF)"
            className="py-2.5 text-[14px] font-medium text-slate hover:text-accent"
          >
            EN
          </a>
          <a
            href={profile.resumePdf}
            download
            className="rounded-full bg-accent px-4 py-2.5 text-[14px] font-medium text-on-accent hover:opacity-90"
          >
            Резюме PDF
          </a>
        </div>
      </div>
    </header>
  )
}
