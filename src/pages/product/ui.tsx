import { useOutletContext } from 'react-router-dom';

import { ProductSections } from 'components/product';
import { SidebarToggle, type TSidebarToggleStatus } from 'components/sidebar/sidebar-toggle';
import { product } from './configs';

import styles from './product-page.module.scss';

export const ProductPage = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useOutletContext<TSidebarToggleStatus>();

  return (
    <main className={styles.wrapper}>
      {/* <SidebarToggle /> */}

      <SidebarToggle
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
        openSidebar={openSidebar}
      />
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
};
