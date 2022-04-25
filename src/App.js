import React from 'react';
import { useEffect } from 'react';
import { movies$ } from './movies';
import Header from './Components/Header/Header';
import Paginate from './Components/Footer/Paginate';
import Form from './Components/Form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setMoviesData } from './feature/movies.slice';



const App = () => {
  const dispatch = useDispatch();
  const currentMovies = useSelector((state) => state.movies.movies);
 

 
  useEffect(() => {
    const moviesIds = async () => {
      const movies = await movies$;
      dispatch(setMoviesData(movies));
      
    }
    moviesIds();
  }, []);
  
 

  return (

    <div>
        <Header movie={currentMovies} />
        <Form currentMovies={currentMovies}/>
      
    </div>

  );
};

export default App;