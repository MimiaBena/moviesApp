import { useState, useEffect } from 'react';
import { MenuItem, AppBar, Toolbar, Typography, InputLabel } from '@material-ui/core';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';

import logo from './acean.jpg';
import useStyles from './style';
import { movies$ } from '../../assets/movies';






const Header = ({ movies, value, valueCat, handleSearch, handleSubmit, handleChange }) => {
    const classes = useStyles();

    const [mov, setMov] = useState(movies);
    const arr = ['Comedy', 'Animation', 'Drame', 'Thrill'];

    useEffect(() => {
        const moviesIds = async () => {
            const movies = await movies$;
            setMov(movies);
        }
        moviesIds();
    }, [])

    const tableCategory = mov.
        map((category, id) => (category.category)).
        filter((item, id) => mov.
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

                    <form className={classes.form} onSubmit={handleSubmit}>
                        <input className={classes.inText} type="text" value={value} placeholder="Shoose your Film" id="input-search" onChange={handleSearch} />
                        <input className={classes.inputSub} type="submit" value="Search" />
                    </form>

                    <InputLabel>Filtring Movies</InputLabel>
                    <Select onChange={handleChange} className={classes.selectStyle}
                        multiple value={valueCat}
                        input={<OutlinedInput style={{ color: 'blue' }} label="Category" />}
                        renderValue={(selected) => {
                            if (selected.length === 0) {
                                return <em>Placeholder</em>;
                            }

                            return selected.join(', ');
                        }}>
                        <MenuItem disabled value="">
                            <em>Category</em>
                        </MenuItem>
                        {
                            tableCategory.
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