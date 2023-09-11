import { Button, ButtonColors, ButtonVariants } from 'components/common/button';
import { ADD_TO_CART, INITIAL_COUNT } from './configs';
import { Counter, useCounter } from '../../common/counter';

import styles from './product-actions.module.css';

type TProductActionsProps = {
  handleAddToCart: () => void;
};

export const ProductActions = ({ handleAddToCart }: TProductActionsProps) => {
  const { count, increment, decrement } = useCounter(INITIAL_COUNT);

  return (
    <div className={styles.wrapper}>
      <Counter count={count} decrement={decrement} increment={increment} />
      <Button
        variants={ButtonVariants.ELLIPSE}
        bgColor={ButtonColors.RED}
        textColor={ButtonColors.WHITE}
        btnClassName={styles.addToCartBtn}
        btnText={ADD_TO_CART}
        onClick={handleAddToCart}
      />
    </div>
  );
};
