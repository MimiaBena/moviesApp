import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  formComponent:{
    margin:22,
    
  },
    formContainer: {
        textAlign: 'center'
      },
      form: {
        width: 300,
        margin: '0 auto'
      },
      inpuText:{
        padding: '1 10',
        borderRadius: '10 10 0 0',
        border: 'none',
        fontSize: '1.5',
        display: 'block',
        margin: '0 auto',
        width: 220,
        outline: 'none',
        textAlign: 'center'
      },
      TextSubmit:{
        padding: '1 10',
        width: 220,
        borderRadius: '0 0 10 10',
        border: 'none',
        background: 'green',
        color: 'white',
        fontSize: '1.5',
        cursor: 'pointer',
        zIndex: 10,
        position: 'relative'
    },
    btnCortContainer: {
        margin: '8 auto',
        width: 220,
        display: 'flex',
        justifyContent: 'space-around',
        cursor: 'pointer'
    },
    btnSortgoodToBad:{
        borderRadius: '10 0 0 10',
        background: 'bleu',
      width: 110,
      transition: 0.3,
      position: 'relative'

    },
    btnSortBadToGood:{
        borderRadius: '0 10 10 0',
        background: 'bleu',
      width: 110,
      transition: 0.3,
      position: 'relative'

    },
    badToGoodSpan:{
        transform: 'translateY(-50%) rotate(90deg)',
        left: 16,
        osition: 'absolute',
        top: '50%'


    },

    goodToBadSpan:{
        transform: 'translateY(-50%) rotate(-90deg)',
        right: 18,
        position: 'absolute',
        top: '50%'

    },
    
      
 
}));