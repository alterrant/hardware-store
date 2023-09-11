import { Logo } from 'components/logo';
import { NavBar, navBarConfig } from './nav-bar';
import { SignInBtn } from './sign-in-btn';
import burgerMenu from './assets/hamb.svg';

import styles from './header.module.scss';

type THeaderProps = {
  isAuthorized?: boolean;
};

export const Header = ({ isAuthorized = false }: THeaderProps) => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.burgerMenu} src={burgerMenu} alt="burger-menu" />

      <div className={styles.logoAndNavBar}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.navBar}>
          <NavBar navBarConfig={navBarConfig} />
        </div>
      </div>

      {isAuthorized ? (
        <div className={styles.userBar}>
          <div>userBar</div>
        </div>
      ) : (
        <div className={styles.signIn}>
          <SignInBtn />
        </div>
      )}
    </div>
  );
};
