import { type TSubcategory } from 'types';
import { Subcategory } from './subcategory';

import styles from './subcategories.module.scss';

type TSubcategoriesProps = {
  subcategories: TSubcategory[];
  categoryName: string;
};

export const Subcategories = ({ subcategories, categoryName }: TSubcategoriesProps) => {
  const subcategoriesArray = subcategories.map(subcategory => {
    // const link = `catalog/${categoryName}/${subcategory.subcategoryName}`;
    const link = `${categoryName}/${subcategory.subcategoryName}`;

    return (
      <Subcategory subcategoryName={subcategory.subcategoryName} link={link} key={subcategory.id} />
    );
  });

  return <div className={styles.container}>{subcategoriesArray}</div>;
};
