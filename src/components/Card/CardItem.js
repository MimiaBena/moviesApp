import React , {useState} from 'react';
import { Typography, Button, Card, CardActions, CardMedia, CardContent, Grid } from '@material-ui/core';
import { LikeButton, UpdownButton, Provider } from '@lyket/react';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import useStyles from './style';
const CardItem = ({ movie, handleUpdateLikes,handleUpdateDisLikes, onRemoveFromCart, likeActive, dislikeActive }) => {
    const classes = useStyles();
     const [color, setColor] = useState('Black');


    return (

        <Card>
            <CardMedia component="img" image="/acean.jpg" alt="P" />
            <CardContent  >
                <div className={classes.cardContent}>
                    <Typography className={classes.cardTitle} gutterBottom variant='h4'>{movie.title}</Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: movie.category }}
                    variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button variant='contained' type='button' color='secondary' onClick={() => { onRemoveFromCart(movie.id); }}>Remove</Button>
                <div className={classes.buttons}>
                    <Button type='button' 
                    onClick={ ()=> handleUpdateLikes((movie.id))}><AiOutlineLike /></Button>
                    <Typography>{movie.likes}/{movie.dislikes}</Typography>
                    <Button type='button' 
                     onClick={() =>{ handleUpdateDisLikes(movie.id)}}><AiOutlineDislike /> </Button>
                </div>
            </CardActions>
        </Card>
    );
};

export default CardItem;