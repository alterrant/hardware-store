import { type ReactNode } from 'react';

import { type TCategory } from 'types';
import { Categories } from './categories';

import styles from './sidebar-menu.module.css';

type TNavigationProps = {
  categories: TCategory[];
  closeSidebarBtn?: ReactNode;
};

export const SidebarMenu = ({ categories, closeSidebarBtn }: TNavigationProps) => (
  <nav className={styles.wrapper}>
    {closeSidebarBtn}
    <Categories categories={categories} />
  </nav>
);
