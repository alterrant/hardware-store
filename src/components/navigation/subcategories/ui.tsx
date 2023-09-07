import { type TSubcategory } from 'types';
import { Subcategory } from './subcategory';

import styles from './subcategories.module.css';

type TSubcategoriesProps = {
  subcategories: TSubcategory[];
};

export const Subcategories = ({ subcategories }: TSubcategoriesProps) => {
  const subcategoriesArray = subcategories.map(subcategory => (
    <Subcategory
      subcategoryName={subcategory.subcategoryName}
      link={subcategory.subcategoryName}
      key={subcategory.id}
    />
  ));

  return <div className={styles.container}>{subcategoriesArray}</div>;
};
