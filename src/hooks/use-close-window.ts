import { useEffect } from 'react';

export const useCloseWindow = (isOpen: boolean, closeWindow: () => void) => {
  const closeWindowHandler = () => {
    if (window.innerWidth > 768 && isOpen) closeWindow();
  };

  useEffect(() => {
    window.addEventListener('resize', closeWindowHandler, true);

    return () => {
      window.removeEventListener('resize', closeWindowHandler, true);
    };
  }, [isOpen]);
};
