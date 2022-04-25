import { MenuItem, AppBar, Toolbar, Typography, InputLabel, FormControl } from '@material-ui/core';
import React, {useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import logo from './acean.jpg';
import useStyles from './style';
import { useDispatch, useSelector } from "react-redux";
import { submitMovie, searchMovie, filterCategory , searchCategoryMovie} from './../../feature/movies.slice';



const Header = ({ movie }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const listSearch = useSelector((state) => state.movies.listSearch)
    const categorySelected =useSelector((state) => state.movies.categorySelected);
    const [term, setTerm] = useState([]);
    
   
   
    const formRef = useRef();
    //const arr = ['Comedy', 'Animation', 'Drame', 'Thrill'];
    const handleSubmit =  (e) => {
        e.preventDefault();
        dispatch((submitMovie(listSearch)));
        
        
    }
    const handleSearch = (e) => {
        dispatch(searchMovie(e.target.value));
      }
      const searchCategoryMovie = (e)=>{
          
        const {
            target: { value },
          } = e;
          setTerm(
            typeof value === 'string' ? value.split(',') : value,
          );
         
          
      }
      console.log(term)
      
      const handleChangeSelected = (e) =>{
          e.preventDefault();
        console.log(term)
        
       
        dispatch(filterCategory(term))
        
         
      }
     
    const tableCategory = movie?.
        map((category, id) => (category.category)).
        filter((item, id) => movie.
            map((category) => (category.category)).indexOf(item) === id).
        map((category) => category).
        map((category, index) => (
            category
        ));
    
    return (
        <div >
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography component={Link} to={"/"} variant='h6'
                        className={classes.title} color='inherit'>
                        <img src={logo} alt="Movies" height="30px"
                            className={classes.image} />
                        I♥Movies
                    </Typography>

                    <form className={classes.form} onSubmit={handleSubmit} ref={formRef}>
                        <input className={classes.inText} type="text" placeholder="Shoose your Film" value={listSearch} onChange={handleSearch}/>
                        <input className={classes.inputSub} type="submit"  value="Search" />
                    </form>
                    
                    <InputLabel>Filtring Movies</InputLabel>
        
                    <Select className={classes.selectStyle} onChange={searchCategoryMovie }
                       multiple value={term}
                        input={<OutlinedInput style={{ color: 'blue' }} label="Category" />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Placeholder</em>;
                            }

                            return selected.join(', ');
                        }}
                        
                        >
                        <MenuItem disabled >
                            <em>Category</em>
                        </MenuItem>
                        {
                            tableCategory?.map((category, index) => (
                                <MenuItem key={index} value={category}>{category}</MenuItem>
                            ))
                        }
                         <button className={classes.btnSelect} onClick={handleChangeSelected}>Filter</button>
                         <button className={classes.btnSelect} component={Link} to="/">Return</button>
                    </Select>
                   
                 
                
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default Header;