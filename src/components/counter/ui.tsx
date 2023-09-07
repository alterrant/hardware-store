import classNames from 'classnames';

import { Button } from 'components/button';
import { getCountString } from './utils';
import { DECREMENT, INCREMENT } from './config';

import styles from './counter.module.css';

type TCounterProps = {
  increment: () => void;
  decrement: () => void;
  count: number;
};

export const Counter = ({ increment, decrement, count }: TCounterProps) => {
  const incrementClassName = classNames(styles.increment, styles.button);
  const decrementClassName = classNames(styles.decrement, styles.button);

  return (
    <div className={styles.wrapper}>
      <Button onClick={decrement} btnText={DECREMENT} btnClassName={decrementClassName} />
      <span className={styles.count}>{getCountString(count)}</span>
      <Button onClick={increment} btnText={INCREMENT} btnClassName={incrementClassName} />
    </div>
  );
};
