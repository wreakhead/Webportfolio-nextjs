import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import path from '../components/path';
import Head from 'next/head';

export const getStaticProps = async () =>{
    const res =  await fetch(`${path}about`);
    const data =  await res.json();
    return{
        props: {aboutData: data}
    }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop:"20px",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

 const  about = ({aboutData}) => {
  const classes = useStyles();

  return (
    <>
      <Head>
        <title>Portfolio | About</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
    <div className={classes.root}>
      <Grid container spacing={3}>
        
       {aboutData.map(data=>{
           return(<>
           <Grid   item xs={12} md={6}>
                <Paper className={classes.paper} elevation={0}>
                    <img src={data.image} alt={data.title} width={440} height={200} />
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
       })}
       
      </Grid>
    </div></>
  );
}

export default about
