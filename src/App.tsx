import { Cases } from './components/Cases'
import { Contacts } from './components/Contacts'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Principles } from './components/Principles'
import { Rail } from './components/Rail'
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
      <main id="main">
        <div id="rail-host" className="relative mx-auto max-w-[1120px] px-6">
          <Rail />
          <div className="lg:pl-40">
            <Section id="profile" num="01" label="Профиль" first>
              <Hero />
              <StatsBar />
            </Section>
            <Section id="projects" num="02" label="Проекты" title="Избранные кейсы">
              <Cases />
            </Section>
            <Section id="experience" num="03" label="Опыт" title="Остальной опыт">
              <Timeline />
            </Section>
            <Section id="stack" num="04" label="Стек" title="Стек">
              <StackSection />
            </Section>
            <Section id="approach" num="05" label="Подход" title="Как я работаю">
              <Principles />
            </Section>
          </div>
        </div>
        <Contacts />
      </main>
    </>
  )
}
