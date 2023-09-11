import React, { cloneElement, type ReactNode, useRef } from 'react';

import { useClickOutside } from 'hooks/use-click-outside';
import { useCloseWindow } from 'hooks/use-close-window';
import { outsideClickHandler } from './handlers';

type ToggleClickOutsideProps = {
  children: ReactNode;
  isOpen: boolean;
  handleClose: () => void;
};

export const ToggleClickOutside = ({ children, isOpen, handleClose }: ToggleClickOutsideProps) => {
  const ref = useRef(null);

  const onClickOutside = (e: MouseEvent) => {
    outsideClickHandler({
      e,
      isOpen,
      handleClose,
      ref,
    });
  };

  useClickOutside(isOpen, onClickOutside);
  useCloseWindow(isOpen, handleClose);

  if (React.isValidElement(children)) {
    return cloneElement<any>(children, { ref });
  }

  return null;
};
