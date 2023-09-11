import { NavLink } from 'react-router-dom';

import styles from './nav-bar-item.module.scss';

export const NavBarItem = ({ text, link, imgSrc }: TNavBarItem) => (
  <NavLink to={link} className={styles.link}>
    {imgSrc && <img src={imgSrc} alt={text} />}
    {text}
  </NavLink>
);
