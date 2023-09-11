import React from 'react';

import { Button } from 'components/common/button';
import { ReactComponent as SidebarCloseButton } from 'components/common/assets/arrow-down.svg';

import styles from './close-sidebar-btn.module.scss';

type TNavigationProps = {
  handleCloseSideBar: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export const CloseSidebarBtn = ({ handleCloseSideBar }: TNavigationProps) => (
  <Button btnClassName={styles.closeNavBtn} onClick={handleCloseSideBar}>
    <SidebarCloseButton />
  </Button>
);
