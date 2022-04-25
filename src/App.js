import React from 'react';
import { useEffect, useState } from 'react';
import { movies$ } from './movies';
import Header from './Components/Header/Header';
import Paginate from './Components/Footer/Paginate';
import Form from './Components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesData } from './feature/movies.slice';
import { $CombinedState } from '@reduxjs/toolkit';



const App = () => {
  const dispatch = useDispatch();
  const [long, setLong] = useState();
  const currentMovies = useSelector((state) => state.movies.movies);
  
  
  useEffect(() => {
    const moviesIds = async () => {
      const movies = await movies$;
      dispatch(setMoviesData(movies));
      setLong( movies.length);
      console.log(long)
      
    }
    
    moviesIds();
  }, []);
  
  const [currentPage, setCurrentPage] = useState(1);
  
  
 
  const totalPosts = currentMovies?.length;
  const postsPerPage = 4;
  const pageNumbers = [];
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = currentMovies?.slice(indexOfFirstPost, indexOfLastPost);

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = pageNumbers => setCurrentPage(pageNumbers);
  const paginatePre = () => {
    if (currentPage == 1) { setCurrentPage(currentPage) }
    else
      setCurrentPage(currentPage - 1)
  };
  const l = pageNumbers.length;
  const paginateNext = () => {
    if (currentPage == l) { setCurrentPage(currentPage) }
    else setCurrentPage(currentPage + 1)
  }




  return (

    <div>
        <Header movie={currentMovies} />
        <Form currentMovies={currentPosts}/>
        <Paginate pageNumbers={pageNumbers} paginateNext={paginateNext} paginatePre={paginatePre} paginate={paginate}  />
       
      
    </div>

  );
};

export default App;