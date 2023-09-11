import { Logo } from 'components/logo';
import { AuthButtonSection } from './auth-button-section';

import styles from './logo-and-auth-btn.module.scss';

export const LogoAndAuthBtn = () => (
  <div className={styles.wrapper}>
    <Logo />
    <AuthButtonSection />
  </div>
);
