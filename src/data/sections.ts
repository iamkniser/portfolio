export interface SectionDef {
  id: string
  num: string
  label: string
  /** Текст якорной ссылки в хедере; отсутствует — в навигацию не выводится */
  nav?: string
}

export const sections: SectionDef[] = [
  { id: 'profile', num: '01', label: 'Профиль' },
  { id: 'projects', num: '02', label: 'Проекты', nav: 'Проекты' },
  { id: 'experience', num: '03', label: 'Опыт', nav: 'Опыт' },
  { id: 'stack', num: '04', label: 'Стек', nav: 'Стек' },
  { id: 'approach', num: '05', label: 'Подход', nav: 'Подход' },
  { id: 'contacts', num: '06', label: 'Контакты', nav: 'Контакты' },
]
