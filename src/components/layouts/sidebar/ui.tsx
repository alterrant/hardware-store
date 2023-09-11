import { Outlet } from 'react-router-dom';

import { SidebarMenu } from 'components/sidebar/sidebar-menu';
import { useSidebarToggle } from 'components/sidebar/sidebar-toggle';
import { catalogCategories } from 'constants/catalog-categories';

import styles from './sidebar-layout.module.css';

export const SidebarLayout = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebarToggle();

  return (
    <div className={styles.wrapper}>
      <SidebarMenu categories={catalogCategories} />
      <Outlet context={{ isSidebarOpen, closeSidebar, openSidebar }} />
    </div>
  );
};
