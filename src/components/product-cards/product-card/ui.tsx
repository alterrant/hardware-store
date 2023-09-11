import { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import { ProductCardCharacteristics } from './charecteristics';
import { type TProductCardInfo } from './types';

import styles from './product-card.module.scss';

type TProductCardProps = Omit<TProductCardInfo, 'id' | 'isAvailable'> & {
  children: ReactNode;
};

export const ProductCard = ({
  imgSrc,
  title,
  productCharacteristics,
  link,
  children,
}: TProductCardProps) => (
  <NavLink to={link} className={styles.wrapper}>
    <img src={imgSrc} alt={title} />
    <div className={styles.container}>
      <div className={styles.description}>
        <p className={styles.title}>{title}</p>
        <ProductCardCharacteristics characteristics={productCharacteristics} />
      </div>
      {children}
    </div>
  </NavLink>
);
