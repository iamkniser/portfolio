export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '6 лет', label: 'в коммерческой разработке, с 2020 года' },
  { value: '3', label: 'продукта в одиночку: от схемы БД до деплоя' },
  { value: '80', label: 'eval-кейсов в двух AI-системах, включая prompt injection' },
  { value: '50–70%', label: 'экономии input-токенов агента за счёт prompt caching' },
]
