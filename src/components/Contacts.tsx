import { profile } from '../data/profile'

const links = [
  { label: 'Telegram', href: profile.telegram, external: true },
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Резюме (PDF)', href: profile.resumePdf, download: true },
  { label: 'Resume in English (PDF)', href: profile.resumePdfEn, download: true, lang: 'en' },
]

const row = 'flex min-h-12 items-center justify-between gap-4 rounded-xl px-[18px]'

export function Contacts() {
  return (
    <section
      id="contacts"
      aria-labelledby="contacts-title"
      className="flex scroll-mt-20 flex-wrap items-end justify-between gap-10 border-t border-ink pb-28 pt-24"
    >
      <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-4">
        <h2 id="contacts-title" className="font-display text-[clamp(32px,4.6vw,60px)] font-medium leading-[1.08]">
          Ищу команду, где AI&nbsp;— часть продукта
        </h2>
        <p className="text-[17px] text-slate">
          Full-stack или фронтенд. Приоритет — удалённая работа; в Астане возможен офис или гибрид.
        </p>
      </div>
      <div className="flex min-w-0 flex-[0_1_360px] flex-col gap-2.5">
        <a href={`mailto:${profile.email}`} className={`${row} bg-accent font-medium text-paper hover:opacity-90`}>
          <span className="min-w-0 truncate">{profile.email}</span>
          <span aria-hidden="true">→</span>
        </a>
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
            {...(l.download ? { download: true } : {})}
            lang={l.lang}
            className={`${row} border border-line bg-surface text-ink hover:border-accent`}
          >
            {l.label}
            <span aria-hidden="true">{l.download ? '↓' : '→'}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
