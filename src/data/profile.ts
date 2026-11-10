export const profile = {
  name: 'Никита Кривошеев',
  role: 'Full-stack разработчик · AI\u00a0в\u00a0продакшне',
  status: 'Открыт к предложениям · удалённо или Астана',
  thesis:
    'Делаю продукт от схемы БД до релиза и встраиваю в него AI, которому можно доверять: RAG с проверкой прав, агенты с подтверждением человеком, evals вместо «вроде работает». 6 лет в коммерческой разработке, с 2022 года — ведущий фронтенд-разработчик в Galamat Tech.',
  metaLine: 'TypeScript · React · Next.js · PostgreSQL · Supabase · Python · LLM / RAG',
  email: 'nik.krivosheyev@gmail.com',
  telegram: 'https://t.me/kniser',
  github: 'https://github.com/iamkniser',
  linkedin: 'https://www.linkedin.com/in/nikita-krivosheyev',
  resumePdf: '/Krivosheyev_Nikita_resume_fullstack.pdf',
  resumePdfEn: '/Nikita_Krivosheyev_CV.pdf',
}

export interface OwnershipRow {
  name: string
  /** Уточнение зоны, если проект не целиком мой */
  scope?: string
  commits: string
  pct: number
}

export const ownership: OwnershipRow[] = [
  { name: 'Природоохранная организация', commits: '48 / 48', pct: 100 },
  { name: 'Медиа-платформа', commits: '72 / 72', pct: 100 },
  { name: 'InstFarm v2', commits: '119 / 119', pct: 100 },
  { name: 'Chatera', scope: 'фронтенд', commits: '1225 / 1264', pct: 97 },
]

/** Подпись под графиком: противовес образу «чистого одиночки» */
export const teamNote = 'Работал и в командах из 6, 8 и 20+ человек: код-ревью, архитектурные конвенции.'
