import { AUTH_BUTTON_TEXTS } from 'constants/auth-button-texts';
import { Button, ButtonColors, ButtonVariants } from 'components/common/button';
import { ReactComponent as OutgoingMail } from '../assets/outgoing-mail.svg';

import styles from './auth-button-section.module.css';

type TAuthButtonSectionProps = {
  isAuthorised?: boolean;
};

export const AuthButtonSection = ({ isAuthorised = false }: TAuthButtonSectionProps) => {
  const handleSignUp = () => {};
  const handleViewProfile = () => {};

  return (
    <div className={styles.wrapper}>
      <OutgoingMail />
      <Button
        variants={ButtonVariants.ELLIPSE}
        onClick={isAuthorised ? handleSignUp : handleViewProfile}
        bgColor={ButtonColors.DARK_GREY}
        textColor={ButtonColors.WHITE}
        btnText={isAuthorised ? AUTH_BUTTON_TEXTS.PROFILE : AUTH_BUTTON_TEXTS.SIGN_UP}
        btnClassName={styles.button}
      />
    </div>
  );
};
