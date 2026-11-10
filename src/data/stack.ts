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
      'PostgreSQL (схемы, RLS, SQL-миграции)',
      'Supabase (Edge Functions на Deno, Auth, Storage, Realtime)',
      'pgmq · pg_cron',
      'Next.js Server Actions',
      'Node.js',
      'Python',
      'FastAPI',
      'REST · WebSocket · SSE',
    ],
  },
  {
    title: 'AI и LLM',
    items: [
      'Anthropic Claude (tool use, prompt caching, Files API)',
      'RAG',
      'pgvector',
      'Гибридный поиск и rerank',
      'Voyage AI',
      'LangGraph',
      'MCP',
      'Vercel AI SDK',
      'Evals и LLM-as-judge',
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
