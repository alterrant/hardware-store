import React from 'react';
import { useOutletContext } from 'react-router-dom';

import { Pagination } from 'components/pagination';
import { ProductCards } from 'components/product-cards';
import { CardFilters } from 'components/card-filters';
import { SidebarToggle, type TSidebarToggleStatus } from 'components/sidebar/sidebar-toggle';
import { DEFAULT_TOTAL_PAGES, paginationConfig } from 'constants/pagination-config';
import { DEFAULT_TITLE, productCards } from './config';

import styles from './subcatalog.module.scss';

export const SubcatalogPage = () => {
  const { isSidebarOpen, closeSidebar, openSidebar } = useOutletContext<TSidebarToggleStatus>();

  return (
    <main className={styles.wrapper}>
      <div className={styles.products}>
        <div className={styles.title}>
          <SidebarToggle
            isSidebarOpen={isSidebarOpen}
            closeSidebar={closeSidebar}
            openSidebar={openSidebar}
          />
          {/* <SidebarToggle /> */}
          <h1>{DEFAULT_TITLE}</h1>
        </div>
        <CardFilters />
        <ProductCards productCardsInfo={productCards} />
      </div>
      <Pagination totalPages={DEFAULT_TOTAL_PAGES} {...paginationConfig} />
    </main>
  );
};
