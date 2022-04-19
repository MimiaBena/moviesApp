import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  headerContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pageItem:{
    
    display: 'inline-block',
    color: 'black',
    float: 'left',
    padding: '2px 6px',
    textDecoration: 'none',
    listStyle: 'none',
    color: 'black',
    
    
  },
  pagination: {
    
    alignContent: 'center',
    textAlign:'center'
  }
}));