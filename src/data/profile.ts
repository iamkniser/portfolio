export const profile = {
  name: 'Никита Кривошеев',
  role: 'Ведущий фронтенд-разработчик',
  thesis:
    'Делаю SaaS-продукты целиком — от схемы базы данных до продакшна. Последние три проекта вёл в одиночку.',
  metaLine: 'React · Next.js · TypeScript · Supabase · 5+ лет опыта · Астана',
  email: 'nik.krivosheyev@gmail.com',
  telegram: 'https://t.me/kniser',
  github: 'https://github.com/iamkniser',
  linkedin: 'https://www.linkedin.com/in/nikita-krivosheyev',
  resumePdf: '/Krivosheyev_Nikita_resume.pdf',
}

export interface OwnershipRow {
  name: string
  commits: string
  pct: number
}

export const ownership: OwnershipRow[] = [
  { name: 'Chatera', commits: '1225 / 1264', pct: 97 },
  { name: 'Медиа-платформа', commits: '72 / 72', pct: 100 },
  { name: 'InstFarm v2', commits: '119 / 119', pct: 100 },
]
