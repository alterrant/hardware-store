import { Outlet } from 'react-router-dom';

import { SidebarMenu } from 'components/sidebar-menu';
import { catalogCategories } from 'constants/catalog-categories';

import styles from './sidebar-layout.module.css';

export const SidebarLayout = () => (
  <div className={styles.wrapper}>
    <SidebarMenu categories={catalogCategories} />
    <Outlet />
  </div>
);
