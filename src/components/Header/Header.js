import { MenuItem, InputLabel, Select, Grid } from '@material-ui/core';
import React from 'react';
import useStyles from './style';

const Header = ({movies,value, handleSubmit, handleSearch, handleChange}) => {
    const classes = useStyles();
    const arr = ['Comedy', 'Animation', 'Drame', 'Thrill' ]
    return (
        <div >
            <h1 className={classes.title} >Movie App</h1>
            <div className={classes.formContainer}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <input className={classes.inpuText} type="text" value={value} placeholder="Shoose your Film" id="input-search" onChange={handleSearch} />
                    <input className={classes.inputSubmit} type="submit" value="Search" />

                </form>

                <InputLabel>Shipping Options</InputLabel>
                <Select onChange={handleChange}  >
                    
                    {
                        movies.
                              map((category, id) => (category.category)).
                              filter((item, id) => movies.
                              map((category, id) => (category.category)).indexOf(item) === id).
                              map((category, index) => category).
                              map((category, index) => (
                                <MenuItem key={index} value={category}>{category}</MenuItem>
                            ))
                    }
                </Select>
            </div>
        </div>
    );
};

export default Header;