import { Grid } from '@material-ui/core';
import React from 'react';
import CardItem from '../Card/CardItem';

import useStyles from './style';






const Form = ({ currentPosts, handleUpdateLikes,handleUpdateDisLikes, handleRemoveFromCart,likeActive, dislikeActive }) => {
    const classes = useStyles();

    return (

        <div className={classes.formComponent}>
            <div className='result'>
                <Grid container justifyContent="center" spacing={4}>
                    {
                        currentPosts.
                            map((moviee) => (
                                <Grid item xs={12} sm={6} md={4} lg={3} key={moviee.id}>
                                    <CardItem key={moviee.id} movie={moviee}
                                     handleUpdateLikes={handleUpdateLikes}
                                     handleUpdateDisLikes={handleUpdateDisLikes}
                                     onRemoveFromCart={handleRemoveFromCart} 
                                    
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


