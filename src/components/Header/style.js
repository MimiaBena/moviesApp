import { makeStyles, alpha } from '@material-ui/core/styles';
const drawerWidth = 0;
export default makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
    

  },
    title:{
      flexGrow: 1,
      alignItems: 'center',
      display: 'flex',
      textDecoration: 'none',
    },
    image: {
      marginRight: '10px',
      borderRadius: '50%'
    },
   
        formContainer: {
            textAlign: 'center'
          },
          form: {
            textAlign: 'center',
            width: '100%',
            textAlign: 'center',
            border: 'none',
            display: 'inline-block',
            
          },
          inText:{
             border: 'none',
             height: '30px',
             width: '30%',
             borderRadius: '20%',
          },
          inputSub:{
            border: 'none',
            borderRadius: '30%',
            width: '10%',
            height: '30px',
            marginLeft: '5px'
          },
          selectStyle:{
               width: '30%',
          },
       
        
      
      
    
          
}));