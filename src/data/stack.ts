export interface StackGroup {
  title: string
  items: string[]
}

export const stackGroups: StackGroup[] = [
  {
    title: 'Frontend',
    items: [
      'TypeScript',
      'React 19',
      'Next.js 15/16 (App Router, SSR/RSC)',
      'Redux Toolkit',
      'RTK Query',
      'TanStack Query',
      'Tailwind CSS 4',
      'shadcn/ui',
      'Radix UI',
      'Mantine',
      'react-hook-form',
      'Zod',
      'TipTap',
      'Recharts',
      'TanStack Table',
      'dnd-kit',
      'WebSocket',
      'Vite',
    ],
  },
  {
    title: 'Backend и данные',
    items: [
      'Supabase (PostgreSQL, RLS, Edge Functions на Deno, Auth, Storage, Realtime)',
      'Node.js',
      'REST',
      'SQL-миграции',
    ],
  },
  {
    title: 'Инфраструктура и процессы',
    items: [
      'Docker',
      'GitLab CI',
      'Vercel',
      'Sentry',
      'Turborepo',
      'Feature-Sliced Design',
      'Conventional Commits',
      'ESLint / Prettier / Husky',
    ],
  },
]
