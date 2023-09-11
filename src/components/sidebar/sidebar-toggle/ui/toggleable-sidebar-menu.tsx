import React from 'react';
import classNames from 'classnames';

import { catalogCategories } from 'constants/catalog-categories';
import { SidebarMenu } from '../../sidebar-menu';
import { CloseSidebarBtn } from '../../sidebar-menu/close-sidebar-btn';

import styles from './sidebar-toggle.module.css';

type TToggleableSidebarMenuProps = {
  isSidebarOpen: boolean;
  closeSidebar: () => void;
};

export const ToggleableSidebarMenu = ({
  isSidebarOpen,
  closeSidebar,
}: TToggleableSidebarMenuProps) => {
  const sidebarMenuClassName = classNames(
    styles.sidebarMenu,
    isSidebarOpen ? styles.sidebarMenuVisible : styles.sidebarMenuHidden
  );

  return (
    <div className={sidebarMenuClassName}>
      <SidebarMenu
        closeSidebarBtn={<CloseSidebarBtn handleCloseSideBar={closeSidebar} />}
        categories={catalogCategories}
      />
    </div>
  );
};
