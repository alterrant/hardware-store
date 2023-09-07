import shoppingBag from './assets/gg_shopping-bag.svg';

export const navBarConfig: TNavBarItem[] = [
  {
    id: 0,
    text: 'Каталог',
    link: 'catalog',
    imgSrc: shoppingBag,
  },
  { id: 1, text: 'О продукте', link: 'about-us' },
  { id: 2, text: 'Помощь', link: 'help' },
];
