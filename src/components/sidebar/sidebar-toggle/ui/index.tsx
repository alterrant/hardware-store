import React from 'react';

import { SidebarToggleButton } from './sidebar-toggle-btn';
import { ToggleableSidebarMenu } from './toggleable-sidebar-menu';
import { type TSidebarToggleStatus } from '../types';
import { ToggleClickOutside } from '../../../common/toggle-click-outside';
// import { useSidebarToggle } from '../hooks';

type TSidebarToggleProps = TSidebarToggleStatus;

export const SidebarToggle = ({
  isSidebarOpen,
  closeSidebar,
  openSidebar,
}: TSidebarToggleProps) => {
  /* export const SidebarToggle = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useSidebarToggle(); */

  return (
    <ToggleClickOutside isOpen={isSidebarOpen} handleClose={closeSidebar}>
      <div>
        <ToggleableSidebarMenu isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <SidebarToggleButton openSidebar={openSidebar} />
      </div>
    </ToggleClickOutside>
  );
};
