import { Grid } from '@material-ui/core';
import React from 'react';
import { useState, useEffect } from "react";
import { movies$ } from '../../assets/movies';
import CardItem from '../Card/CardItem';

import useStyles from './style';
import Paginate from '../footer/Paginate';





const Form = ({ currentPosts, handleUpdateCartQty, handleRemoveFromCart }) => {
    const classes = useStyles();

    return (

        <div className={classes.formComponent}>
            <div className='result'>
                <Grid container justifyContent="center" spacing={4}>
                    {
                        currentPosts.
                            map((moviee) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={moviee.id}>
                                    <CardItem key={moviee.id} movie={moviee} onUpdateCartQty={handleUpdateCartQty}
                                        onRemoveFromCart={handleRemoveFromCart} />
                                </Grid>
                            ))
                    }
                </Grid>
            </div>
        </div>
    );
};

export default Form;


