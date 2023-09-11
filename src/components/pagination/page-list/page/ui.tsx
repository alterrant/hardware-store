import classNames from 'classnames';
import { type Dispatch } from 'react';

import styles from './page.module.scss';

type TPageProps = {
  handleClick: Dispatch<number>;
  page: number | string;
  isActive: boolean;
};

export const Page = ({ page, isActive, handleClick }: TPageProps) => {
  const isBreakLabel = typeof page === 'number';

  const pageClassName = classNames(
    styles.item,
    isActive && styles.active,
    !isBreakLabel && styles.breakLabel
  );

  const clickHandler = () => {
    if (isBreakLabel) handleClick(page);
  };

  return (
    <li onClick={clickHandler} className={pageClassName}>
      {page}
    </li>
  );
};
