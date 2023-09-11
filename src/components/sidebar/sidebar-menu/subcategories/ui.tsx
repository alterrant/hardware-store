import { type TSubcategory } from 'types';
import { Subcategory } from './subcategory';

import styles from './subcategories.module.css';

type TSubcategoriesProps = {
  subcategories: TSubcategory[];
  categoryName: string;
  isPreviousRoute?: boolean | undefined;
};

export const Subcategories = ({
  subcategories,
  categoryName,
  isPreviousRoute,
}: TSubcategoriesProps) => {
  const subcategoriesArray = subcategories.map(subcategory => {
    const link = `${categoryName}/${subcategory.subcategoryName}`;

    return (
      <Subcategory
        subcategoryName={subcategory.subcategoryName}
        link={isPreviousRoute ? `../${link}` : link}
        key={subcategory.id}
      />
    );
  });

  return <div className={styles.container}>{subcategoriesArray}</div>;
};
