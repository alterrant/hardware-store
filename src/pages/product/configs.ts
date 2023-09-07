import { type TCatalogItem } from 'components/catalog-items/catalog-item';
import { type TCharacteristic } from 'types/product';
import catalogItem1 from './assets/Rectangle 29.png';
import catalogItem2 from './assets/Rectangle 31.svg';
import catalogItem3 from './assets/Rectangle 33.svg';
import productImg from './assets/image 1.png';

const characteristics: TCharacteristic[] = [
  { id: 0, prop: 'Применение', value: 'внутри помещения, снаружи помещения' },
  {
    id: 1,
    prop: 'Область применения',
    value: 'влажные помещения, потолки, стены, сухие помещения',
  },
  { id: 2, prop: 'Вяжущая основа', value: 'цементная' },
  { id: 3, prop: 'Машинное', value: 'да' },
];

const catalog: TCatalogItem[] = [
  {
    id: 0,
    imgSrc: catalogItem1,
    description: 'Портландцемент ПЦ 500 Д 0 ЦЕМ I 42,5H, 25 кг',
    link: 'subCategory1',
  },
  {
    id: 1,
    imgSrc: catalogItem2,
    description: 'Клей для плитки Тайфун Люкс Плюс 25 кг',
    link: 'subCategory2',
  },
  {
    id: 2,
    imgSrc: catalogItem3,
    description: 'Стеклосетка штукатурная\n' + '5х5 мм 160 г/м2',
    link: 'subCategory3',
  },
];

export const product = {
  id: 0,
  title: 'Штукатурка цементная Ceresit, 25 кг',
  category: 'Цементная штукатурка',
  sku: 31120,
  img: productImg,
  description: `Предназначена для ремонта и подготовки бетонных,
  кирпичных и т.п. Оснований под отделку внутри и снаружи зданий.
  Адгезия > 0,3 МПа. Расход около 1,8 кг/м.кв. на 1 мм толщ. слоя при
  выравн. и оштукатур., около 1,8кг/дм.кв. объема при заполн. трещин`,
  characteristics,
  similarProducts: catalog,
};
