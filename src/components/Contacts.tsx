import { profile } from '../data/profile'

const links = [
  { label: 'Telegram', href: profile.telegram, external: true },
  { label: 'GitHub', href: profile.github, external: true },
  { label: 'LinkedIn', href: profile.linkedin, external: true },
  { label: 'Скачать резюме (PDF)', href: profile.resumePdf, download: true },
]

/** Единственный инвертированный блок страницы — визуальная точка */
export function Contacts() {
  return (
    <section id="contacts" className="on-accent rail-section mt-16 bg-accent text-paper lg:mt-24">
      <div className="mx-auto max-w-[1120px] px-6 py-16 lg:py-24 lg:pl-40">
        {/* Прозрачность ниже 0.75 роняет контраст на акцентном фоне ниже 4.5:1 */}
        <p className="font-mono text-xs font-medium uppercase tracking-[0.02em] opacity-80">
          06 / Контакты
        </p>
        <h2 className="mt-4 font-display text-[26px] font-medium leading-[1.2] lg:text-[34px] lg:leading-[1.15]">
          Открыт к предложениям
        </h2>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.6] opacity-90">
          Ищу позицию senior-фронтенд-разработчика. Приоритет — удалённая работа; в Астане возможен офис или гибрид.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block font-mono text-[18px] font-medium underline underline-offset-4 hover:opacity-80 lg:text-[24px]"
        >
          {profile.email}
        </a>
        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              {...(l.download ? { download: true } : {})}
              className="text-[15px] font-medium underline underline-offset-4 hover:opacity-80"
            >
              {l.label}
            </a>
          ))}
        </div>
        <p className="mt-16 font-mono text-xs opacity-80">© 2026 Никита Кривошеев</p>
      </div>
    </section>
  )
}
