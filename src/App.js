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
  const [list, setList] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemOffset, setItemOffset] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  const [disLikeActive, setDisLikeActive] = useState(false);
  const [BackgroundColor, setBackgroundColor] =useState( "BLACK");


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
  const handleChange = async(e) => {
   const mo =  mov.filter((category, id) => category.category === e.target.value);
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
  const paginate = pageNumbers => setCurrentPage(pageNumbers);
  const paginatePre = (pageNumbers) =>{
    if( currentPage == 1 )
    {  setCurrentPage(currentPage) }
    else
      setCurrentPage(currentPage-1) 
  };
  console.log(pageNumbers.length)
  const l =pageNumbers.length;
  const paginateNext = () =>{  
        if(currentPage == l) {setCurrentPage(currentPage) }
        else setCurrentPage(currentPage+1)
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
    
  
 
 
  

  const likeF = (id) =>{
    const newMovie = mov;
    if(likeActive){
      setLikeActive(false);
     
      const newArr = newMovie.map((obj) => {
        
       if (obj.id === id) {
        return { ...obj, likes: obj.likes-1 };
             }
       return obj;
       
     });
       setMov(newArr)  ;
     

    }else{
      setLikeActive(true);
      const newArr = newMovie.map((obj) => {
       if (obj.id === id) {
        return { ...obj, likes: obj.likes+1 };
             }
       return obj;
       
     });
    
       setMov(newArr)  
      if(disLikeActive){
        setDisLikeActive(false);
        
        const newArr1 = newMovie.map((obj) => {
         if (obj.id === id) {
          return { ...obj, likes: obj.likes+1 , dislikes: obj.dislikes-1};
               }
         return obj;
         
       });
         setMov(newArr1)  
      }

    }
  }
  

  const disLikeF = (id) =>{
    const newMovie = mov;
    if(disLikeActive){
      setDisLikeActive(false);
    
   const newArr = newMovie.map((obj) => {
    if (obj.id === id) {
     return { ...obj, dislikes: obj.dislikes-1 };
          }
    return obj;
    
  });
    setMov(newArr)  

    }else{
      setDisLikeActive(true);
      
      const newArr1 = newMovie.map((obj) => {
       if (obj.id === id) {
        return { ...obj,dislikes: obj.dislikes+1 };
             }
       return obj;
       
     });
       setMov(newArr1)  
      if(likeActive){
        setLikeActive(false);
        
        const newArr = newMovie.map((obj) => {
         if (obj.id === id) {
          return { ...obj, likes: obj.likes-1 , dislikes: obj.dislikes+1};
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
        handleSubmit={handleSubmit}
        handleSearch={handleSearch}
        handleChange={handleChange}
      />
      <Form
         currentPosts={currentPosts}
         handleRemoveFromCart={handleRemoveFromCart}
         handleUpdateLikes={likeF}
         handleUpdateDisLikes={disLikeF}
        
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
