import React from 'react';
import useStyle from './style.js';


const Paginate = ({ postsPerPage, totalPosts, paginate, paginatePre, paginateNext }) => {
  const classes = useStyle();
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const loadre = () => {

  }
  const loadMore = () => {


  }

  return (
    <nav className={classes.headerContainer}>
      <ul className={classes.pagination}>
        <li className={classes.pageItem}><a className={classes.pageItem} onClick={() => paginatePre()} >&laquo;</a></li>
           {pageNumbers.map(number => (
          <li key={number} className={classes.pageItem}>
            <a onClick={() => paginate(number)} href='!#' className={classes.pageItem}>
              {number}
            </a>
          </li>
        ))}
        <li className={classes.pageItem}><a className={classes.pageItem} type="button" onClick={() =>paginateNext()} >&raquo;</a></li>
      </ul>
    </nav>
  );
};

export default Paginate;


