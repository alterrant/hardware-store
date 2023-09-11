import { type ReactNode } from 'react';

import { type TCategory } from 'types';
import { Categories } from './categories';

import styles from './sidebar-menu.module.css';

type TNavigationProps = {
  categories: TCategory[];
  closeSidebarBtn?: ReactNode;
  isPreviousRoute?: boolean;
};

export const SidebarMenu = ({ categories, closeSidebarBtn, isPreviousRoute }: TNavigationProps) => (
  <nav className={styles.wrapper}>
    {closeSidebarBtn}
    <Categories isPreviousRoute={isPreviousRoute} categories={categories} />
  </nav>
);
