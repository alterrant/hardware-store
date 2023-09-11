import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

import styles from './subcategory.module.scss';

type TSubcategoryProps = {
  subcategoryName: string;
  link: string;
};

export const Subcategory = ({ subcategoryName, link }: TSubcategoryProps) => (
  <NavLink
    to={link}
    className={({ isActive }) => classNames(styles.link, isActive && styles.activeLink)}>
    <p>{subcategoryName}</p>
  </NavLink>
);
