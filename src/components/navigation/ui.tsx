import { type TCategory } from 'types';
import { Categories } from './categories';

import styles from './navigation.module.css';

type TNavigationProps = {
  categories: TCategory[];
};

export const Navigation = ({ categories }: TNavigationProps) => (
  <nav className={styles.wrapper}>
    <Categories categories={categories} />
  </nav>
);
