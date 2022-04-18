import React from 'react';
import { useState, useEffect } from 'react';
import { movies$ } from './assets/movies';
import Header from './components/Header/Header';
import Paginate from './components/footer/Paginate';
import useStyle from './style';
import Form from './components/Form/Form';




const App = () => {
  const classes = useStyle();

  const [mov, setMov] = useState([]);
  const [newMov, setNewMov] = useState([]);
  const [list, setList] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);




  const pageNumbers = [];
  const totalPosts = mov.length;
  const postsPerPage = 4;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = mov.slice(indexOfFirstPost, indexOfLastPost);

  useEffect(() => {
    const moviesIds = async () => {
      const movies = await movies$;
      setMov(movies);
      setNewMov(movies);
    }
    moviesIds();
  }, [])
   
  const handleSubmit = (e) => {
    setList(e.target.list)
    
    const newlistMovies = mov.filter((title, id) => title.category.toLowerCase().includes(list));
       setMov(newlistMovies);   
       setList(e.target.list)
       e.preventDefault();
  }
  const handleChange = (e) => {
   const mo = mov.filter((category, id) => category.category === e.target.value);
    setMov(mo);
    e.preventDefault();
  }
  const handleSearch = (e) => {
    setList(e.target.value);
  }


  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

  const handleRemoveFromCart = async (e) => {
    /*const incd= mov.filter(use => {
        return use.id !== id    
    }); */
    const newMovie = mov
    const incd = newMov.findIndex(item => item.id === (e))
    const remove = window.confirm("Are you sur?")
    if (remove) {
     newMovie.splice(incd, 1)
      setMov(newMovie);
      console.log(mov)
    }
  };

  const handleUpdateCartQty = () => {
    console.log('hello');
  }




  return (
    <div>
      <Header
        movies={mov}
        value={list}
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      <Form
         currentPosts={currentPosts}
         handleRemoveFromCart={handleRemoveFromCart}
         handleUpdateCartQty={handleUpdateCartQty}
      />
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={mov.length}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
