import { NavLink } from 'react-router-dom';

import { type TCatalogItem } from './types';

import styles from './catalog-item.module.scss';

type TCatalogItemProps = Omit<TCatalogItem, 'id'>;

export const CatalogItem = ({ imgSrc, description, link }: TCatalogItemProps) => (
  <NavLink to={link} className={styles.wrapper}>
    <img className={styles.img} src={imgSrc} alt={description} />
    <p>{description}</p>
  </NavLink>
);
