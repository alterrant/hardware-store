import classNames from 'classnames';
import { CatalogItem, type TCatalogItem } from './catalog-item';

import styles from './catalog-items.module.scss';

type TCatalogItemsProps = {
  catalog: TCatalogItem[];
  containerClassname?: string;
};

export const CatalogItemsContainer = ({ catalog, containerClassname }: TCatalogItemsProps) => {
  const containerClass = classNames(styles.itemsContainer, containerClassname);

  const categories = catalog.map(catalogItem => (
    <CatalogItem
      imgSrc={catalogItem.imgSrc}
      description={catalogItem.description}
      link={catalogItem.link}
      key={catalogItem.id}
    />
  ));

  return <div className={containerClass}>{categories}</div>;
};
