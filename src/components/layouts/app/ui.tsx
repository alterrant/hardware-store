import { Outlet } from 'react-router-dom';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app-layout.module.css';

// type TAppLayoutProps = {};

export const AppLayout = () => (
  <div>
    <header className={styles.header}>
      <Header />
    </header>

    <div className={styles.breadcrumbs}>breadcrumbs</div>

    <Outlet />

    <Footer />
  </div>
);
