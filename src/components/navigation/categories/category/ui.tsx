import classNames from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { ReactComponent as ArrowRight } from 'components/assets/short-right-arrow.svg';
import { type TCategory } from 'types';
import { INITIAL_OPENED_STATUS } from './config';
import { Subcategories } from '../../subcategories';

import styles from './category.module.css';

type TCategoriesProps = {
  category: TCategory;
};

export const Category = ({ category }: TCategoriesProps) => {
  const [isOpen, setOpenStatus] = useState<boolean>(INITIAL_OPENED_STATUS);

  const subcategoriesClassName = classNames(
    styles.subcategories,
    isOpen && styles.subcategoriesVisible
  );

  const arrowClassName = classNames(styles.arrow, isOpen && styles.rotate);

  const toggleOpenedStatusHandler = () => {
    setOpenStatus(!isOpen);
  };

  return (
    <>
      <NavLink
        to={category.categoryName}
        end
        className={({ isActive }) => classNames(styles.wrapper, isActive && styles.active)}
        onClick={toggleOpenedStatusHandler}>
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
