export const profile = {
  name: 'Никита Кривошеев',
  role: 'Full-stack разработчик',
  thesis:
    'Делаю продукты целиком — от схемы PostgreSQL и серверной логики до интерфейса и деплоя, включая AI-функции: RAG по документам, AI-агентов и evals. За последний год в одиночку сделал четыре продукта.',
  metaLine: 'TypeScript · React · Next.js · PostgreSQL · Supabase · Python · LLM / RAG · 5+ лет опыта · Астана',
  email: 'nik.krivosheyev@gmail.com',
  telegram: 'https://t.me/kniser',
  github: 'https://github.com/iamkniser',
  linkedin: 'https://www.linkedin.com/in/nikita-krivosheyev',
  resumePdf: '/Krivosheyev_Nikita_resume_fullstack.pdf',
  resumePdfFrontend: '/Krivosheyev_Nikita_resume.pdf',
  resumePdfEn: '/Nikita_Krivosheyev_CV.pdf',
}

export interface OwnershipRow {
  name: string
  commits: string
  pct: number
}

export const ownership: OwnershipRow[] = [
  { name: 'АСБК', commits: '48 / 48', pct: 100 },
  { name: 'Chatera', commits: '1225 / 1264', pct: 97 },
  { name: 'Медиа-платформа', commits: '72 / 72', pct: 100 },
  { name: 'InstFarm v2', commits: '119 / 119', pct: 100 },
]
