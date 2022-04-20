import React , {useState} from 'react';
import { Typography, Button, Card, CardActions, CardMedia, CardContent } from '@material-ui/core';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import useStyles from './style';
const CardItem = ({ movie, handleUpdateLikes,handleUpdateDisLikes, onRemoveFromCart, likeActive, dislikeActive }) => {
    const classes = useStyles();
    const [selectedIndex, setSelectedIndex] = useState('');
    const [selectedIndexA, setSelectedIndexA] = useState('');
     
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
                <Button variant='contained' type='button' color='secondary' onClick={() =>  onRemoveFromCart(movie.id) }>Remove</Button>
                <div className={classes.buttons}>
                    <Button type='button'  className={classes.styleButton}
                    style={{ background: movie.id == selectedIndex && likeActive ? '#00adb5' : 'none'}}
                    onClick={ ()=> {handleUpdateLikes((movie.id));  setSelectedIndex(movie.id)}} ><AiOutlineLike /></Button>
                    <Typography>{movie.likes}/{movie.dislikes}</Typography>
                    <Button type='button' className={classes.styleButton}
                    style={{ background: movie.id === selectedIndexA && dislikeActive ? 'red' : 'none'}}
                     onClick={() =>{ handleUpdateDisLikes(movie.id); setSelectedIndexA(movie.id)}}><AiOutlineDislike /> </Button>
                </div>
            </CardActions>
        </Card>
    );
};

export default CardItem;