import { MenuItem, InputLabel, Select, Grid } from '@material-ui/core';
import React from 'react';

import {AppBar, Toolbar,  IconButton, Badge, Menu, Typography} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';

import logo from './acean.jpg';
import useStyles from './style';

const Header = ({movies,value, handleSubmit, handleSearch, handleChange}) => {
    const classes = useStyles();
    const arr = ['Comedy', 'Animation', 'Drame', 'Thrill' ]
    return (
        <div >
            <h1 className={classes.title} >Movie App</h1>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography   variant='h6' className={classes.title} color='inherit'>
                        <img src={logo} alt="Movies" height="25px" className={classes.image} />
                        I♥Movies
                    </Typography>
                    
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.inText} type="text" value={value} placeholder="Shoose your Film" id="input-search" onChange={handleSearch} />
                    <input className={classes.inputSub} type="submit" value="Search" />

                </form>

                <InputLabel>Filtring Movies</InputLabel>
                <Select onChange={handleChange} className={classes.selectStyle} >
                    
                    {
                        movies.
                              map((category, id) => (category.category)).
                              filter((item, id) => movies.
                              map((category) => (category.category)).indexOf(item) === id).
                              map((category) => category).
                              map((category, index) => (
                                <MenuItem key={index} value={category}>{category}</MenuItem>
                            ))
                    }
                </Select>
            
                  
                </Toolbar>
            </AppBar>

            
        </div>
    );
};

export default Header;