import { ProductSections } from 'components/product';
import { ProductsLayout } from 'components/layouts/products';
import { product } from './configs';

export const ProductPage = () => (
  <ProductsLayout>
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
  </ProductsLayout>
);
