import { Button } from 'components/common/button';
import { type TCategory } from 'types';
import { Categories } from './categories';
import { ReactComponent as SidebarCloseButton } from '../common/assets/arrow-down.svg';

import styles from './sidebar-menu.module.css';

type TNavigationProps = {
  categories: TCategory[];
};

export const SidebarMenu = ({ categories }: TNavigationProps) => (
  <nav className={styles.wrapper}>
    <Button btnClassName={styles.closeNavBtn}>
      <SidebarCloseButton />
    </Button>
    <Categories categories={categories} />
  </nav>
);
