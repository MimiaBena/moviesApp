import { makeStyles } from '@material-ui/core/styles';
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
      fontSize: '12px'
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
            border: 'none',
            display: 'inline-block',
            
          },
          inText:{
             border: 'none',
             height: '30px',
             textAlign: 'center',
             borderRadius: '20%',
          },
          inputSub:{
            border: 'none',
            borderRadius: '30%',
            height: '30px',
            marginLeft: '5px',
            marginBottom: '5px',
          },
          selectStyle:{
               width: '20%',
          },
          btnSelect: {
               marginLeft: '12px',
               border: 'none',
               background: 'white',
               color: 'blue',
               
          },
        
      
      
    
          
}));