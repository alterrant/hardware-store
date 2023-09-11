import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowRight } from 'components/common/assets/short-right-arrow.svg';
import { type TCategory } from 'types';
import { Subcategories } from '../../subcategories';
import { getArrowClassName, getSubcategoriesClassName } from '../utils';

import styles from './category.module.css';

type TCategoriesProps = {
  category: TCategory;
  isCategoryOpen: boolean;
  toggleOpenStatus: (categoryId: number) => void;
};

export const Category = ({ category, isCategoryOpen, toggleOpenStatus }: TCategoriesProps) => {
  const subcategoriesClassName = getSubcategoriesClassName(isCategoryOpen);
  const arrowClassName = getArrowClassName(isCategoryOpen);

  return (
    <>
      <NavLink
        to={category.categoryName}
        end
        className={({ isActive }) => classNames(styles.wrapper, isActive && styles.active)}
        onClick={() => {
          toggleOpenStatus(category.id);
        }}>
        <div className={styles.clause}>
          <p>{category.categoryName}</p>
          <ArrowRight className={arrowClassName} />
        </div>
      </NavLink>
      <div className={subcategoriesClassName}>
        <Subcategories subcategories={category.subcategories} />
      </div>
    </>
  );
};