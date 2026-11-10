import { profile } from '../data/profile'
import { ProductLayers } from './ProductLayers'

export function Hero() {
  const [firstName, ...rest] = profile.name.split(' ')

  return (
    <div className="flex flex-wrap items-end gap-14 pb-[72px] pt-24">
      {/* basis 480, а не 560 как в артефакте: иначе на 1024–1100px схема уезжает под текст */}
      <div className="flex min-w-0 flex-[999_1_480px] flex-col gap-7">
        <p className="flex items-center gap-2.5 font-mono text-[13px] text-slate">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.status}
        </p>
        <h1 className="font-display text-[clamp(40px,6.4vw,84px)] font-medium leading-[1.02] tracking-[-0.02em]">
          {firstName}
          <br />
          {rest.join(' ')}
        </h1>
        <p className="font-display text-[clamp(18px,2vw,24px)] text-accent">{profile.role}</p>
        <p className="max-w-[640px] text-[18px] leading-[1.6]">{profile.thesis}</p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex min-h-12 items-center rounded-full bg-ink px-[22px] font-medium text-paper hover:opacity-90"
          >
            Смотреть проекты
          </a>
          <a
            href={profile.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 items-center rounded-full border border-ink px-[22px] font-medium text-ink hover:border-accent hover:text-accent"
          >
            Написать в Telegram
          </a>
        </div>
        <p className="font-mono text-[13px] text-slate">{profile.metaLine}</p>
      </div>
      {/* Фиксированная ширина вместо basis 360 из артефакта: при 360 строки стека переносятся и карточка вытягивается */}
      <div className="w-full min-w-0 max-w-[520px] lg:w-[440px] lg:flex-none">
        <ProductLayers />
      </div>
    </div>
  )
}
