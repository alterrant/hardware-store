import React from 'react';

import { Pagination } from 'components/pagination';
import { ProductCards } from 'components/product-cards';
import { CardFilters } from 'components/card-filters';
import { DEFAULT_TOTAL_PAGES, paginationConfig } from 'constants/pagination-config';
import { DEFAULT_TITLE, productCards } from './config';

import styles from './subcatalog.module.css';

export const SubcatalogPage = () => (
  <main className={styles.wrapper}>
    <div className={styles.products}>
      <h1>{DEFAULT_TITLE}</h1>
      <CardFilters />
      <ProductCards productCardsInfo={productCards} />
    </div>
    <Pagination totalPages={DEFAULT_TOTAL_PAGES} {...paginationConfig} />
  </main>
);
