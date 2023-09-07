import { type TCategory, type TSubcategory } from 'types';

const subcategories: TSubcategory[] = [
  { id: 0, subcategoryName: 'Штукатурка' },
  { id: 1, subcategoryName: 'Шпатлёвка' },
  { id: 2, subcategoryName: 'Клей для плитки' },
  { id: 3, subcategoryName: 'Самонивелиры, стяжки' },
  { id: 4, subcategoryName: 'Клей для утеплителя' },
  { id: 5, subcategoryName: 'Декоративная штукатурка' },
  { id: 6, subcategoryName: 'Клей для блока, кирпича' },
  { id: 7, subcategoryName: 'Клей для гипсокартона' },
  { id: 8, subcategoryName: 'Гидроизоляция' },
  { id: 9, subcategoryName: 'Цемент, керамзит, песок' },
  { id: 10, subcategoryName: 'Алебастр, гипс, известь' },
  { id: 11, subcategoryName: 'Ремонтные смеси' },
  { id: 12, subcategoryName: 'Фуга' },
  { id: 13, subcategoryName: 'Добавки для смесей' },
  { id: 14, subcategoryName: 'Мешки для мусора' },
];

export const catalogCategories: TCategory[] = [
  {
    id: 0,
    categoryName: 'Гипсокартон и комплектующие',
    subcategories,
  },
  {
    id: 1,
    categoryName: 'Строительные смеси',
    subcategories,
  },
  {
    id: 2,
    categoryName: 'Утеплители и комплектующие1',
    subcategories,
  },
  {
    id: 3,
    categoryName: 'Блоки, цемент, кирпич1',
    subcategories,
  },
  {
    id: 4,
    categoryName: 'Грунтовки1',
    subcategories,
  },
  {
    id: 5,
    categoryName: 'Краски и эмали1',
    subcategories,
  },
  {
    id: 6,
    categoryName: 'Утеплители и комплектующие2',
    subcategories,
  },
  {
    id: 7,
    categoryName: 'Блоки, цемент, кирпич2',
    subcategories,
  },
  {
    id: 8,
    categoryName: 'Грунтовки2',
    subcategories,
  },
  {
    id: 9,
    categoryName: 'Краски и эмали2',
    subcategories,
  },
];
