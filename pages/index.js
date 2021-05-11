import '../styles/Home.module.css'
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Head from 'next/head';
import SmallButton from '../components/SmallButton';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginTop:50,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));
  
const Home = () => {
    const classes = useStyles();
    return (
    <>
      <Head>
        <title>Portfolio | Home</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <div className={classes.root}>
    <Grid container spacing={3}>
            <Grid   item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                    <img src="https://raw.githubusercontent.com/wreakhead/WebPortfolio/main/portfolio-client/src/images/HuionSketch_1620735415946.png" alt="hello_image" style={{minWidth:"30vw"}} height={200} />
                </Paper>
            </Grid>
           <Grid  item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                    <h1>Welcome to my Portfolio.</h1>
                    <h3>Hi, I'm Imran, a Full-Stack Developer.</h3>
                    
                    <SmallButton name={<p>Get to know me</p>} link="/about"></SmallButton>
                </Paper>
            </Grid>
    </Grid>  
    </div>      
    </>
    );
}
 
export default Home;
