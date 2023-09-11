import classNames from 'classnames';

import styles from './pagination-controller.module.scss';
import { Button } from '../../common/button';

type TPaginationControllerProps = {
  imgSrc: string;
  label: string;
  handleClickImg: () => void;
  handleClickLabel: () => void;
  isAscending?: boolean;
};

export const PaginationController = ({
  imgSrc,
  label,
  isAscending = false,
  handleClickImg,
  handleClickLabel,
}: TPaginationControllerProps) => {
  const wrapperClassName = classNames(styles.wrapper, isAscending && styles.ascending);

  return (
    <div className={wrapperClassName}>
      <Button btnClassName={styles.fixedNavigation}>
        <img onClick={handleClickImg} src={imgSrc} alt={label} />
      </Button>
      <Button onClick={handleClickLabel}>{label}</Button>
    </div>
  );
};
