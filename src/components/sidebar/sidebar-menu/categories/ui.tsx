import { Fragment } from 'react';

import { type TCategory } from 'types';
import { Category } from './category';
import { INITIAL_OPEN_STATUS } from './config';
import { useCategoryOpenState } from './hooks';
import { checkCurrentCategoryOpenStatus } from './utils';

import styles from './categories.module.css';

type TCategoriesProps = {
  categories: TCategory[];
  isPreviousRoute?: boolean | undefined;
};

export const Categories = ({ categories, isPreviousRoute }: TCategoriesProps) => {
  const { categoryOpenState, toggleOpenStatus } = useCategoryOpenState(INITIAL_OPEN_STATUS);

  const renderedCategories = categories.map(category => (
    <Fragment key={category.id}>
      <Category
        isPreviousRoute={isPreviousRoute}
        isCategoryOpen={checkCurrentCategoryOpenStatus(
          categoryOpenState.isOpen,
          categoryOpenState.openedId,
          category.id
        )}
        toggleOpenStatus={toggleOpenStatus}
        category={category}
      />
    </Fragment>
  ));

  return <div className={styles.wrapper}>{renderedCategories}</div>;
};
