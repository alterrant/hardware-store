import classNames from 'classnames';

import styles from './category/category.module.scss';

export const getSubcategoriesClassName = (isCategoryOpened: boolean) =>
  classNames(styles.subcategories, isCategoryOpened && styles.subcategoriesVisible);

export const getArrowClassName = (isCategoryOpened: boolean) =>
  classNames(styles.arrow, isCategoryOpened && styles.rotate);

export const checkCurrentCategoryOpenStatus = (
  isCategoryOpen: boolean,
  openedId: number,
  currentCategoryId: number
) => isCategoryOpen && openedId === currentCategoryId;
