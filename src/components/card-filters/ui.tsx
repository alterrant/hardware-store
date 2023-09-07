import { Button } from 'components/button';
import { filterConfig, priseSortConfig } from './config';
import { ReactComponent as ArrowDown } from './assets/arrow-down.svg';

import styles from './card-filters.module.css';

export const CardFilters = () => {
  const filterHandler = () => {};
  const priseSortHandler = () => {};

  return (
    <div className={styles.wrapper}>
      <Button {...filterConfig} btnClassName={styles.filter} onClick={filterHandler} />
      <Button {...priseSortConfig} btnClassName={styles.priseSort} onClick={priseSortHandler}>
        <ArrowDown />
      </Button>
    </div>
  );
};
