export interface SectionDef {
  id: string
  num: string
  label: string
  /** Текст якорной ссылки в хедере; отсутствует — в навигацию не выводится */
  nav?: string
  /** false — секция вне рельса (полноширинные «Контакты») */
  rail: boolean
}

export const sections: SectionDef[] = [
  { id: 'profile', num: '01', label: 'Профиль', rail: true },
  { id: 'projects', num: '02', label: 'Проекты', nav: 'Проекты', rail: true },
  { id: 'experience', num: '03', label: 'Опыт', nav: 'Опыт', rail: true },
  { id: 'stack', num: '04', label: 'Стек', nav: 'Стек', rail: true },
  { id: 'approach', num: '05', label: 'Подход', nav: 'Подход', rail: true },
  { id: 'contacts', num: '06', label: 'Контакты', nav: 'Контакты', rail: false },
]
