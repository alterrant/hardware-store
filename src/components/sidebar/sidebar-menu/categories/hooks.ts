import { useState } from 'react';

import { type TCategoryOpenState } from './types';

export const useCategoryOpenState = (initialState: TCategoryOpenState) => {
  const [categoryOpenState, setCategoryOpenState] = useState(initialState);

  const toggleOpenStatus = (categoryId: number) => {
    const isCurrentCategoryState = categoryId === categoryOpenState.openedId;

    if (isCurrentCategoryState)
      setCategoryOpenState({ isOpen: !categoryOpenState.isOpen, openedId: categoryId });
    else {
      setCategoryOpenState({ isOpen: true, openedId: categoryId });
    }
  };

  return { categoryOpenState, toggleOpenStatus };
};
