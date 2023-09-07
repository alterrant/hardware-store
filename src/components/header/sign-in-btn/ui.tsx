import { SIGN_IN } from './configs';
import { Button, ButtonColors, ButtonVariants } from '../../button';

import styles from './sign-in-btn.module.css';

export const SignInBtn = () => (
  <Button
    btnText={SIGN_IN}
    onClick={() => {}}
    variants={ButtonVariants.ELLIPSE}
    bgColor={ButtonColors.WHITE}
    textColor={ButtonColors.DARK_GREY}
    btnClassName={styles.activities}
  />
);
