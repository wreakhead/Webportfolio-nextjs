import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

const AboutLayout = (data)=>{
    const classes = useStyles();
    return(
        <>
        <Grid   item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                    <img src={data.image} alt={data.title} style={{minWidth:"90vw"}} height={200} />
                </Paper>
            </Grid>
           <Grid  item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                    <h1>{data.title}</h1>
                    <h3>{data.describe}</h3>
                </Paper>
            </Grid>
        </>
        )
}
export default AboutLayout;