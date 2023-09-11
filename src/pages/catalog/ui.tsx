import { Pagination } from 'components/pagination';
import { CatalogItemsContainer } from 'components/catalog-items';
import { DEFAULT_TOTAL_PAGES, paginationConfig } from 'constants/pagination-config';
import { catalog, TITLE } from './config';

import styles from './catalog-page.module.css';

export const CatalogPage = () => (
  <main className={styles.wrapper}>
    <section className={styles.content}>
      <h1>{TITLE}</h1>
      <CatalogItemsContainer catalog={catalog} />
    </section>
    <Pagination totalPages={DEFAULT_TOTAL_PAGES} {...paginationConfig} />
  </main>
);
