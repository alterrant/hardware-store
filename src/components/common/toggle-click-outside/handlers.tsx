import { type RefObject } from 'react';

type OutsideClickHandlerProps = {
  e: MouseEvent;
  isOpen: boolean;
  handleClose: () => void;
  ref: RefObject<HTMLElement>;
};

export const outsideClickHandler = ({ e, isOpen, handleClose, ref }: OutsideClickHandlerProps) => {
  if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
    handleClose();

    if (isOpen) {
      e.preventDefault();
      e.stopPropagation();
    }
  }
};
