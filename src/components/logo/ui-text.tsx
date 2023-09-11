import { NavLink } from 'react-router-dom';

import { LOGO_LINK } from './config';

import styles from './logo.module.scss';

export const Logo = () => (
  <NavLink to={LOGO_LINK} className={styles.text}>
    LogoType
  </NavLink>
);
