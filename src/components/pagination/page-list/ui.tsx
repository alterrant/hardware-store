import { type Dispatch } from 'react';

import { checkIsActive, getDisplayedPageNumbers, getDisplayedPages } from './utils';
import { Page } from './page';

import styles from './page-list.module.css';

type TPageListProps = {
  totalPages: number;
  activePage: number;
  pageDisplayedRange: number;
  lastPagesRange: number;
  breakLabel: string;
  handleClickPage: Dispatch<number>;
};

export const PageList = ({
  handleClickPage,
  totalPages,
  activePage,
  lastPagesRange,
  breakLabel,
  pageDisplayedRange,
}: TPageListProps) => {
  const { displayedRangePageNumbers, endPageNumbers } = getDisplayedPageNumbers(
    totalPages,
    activePage,
    pageDisplayedRange,
    lastPagesRange
  );

  const displayedPages = getDisplayedPages(displayedRangePageNumbers, endPageNumbers, breakLabel);

  const pageList = displayedPages.map(page => (
    <Page
      key={page}
      page={page}
      isActive={checkIsActive(page, activePage)}
      handleClick={handleClickPage}
    />
  ));

  return (
    <div className={styles.wrapper}>
      <ul className={styles.pagesContainer}>{pageList}</ul>
    </div>
  );
};
