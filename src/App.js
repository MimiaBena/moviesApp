import React from 'react';
import { useState, useEffect } from 'react';
import { movies$ } from './assets/movies';
import Header from './components/Header/Header';
import Paginate from './components/footer/Paginate';
import Form from './components/Form/Form';



const App = () => {
  

  const [mov, setMov] = useState([]);
  const [list, setList] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [likeActive, setLikeActive] = useState(false);
  const [disLikeActive, setDisLikeActive] = useState(false);
  const [tex, setText] = useState([]);


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
    }
    moviesIds();
  }, []);
  
  //Change handle
  const handleChange = (e) => {
    const {
      target: { value },
    } = e;
    setText(
      typeof value === 'string' ? value.split(',') : value,
    );
    const g = e.target.value;
    console.log(g)
    //const mo = movies.filter((category, id) => category.category === e.target.value);
    const mo= mov.filter((category, id) => {
      return g.find((itemB) => {
        return category.category === itemB;
      })
    });
    setMov(mo);
    e.preventDefault();
  }

  const handleSearch = (e) => {
    setList(e.target.value);
  }
  const handleSubmit = (e) => {
    setList(e.target.value)
    if (list) {
      const newlistMovies = mov.filter((title) => title.category.toLowerCase().
        includes(list) || title.title.
          toLowerCase().
          includes(list));
      setMov(newlistMovies);
      setList(e.target.list)
      e.preventDefault();
    }
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  // Change page
  const paginate = pageNumbers => setCurrentPage(pageNumbers);
  const paginatePre = (pageNumbers) => {
    if (currentPage == 1) { setCurrentPage(currentPage) }
    else
      setCurrentPage(currentPage - 1)
  };
  const l = pageNumbers.length;
  const paginateNext = () => {
    if (currentPage == l) { setCurrentPage(currentPage) }
    else setCurrentPage(currentPage + 1)
  }

  const handleRemoveFromCart = (e) => {
    /*const incd= mov.filter(use => {
        return use.id !== id    
    }); */
    const newMovie = mov;
    const index = newMovie.findIndex(item => item.id === (e));
    const remove = window.confirm("Are you sur?")
    if (remove) {
      newMovie.splice(index, 1);
      setMov(newMovie);
    }
  };

  const likeF = (id) => {
    const newMovie = mov;
    if (likeActive) {
      setLikeActive(false);
      const newArr = newMovie.map((obj) => {
        if (obj.id === id) {
          return { ...obj, likes: obj.likes - 1 };
        }
        return obj;
      });
      setMov(newArr);
    } else {
      setLikeActive(true);
      const newArr = newMovie.map((obj) => {
        if (obj.id === id) {
          return { ...obj, likes: obj.likes + 1 };
        }
        return obj;
      });

      setMov(newArr)
      if (disLikeActive) {
        setDisLikeActive(false);
        const newArr1 = newMovie.map((obj) => {
          if (obj.id === id) {
            return { ...obj, likes: obj.likes + 1, dislikes: obj.dislikes - 1 };
          }
          return obj;
        });
        setMov(newArr1)
      }
    }
  }




  const disLikeF = (id) => {
    const newMovie = mov;
    if (disLikeActive) {
      setDisLikeActive(false);
      const newArr = newMovie.map((obj) => {
        if (obj.id === id) {
          return { ...obj, dislikes: obj.dislikes - 1}
        }
        return obj     
      });
      
      setMov(newArr)
    } else {
      setDisLikeActive(true);
      const newArr1 = newMovie.map((obj) => {
        if (obj.id === id) {
          return { ...obj, dislikes: obj.dislikes + 1 };
        }
        return obj;
      });
      setMov(newArr1)
      if (likeActive) {
        setLikeActive(false);
        const newArr = newMovie.map((obj) => {
          if (obj.id === id) {
            return { ...obj, likes: obj.likes - 1, dislikes: obj.dislikes + 1 };
          }
          return obj;
        });
        setMov(newArr)
      }
    }
  }


  return (

    <div>
      <Header
        movies={mov}
        value={list || ''}
        handleSearch={handleSearch}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        valueCat={tex}


      />
      <Form
        currentPosts={currentPosts}
        handleRemoveFromCart={handleRemoveFromCart}
        handleUpdateLikes={likeF}
        handleUpdateDisLikes={disLikeF}
        likeActive={likeActive}
        dislikeActive={disLikeActive}

      />
      <Paginate
        postsPerPage={postsPerPage}
        totalPosts={mov.length}
        paginate={paginate}
        paginatePre={paginatePre}
        paginateNext={paginateNext}
      />
    </div>

  );
};

export default App;