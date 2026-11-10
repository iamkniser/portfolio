import { Career } from './components/Career'
import { Cases } from './components/Cases'
import { Contacts } from './components/Contacts'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Principles } from './components/Principles'
import { StackSection } from './components/StackSection'
import { StatsBar } from './components/StatsBar'
import { Timeline } from './components/Timeline'
import { Section } from './ui/Section'

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded focus:border focus:border-line focus:bg-surface focus:px-4 focus:py-2"
      >
        Пропустить навигацию
      </a>
      <Header />
      <main id="main" className="mx-auto max-w-[1288px] px-6">
        <Section id="profile" num="01" label="Профиль" variant="hero">
          <Hero />
          <StatsBar />
        </Section>
        <Section
          id="projects"
          num="02"
          label="Проекты"
          title="Проекты"
          variant="top"
          note="у каждого кейса короткое демо ключевой механики"
        >
          <Cases />
        </Section>
        <Section id="experience" num="03" label="Опыт" title="Карьера" variant="split">
          <Career />
          <Timeline />
        </Section>
        <Section id="stack" num="04" label="Стек" title="Стек" variant="split">
          <StackSection />
        </Section>
        <Section id="approach" num="05" label="Подход" title="Как я работаю" variant="split">
          <Principles />
        </Section>
        <Contacts />
      </main>
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-[1288px] flex-wrap justify-between gap-2 px-6 py-6 font-mono text-xs text-slate">
          <span>© 2026 Никита Кривошеев</span>
          <span>krivosheyev.dev</span>
        </div>
      </footer>
    </>
  )
}
