import { green, red } from '@material-ui/core/colors';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    height: 260,
  },
  cardTitle: {
    fontWeight: "bold"
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  activeLike: {
    backgroundColor:'red',
    color: red,
  },
  noactiveLike: {   
    color: green,
  },
  styleButton: {
    borderRadius: '50%',
    width: '5px',
    margin: '3px'
  }
}));