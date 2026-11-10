import { Github, Linkedin, Mail, Send } from 'lucide-react'
import { profile } from '../data/profile'
import { OwnershipChart } from './OwnershipChart'

const socials = [
  { label: 'GitHub', href: profile.github, Icon: Github },
  { label: 'LinkedIn', href: profile.linkedin, Icon: Linkedin },
  { label: 'Почта', href: `mailto:${profile.email}`, Icon: Mail },
]

export function Hero() {
  return (
    <div className="grid gap-12 pt-4 lg:grid-cols-12 lg:items-center lg:pt-14">
      <div className="lg:col-span-7">
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 text-[14px] font-medium">
          <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          {profile.status}
        </p>
        <h1 className="font-display text-[34px] font-semibold leading-[1.1] lg:text-[56px] lg:leading-[1.05]">
          {profile.name}
          <span className="mt-3 block text-[22px] font-medium leading-[1.2] text-accent lg:text-[30px]">
            {profile.role}
          </span>
        </h1>
        <p className="mt-6 max-w-[62ch] text-[18px] leading-[1.6] text-slate lg:text-[20px]">
          {profile.thesis}
        </p>
        <p className="mt-6 font-mono text-[13px] font-medium tracking-[0.02em] text-slate">
          {profile.metaLine}
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href={profile.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-2 rounded bg-accent px-5 text-[15px] font-medium text-paper hover:opacity-90"
          >
            <Send size={16} aria-hidden="true" />
            Написать в Telegram
          </a>
          <a
            href={profile.resumePdf}
            download
            className="inline-flex h-11 items-center rounded border border-line px-5 text-[15px] font-medium hover:border-accent"
          >
            Резюме (PDF)
          </a>
          <a
            href={profile.resumePdfEn}
            download
            lang="en"
            className="text-[15px] font-medium text-slate underline underline-offset-4 hover:text-accent"
          >
            English CV
          </a>
          <div className="flex items-center gap-1">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="grid h-10 w-10 place-items-center rounded-full text-slate hover:text-accent"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="lg:col-span-5">
        <OwnershipChart />
      </div>
    </div>
  )
}
