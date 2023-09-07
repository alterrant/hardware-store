export const getDisplayedPageNumbers = (
  totalPages: number,
  activePage: number,
  pageDisplayedRange: number,
  lastPagesRange: number
) => {
  const pageNumbers = Array.from(Array(totalPages).keys()).map(number => ++number);

  const displayedRangePageNumbers: number[] = [];
  const endPageNumbers: number[] = [];

  pageNumbers.forEach((pageNumber, index, array) => {
    const maxRangedPageNumber = activePage + pageDisplayedRange;
    const minRangedPageNumber = activePage - pageDisplayedRange;
    const minRandedEndNumbers = array.length - lastPagesRange;

    const displayRangeCondition =
      pageNumber > minRangedPageNumber && pageNumber < maxRangedPageNumber;
    const endNumbersCondition = pageNumber > minRandedEndNumbers;

    if (displayRangeCondition) displayedRangePageNumbers.push(pageNumber);
    if (
      !displayedRangePageNumbers.includes(pageNumber) &&
      endNumbersCondition &&
      activePage <= pageNumber
    )
      endPageNumbers.push(pageNumber);
  });

  return { displayedRangePageNumbers, endPageNumbers };
};

export const getDisplayedPages = (
  displayedRangePageNumbers: number[],
  endPageNumbers: number[],
  breakLabel: string
) => {
  if (!!endPageNumbers.length) return [...displayedRangePageNumbers, breakLabel, ...endPageNumbers];

  return displayedRangePageNumbers;
};

export const checkIsActive = (pageNumber: number | string, activePageNumber: number) => {
  return pageNumber === activePageNumber;
};
