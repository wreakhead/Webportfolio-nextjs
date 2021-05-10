import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    
      type:"dark",
      primary:{
        light:"#b2ff59",
        main:"#76ff03",
        dark:"#64dd17",
        contrastText:"#212121"
      },
      secondary:{
        light:"#b2ff59",
        main:"#76ff03",
        dark:"#64dd17",
        contrastText:"#212121"
        
      },
    error: {
      main: red.A400,
    },
    background: {
      default: '#424242',
    },
  },
});

<<<<<<< HEAD
export default theme;
=======
export default theme;
>>>>>>> 08ac4602d7f037508c347cd730cc6e70ed5ecc5c
