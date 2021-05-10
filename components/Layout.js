import Navbar from './Navbar';
import {  Grid } from '@material-ui/core';
import Footer from './Footer';


const Layout = ({children}) => {
    return ( 
    <>
  
    <Grid
    container
    direction="column"
    justify="flex-start"
    alignItems="center"
    spacing={4}>

      <Grid item md={10}><Navbar/></Grid>

      <Grid item md={10}>{children}</Grid>
    
      <Grid item ><Footer/></Grid>                  
    
        
    </Grid>
    </> );
}
 
export default Layout;
