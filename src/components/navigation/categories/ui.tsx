import { Fragment } from 'react';

import { type TCategory } from 'types';
import { Category } from './category';

import styles from './categories.module.css';

type TCategoriesProps = {
  categories: TCategory[];
};

export const Categories = ({ categories }: TCategoriesProps) => {
  const renderedCategories = categories.map(category => (
    <Fragment key={category.id}>
      <Category category={category} />
    </Fragment>
  ));

  return <div className={styles.wrapper}>{renderedCategories}</div>;
};
