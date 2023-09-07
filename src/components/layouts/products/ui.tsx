import { type ReactNode } from 'react';

import { Navigation } from 'components/navigation';
import { catalogCategories } from 'constants/catalog-categories';

import styles from './products-layout.module.css';

type TProductsLayoutProps = {
  children: ReactNode;
};

export const ProductsLayout = ({ children }: TProductsLayoutProps) => (
  <main className={styles.wrapper}>
    <Navigation categories={catalogCategories} />
    <section className={styles.content}>{children}</section>
  </main>
);

// вариант с outlet
/* export const ProductsLayout = () => (
  <main className={styles.wrapper}>
    <Navigation categories={catalogCategories} />
    <section className={styles.productsWrapper}>
      <Outlet />
    </section>
  </main>
); */
