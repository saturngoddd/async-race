import React from 'react';
import ReactPaginate from 'react-paginate';
import { PaginationData } from '../../types/types';
import style from './customPagination.module.css';

function CustomPagination() {
  const pageCount: number = 10;
  const handlePageClick = (data: PaginationData): void => {
    const incrementValue: number = 1;
    const currentPage: number = data.selected + incrementValue;
    console.log(currentPage);
  };
  return (
    <div>
      <ReactPaginate
        nextLabel=">>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel="<<"
        containerClassName={style.pagination}
        pageLinkClassName={style.pageLink}
        previousClassName={style.pageItem}
        previousLinkClassName="page-link"
        nextClassName={style.pageItem}
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName={style.pageItem}
        breakLinkClassName="page-link"
        activeClassName={style.active}
        renderOnZeroPageCount={null}
      />
    </div>
  );
}

export default CustomPagination;
