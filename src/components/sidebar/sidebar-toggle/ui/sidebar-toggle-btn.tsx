import React from 'react';

import { Button } from 'components/common/button';
import { ReactComponent as SidebarSVG } from '../assets/mdi_hamburger-menu.svg';

import styles from './sidebar-toggle.module.css';

type TSidebarToggleButtonProps = {
  openSidebar: () => void;
};

export const SidebarToggleButton = ({ openSidebar }: TSidebarToggleButtonProps) => (
  <Button onClick={openSidebar} btnClassName={styles.btn}>
    <SidebarSVG />
  </Button>
);
