export const profile = {
  name: 'Никита Кривошеев',
  role: 'Full-stack разработчик · AI\u00a0в\u00a0продакшне',
  status: 'Открыт к предложениям · удалённо или Астана',
  thesis:
    'Делаю продукт от схемы БД до релиза и встраиваю в него AI, которому можно доверять: RAG с проверкой прав, агенты с подтверждением человеком, evals вместо «вроде работает». 6 лет в коммерческой разработке, с 2022 года — ведущий фронтенд-разработчик в Galamat Tech.',
  metaLine: 'TypeScript · React · Next.js · PostgreSQL · Supabase · Python · LLM / RAG',
  email: 'nik.krivosheyev@gmail.com',
  telegram: 'https://t.me/kniser',
  linkedin: 'https://www.linkedin.com/in/nikita-krivosheyev',
  resumePdf: '/Krivosheyev_Nikita_resume_fullstack.pdf',
  resumePdfEn: '/Nikita_Krivosheyev_CV.pdf',
}

export interface ProductLayer {
  name: string
  tech: string
  /** Выделяется акцентом: главный слой позиционирования */
  highlight?: boolean
}

/** Слои одного продукта в hero, сверху вниз (появляются снизу вверх) */
export const productLayers: ProductLayer[] = [
  { name: 'Релиз', tech: 'Vercel · Docker · GitLab CI · Sentry' },
  { name: 'Интерфейс', tech: 'React · Next.js · realtime · WebCodecs' },
  { name: 'AI', tech: 'RAG · агенты · evals · Python / FastAPI', highlight: true },
  { name: 'Сервер', tech: 'Server Actions · Edge Functions · pgmq' },
  { name: 'Данные', tech: 'PostgreSQL · миграции · RLS · pgvector' },
]

export const layersNote = 'Три продукта подряд — все слои одним человеком.'

/** Подпись под схемой: противовес образу «чистого одиночки» */
export const teamNote = 'Работал и в командах из 6, 8 и 20+ человек: код-ревью, архитектурные конвенции.'
