import { useEffect } from 'react';

export const useClickOutside = (isListening: boolean, onClick: (e: MouseEvent) => void) => {
  useEffect(() => {
    document.addEventListener('click', onClick, true);

    return () => {
      document.removeEventListener('click', onClick, true);
    };
  }, [isListening, onClick]);
};
