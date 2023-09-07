import { type TCatalogItem } from 'components/catalog-items/catalog-item';
import catalogItem1 from './assets/Rectangle 55.png';
import catalogItem2 from './assets/Rectangle 56.png';
import catalogItem3 from './assets/Rectangle 57.png';
import catalogItem4 from './assets/Rectangle 58.png';
import catalogItem5 from './assets/Rectangle 59.png';
import catalogItem6 from './assets/Rectangle 60.png';
import catalogItem7 from './assets/Rectangle 61.png';
import catalogItem8 from './assets/Rectangle 62.png';

export const catalog: TCatalogItem[] = [
  { id: 0, imgSrc: catalogItem1, description: 'Гипсокартон и комплектующие', link: 'subCategory1' },
  { id: 1, imgSrc: catalogItem2, description: 'Строительные смеси', link: 'subCategory2' },
  { id: 2, imgSrc: catalogItem3, description: 'Краски и эмали', link: 'subCategory3' },
  { id: 3, imgSrc: catalogItem4, description: 'Пены, герметики', link: 'subCategory4' },
  { id: 4, imgSrc: catalogItem5, description: 'Картон укрывочный, плёнка', link: 'subCategory5' },
  { id: 5, imgSrc: catalogItem6, description: 'Пиломатериалы', link: 'subCategory6' },
  { id: 6, imgSrc: catalogItem7, description: 'Блоки, цемент, кирпич', link: 'subCategory7' },
  { id: 7, imgSrc: catalogItem8, description: 'Древесно-плитные материалы', link: 'subCategory8' },
];

export const TITLE = 'Каталог';
