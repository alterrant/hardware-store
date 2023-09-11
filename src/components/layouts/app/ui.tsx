import { Outlet } from 'react-router-dom';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app-layout.module.css';

export const AppLayout = () => (
  <>
    <header className={styles.header}>
      <Header />
    </header>

    <div className={styles.breadcrumbs}>breadcrumbs</div>
    <div className={styles.contentContainer}>
      <Outlet />
    </div>
    <div className={styles.footer}>
      <Footer />
    </div>
  </>
);
