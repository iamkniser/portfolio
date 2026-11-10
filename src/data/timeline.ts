export interface TimelineItem {
  period: string
  name: string
  text: string
}

/** Проекты Galamat Tech, не вошедшие в подробные кейсы */
export const timeline: TimelineItem[] = [
  {
    period: '2026',
    name: 'Traction',
    text: 'SaaS для управления целями команды. Переписал модули кодовой базы, сгенерированной ИИ, фронт и бэк; архитектура FSD на ~35 000 строк, устранение гонок автосохранения.',
  },
  {
    period: '2023 · 2025–2026',
    name: 'HRCM',
    text: 'B2B-платформа HR-оценки. Раздел аналитики, генерация PDF-отчётов; повторно привлечён на рефакторинг аутентификации — cookies, middleware, тихий refresh токена через mutex.',
  },
  {
    period: '2024–2025',
    name: 'Sabaq Online',
    text: 'Платформа подготовки к ЕНТ, команда 6 человек, 55% коммитов. Монорепозиторий на Turborepo по FSD, кабинет ученика и админка для пяти ролей, загрузка видео в S3 и G-Core Streaming.',
  },
  {
    period: '2024–2025',
    name: 'Dauys Chat Bots',
    text: 'SaaS-конструктор чат-ботов, команда 20+ разработчиков. Аналитика на Recharts, сквозной сценарий оплаты, интеграции каналов и Bitrix24.',
  },
  {
    period: '2024',
    name: 'Chatera Admin',
    text: 'Админ-панель платформы чат-ботов. Разработал с нуля, 76% коммитов: Next.js App Router, биллинг и подписки, загрузка в S3 по signed URL.',
  },
  {
    period: '2023–2024',
    name: 'Leonardo LMS',
    text: 'Платформа дистанционного обучения, команда 8 человек, 791 из 2016 коммитов. Конструктор учебного контента, RBAC, интеграция Zoom Meeting SDK.',
  },
]
