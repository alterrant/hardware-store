import { type TSiteGuideColumnConfig } from './site-guide/site-guide-column';

export const siteGuideColumns: TSiteGuideColumnConfig[] = [
  {
    id: 0,
    title: 'О проекте',
    paragraphs: [
      { id: 0, link: '#', name: 'О проекте' },
      { id: 1, link: '#', name: 'Заголовок' },
      { id: 2, link: '#', name: 'Заголовок' },
    ],
  },
  {
    id: 1,
    title: 'Каталог',
    paragraphs: [
      { id: 0, link: '#', name: 'Изоляционные материалы' },
      { id: 1, link: '#', name: 'Кровля и водосточные системы' },
      { id: 2, link: '#', name: 'Пиломатериалы' },
      { id: 3, link: '#', name: 'Металлопрокат' },
      { id: 4, link: '#', name: 'Общестроительные материалы' },
    ],
  },
  { id: 2, title: 'Категория', paragraphs: [{ id: 0, link: '#', name: 'Заголовок' }] },
  {
    id: 3,
    title: 'Помощь',
    paragraphs: [
      { id: 0, link: '#', name: 'F.A.Q. (часто задаваемые вопросы)' },
      { id: 1, link: '#', name: 'Пользовательское соглашение' },
      { id: 2, link: '#', name: 'Поддержка пользователей' },
      { id: 3, link: '#', name: 'Правила возврата' },
      { id: 4, link: '#', name: 'Политика конфиденциальности' },
    ],
  },
];
