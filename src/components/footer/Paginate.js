import React, {useState} from 'react';
import useStyle from './style.js';


const Paginate = ({pageNumbers,paginateNext, paginatePre, paginate }) => {
  const classes = useStyle();

  return (
    <nav className={classes.headerContainer}>
      <ul className={classes.pagination}>
        <li className={classes.pageItem}><a className={classes.pageItem} onClick={() => paginatePre()} >&laquo;</a></li>
        {pageNumbers?.map(number => (
          <li key={number} className={classes.pageItem}>
            <a onClick={() => paginate(number)} className={classes.pageItem}>
              {number}
            </a>
          </li>
        ))}
        <li className={classes.pageItem}><a className={classes.pageItem} type="button" onClick={() => paginateNext()} >&raquo;</a></li>
      </ul>
    </nav>
  );
};

export default Paginate;


