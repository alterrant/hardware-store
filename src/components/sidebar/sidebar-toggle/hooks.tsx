import { useState } from 'react';

import { type TSidebarToggleStatus } from './types';
import { INITIAL_SIDEBAR_OPEN_STATUS } from './config';

export const useSidebarToggle: () => TSidebarToggleStatus = () => {
  const [isSidebarOpen, setSidebarOpenStatus] = useState<boolean>(INITIAL_SIDEBAR_OPEN_STATUS);

  const closeSidebar = () => {
    setSidebarOpenStatus(false);
  };
  const openSidebar = () => {
    setSidebarOpenStatus(true);
  };

  return { isSidebarOpen, closeSidebar, openSidebar };
};
