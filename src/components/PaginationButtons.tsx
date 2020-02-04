import React from 'react';

type Props = {
  currentPage: number;
  pageCount: number;
  navigate: Function
}
export const PaginationButtons = ({ currentPage = 1, pageCount, navigate }: Props) => {

  const getPageNumbers = () => {
    if (pageCount < 4) {
      return [...Array(pageCount + 1).keys()].slice(1);
    } else if (currentPage <= 4) {
      return [1, 2, 3, 4, 5];
    } else if (currentPage > pageCount - 4) {
      return [...Array(5).keys()].reverse().map(v => pageCount - v);
    } else {
      return [currentPage - 1, currentPage, currentPage + 1];
    }
  }

  return (
    <React.Fragment>
      <button onClick={() => navigate(currentPage - 1)} disabled={currentPage === 1} className="btn btn-secondary mx-1">Prev</button>
      {
        currentPage > 4 &&
        <React.Fragment>
          <button className="btn btn-secondary mx-1" onClick={() => { navigate(1) }}>1</button>
          <span className="h4">...</span>
        </React.Fragment>
      }
      {
        (getPageNumbers() || []).map(num =>
          <button className={`btn mx-1 ${num === currentPage ? "btn-primary" : "btn-secondary"}`}
            onClick={() => navigate(num)}
            key={num}>{num}</button>
        )
      }
      {
        currentPage <= (pageCount - 4) &&
        <React.Fragment>
          <span className="h4">...</span>
          <button className="btn btn-secondary mx-1" onClick={() => navigate(pageCount)}>{pageCount}</button>
        </React.Fragment>
      }
      <button onClick={() => navigate(currentPage + 1)} disabled={currentPage === pageCount} className="btn btn-secondary mx-1">Next</button>
    </React.Fragment>
  )
}
