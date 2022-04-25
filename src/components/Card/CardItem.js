import React , {useState} from 'react';
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {removeMovie} from './../../feature/movies.slice';
import useStyles from './style';
const CardItem = ({movie}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    
     
    return (

        <Card>
            <CardMedia component="img" image="./acean.jpg" alt="P" />
            <CardContent  >
                <div className={classes.cardContent}>
                    <Typography className={classes.cardTitle} gutterBottom variant='h4'>{movie.title}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: movie.category }}
                    variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant='contained' type='button' color='secondary' onClick={(e) => dispatch(removeMovie(movie.id))}>Remove</Button>
                <div className={classes.buttons}>
                    <Button type='button'  className={classes.styleButton}
                   ><AiOutlineLike /></Button>
                    <Typography>{movie.likes}/{movie.dislikes}</Typography>
                    <Button type='button' className={classes.styleButton}
                    ><AiOutlineDislike /> </Button>
                </div>
            </CardActions>
        </Card>
    );
};

export default CardItem;