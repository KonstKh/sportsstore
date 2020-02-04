import React from 'react';
import { PaginationButtons } from './PaginationButtons';

export const PaginationControls = (props: any) => {

  const pageSizes = props.sizes || [5, 10, 25, 100];
  const sortKeys = props.keys || ["Name", "Price"];
  const handlePageSizeChange = (ev: any) => {
    props.setPageSize(ev.target.value);
  }

  const handleSortPropertyChange = (ev: any) => {
    props.setSortProperty(ev.target.value);
  }

  return (
    <div className="m-2">
      <div className="text-center m-1">
        <PaginationButtons currentPage={props.currentPage} pageCount={props.pageCount} navigate={props.navigateToPage}/>
      </div>
      <div className="form-inline justify-content-center">
        <select className="form-control" onChange={ handlePageSizeChange } value={ props.pageSize || pageSizes[0]}>
          { pageSizes.map((s: number) => <option key={s} value={s}>{s} per page</option>)}
        </select>
        <select className="form-control" onChange={ handleSortPropertyChange } value={props.sortKey || sortKeys[0]}>
          {sortKeys.map((k: string) => <option value={k.toLowerCase()} key={k}>Sort By {k}</option>)}
        </select>
      </div>
    </div>
  )
}