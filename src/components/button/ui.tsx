import classNames from 'classnames';
import React, { forwardRef, type ReactNode } from 'react';

import { type ButtonColors, type ButtonTypes, type ButtonVariants } from './config';

import styles from './button.module.css';

type TButtonProps = {
  btnClassName?: string;
  type?: ButtonTypes;
  isDisabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  btnText?: string;
  textClassName?: string;
  variants?: ButtonVariants;
  bgColor?: ButtonColors;
  textColor?: ButtonColors;
  children?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
  (
    {
      children,
      btnClassName,
      type,
      isDisabled,
      onClick,
      btnText,
      textClassName,
      variants,
      bgColor,
      textColor,
    },
    ref
  ) => {
    const buttonClassName = classNames(
      styles.base,
      variants && styles[variants],
      bgColor && styles[`${bgColor}Bg`],
      textColor && styles[`${textColor}Text`],
      btnClassName
    );

    return (
      <button
        ref={ref}
        className={buttonClassName}
        type={type}
        disabled={isDisabled}
        onClick={onClick}>
        {btnText && <p className={textClassName}>{btnText}</p>}
        {children}
      </button>
    );
  }
);
