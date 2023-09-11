import { useState } from 'react';

import { PaginationController } from './pagination-controller';
import { PageList } from './page-list';
import { PreviousPaginationConfig, NextPaginationConfig } from './configs';

import styles from './pagination.module.scss';

type TPaginationProps = {
  totalPages: number;
  initialPageNumber: number;
  pageDisplayedRange: number;
  lastPagesRange: number;
};

export const Pagination = ({
  totalPages,
  initialPageNumber,
  pageDisplayedRange,
  lastPagesRange,
}: TPaginationProps) => {
  const [activePage, setActivePage] = useState<number>(initialPageNumber);

  const handlePrevPage = () => {
    if (activePage > 1) setActivePage(activePage - 1);
  };
  const handleNextPage = () => {
    if (activePage < totalPages) setActivePage(activePage + 1);
  };
  const handleFirstPage = () => {
    setActivePage(1);
  };
  const handleLastPage = () => {
    setActivePage(totalPages);
  };

  return (
    <div className={styles.wrapper}>
      <PaginationController
        {...PreviousPaginationConfig}
        handleClickImg={handleFirstPage}
        handleClickLabel={handlePrevPage}
      />
      <PageList
        handleClickPage={setActivePage}
        totalPages={totalPages}
        activePage={activePage}
        pageDisplayedRange={pageDisplayedRange}
        lastPagesRange={lastPagesRange}
        breakLabel="..."
      />
      <PaginationController
        {...NextPaginationConfig}
        handleClickImg={handleLastPage}
        handleClickLabel={handleNextPage}
      />
    </div>
  );
};
