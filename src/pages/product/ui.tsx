import { ProductSections } from 'components/product';
import { product } from './configs';

import styles from './product-page.module.css';

export const ProductPage = () => (
  <main className={styles.wrapper}>
    <ProductSections.MainInfo
      id={product.id}
      category={product.category}
      title={product.title}
      imgSrc={product.img}
      description={product.description}
      sku={product.sku}
    />
    <ProductSections.Characteristics characteristics={product.characteristics} />
    <ProductSections.SimilarProducts catalog={product.similarProducts} />
  </main>
);
