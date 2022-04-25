import { Grid } from '@material-ui/core';
import React, {useEffect} from 'react';
import CardItem from '../Card/CardItem';
import { movies$ } from '../../movies';
import { useDispatch, useSelector } from 'react-redux';


import useStyles from './style';


const Form = ({currentMovies}) => {
    const classes = useStyles();
  
 
  
    return (
        <div className={classes.formComponent}>
            <div className='result'>
                <Grid container justifyContent="center" spacing={4}>
                    {
                        currentMovies?.map((movie, id) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={movie.id}>
                                    <CardItem key={movie.id} movie={movie}
                                    />
                                </Grid>
                            ))
                    }
                </Grid>
            </div>
        </div>
    );
};

export default Form;


