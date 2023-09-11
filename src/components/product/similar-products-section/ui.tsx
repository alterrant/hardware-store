import { ProductInfoLayout } from 'components/layouts/product-info';
import { CatalogItemsContainer } from 'components/catalog-items';
import { type TCatalogItem } from 'components/catalog-items/catalog-item';
import { TITLE } from './config';

import styles from './similar-products.module.scss';

type TSimilarProductsProps = {
  catalog: TCatalogItem[];
};

export const SimilarProducts = ({ catalog }: TSimilarProductsProps) => (
  <ProductInfoLayout>
    <h3 className={styles.title}>{TITLE}</h3>
    <CatalogItemsContainer catalog={catalog} containerClassname={styles.container} />
  </ProductInfoLayout>
);
