
import path from '../../components/path';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router'
import Grid from '@material-ui/core/Grid';
import CardLayout1 from '../../components/CardLayout1';
import Container from "@material-ui/core/Container";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import SmallButton from '../../components/SmallButton';
import Head from 'next/head';

const useStyles = makeStyles((theme) => ({
    root: {
    
      flexGrow: 1,
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  
  }));
  


export const getStaticProps = async () =>{
    const res =  await fetch(`${path}data`);
    const data =  await res.json();
    return{
        props: {projects: data}
    }
}





const Projects = ({projects}) => {
    const router = useRouter();
    const classes = useStyles();
    const [openCard1, setOpenCard1] = React.useState(false);
    const [openCard2, setOpenCard2] = React.useState(false);
    const [openCard3, setOpenCard3] = React.useState(false);
    const [openOtherCards, setOpenOtherCards] = React.useState(false);

    //card1
    const handleOpenCard1 = () => {
      setOpenCard1(true);
    };
    const handleCloseCard1 = () => {
      setOpenCard1(false);
    };

    //card2
    const handleOpenCard2 = () => {
      setOpenCard2(true);
    };
    const handleCloseCard2 = () => {
      setOpenCard2(false);
    };
    
    //card3
    const handleOpenCard3 = () => {
      setOpenCard3(true);
    };
  
    const handleCloseCard3 = () => {
      setOpenCard3(false);
    };

    //othercards
    const handleOpenOtherCards = () => {
      setOpenOtherCards(true);
    };
  
    const handleCloseOtherCards = () => {
      setOpenOtherCards(false);
    };
    
  
    return ( <>
        <Head>
        <title>Portfolio | Projects</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
        <Container maxWidth="md">
        <div className={classes.root}>
        <Grid container justify="center" alignItems="center" spacing={1} >

        {/* first card  */}

          <Grid item xs={12}>
            <div onClick={handleOpenCard1}>
            <CardLayout1 image={projects[0].image} title={projects[0].title} height="250"/>
            </div>
            <Modal
              aria-labelledby="transition-modal-title-0"
              aria-describedby="transition-modal-description-0"
              className={classes.modal}
              open={openCard1}
              onClose={handleCloseCard1}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={openCard1}>
              <div className={classes.paper}>
              <h2 id="transition-modal-title-0">{projects[0].title}</h2>
              <h3>Tech : {projects[0].tech}</h3>
              <p id="transition-modal-description-0">{projects[0].describe}</p>
              <SmallButton name="Source" link={projects[0].linkSource}/>
              {projects[0].linkAction? <SmallButton name="Action" link={projects[0].linkAction} />:<></>}
              </div>
            </Fade>
            </Modal>
          </Grid>

          {/* second card */}

          <Grid item xs={12} sm={6}>
            
            <div type="button" onClick={handleOpenCard2}>
            <CardLayout1 image={projects[1].image} title={projects[1].title} height="150"/>
            </div>
            <Modal
              aria-labelledby="transition-modal-title-1"
              aria-describedby="transition-modal-description-1"
              className={classes.modal}
              open={openCard2}
              onClose={handleCloseCard2}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={openCard2}>
              <div className={classes.paper}>
              <h2 id="transition-modal-title-1">{projects[1].title}</h2>
              <h3>Tech : {projects[1].tech}</h3>
              <p id="transition-modal-description-1">{projects[1].describe}</p>
              <SmallButton name="Source" link={projects[1].linkSource}/>
              {projects[1].linkAction? <SmallButton name="Action" link={projects[1].linkAction} />:<></>} </div>
            </Fade>
            </Modal>  
          </Grid>
          
              {/* third card */}

          <Grid item xs={12} sm={6}>
            
            <div type="button" onClick={handleOpenCard3}>
            <CardLayout1 image={projects[2].image} title={projects[2].title} height="150"/>
            </div>
            <Modal
              aria-labelledby="transition-modal-title-2"
              aria-describedby="transition-modal-description-2"
              className={classes.modal}
              open={openCard3}
              onClose={handleCloseCard3}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
                timeout: 500,
              }}
            >
            <Fade in={openCard3}>
              <div className={classes.paper}>
              <h2 id="transition-modal-title-2">{projects[2].title}</h2>
              <h3>Tech : {projects[2].tech}</h3>
              <p id="transition-modal-description-2">{projects[2].describe}</p>
              <SmallButton name="Source" link={projects[2].linkSource}/>
              {projects[2].linkAction? <SmallButton name="Action" link={projects[2].linkAction} />:<></>} </div>
            </Fade>
            </Modal>  
          </Grid>
          {projects.map((proj,i)=>{
                if (i>2)
                {return(
                
                    <Grid key={proj._id} item xs={6} sm={3}>
                      <div type="button" onClick={handleOpenOtherCards}>
                      <CardLayout1 image={proj.image} title={proj.title} height="150"/>
                      </div>
                      <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        className={classes.modal}
                        open={openOtherCards}
                        onClose={handleCloseOtherCards}
                        closeAfterTransition
                        BackdropComponent={Backdrop}
                        BackdropProps={{
                          timeout: 500,
                        }}
                      >
                    <Fade in={openOtherCards}>
                    <div className={classes.paper}>
                    <h2 id="transition-modal-title">{proj.title}</h2>
                    <h3>Tech : {proj.tech}</h3>
                    <p id="transition-modal-description">{proj.describe}</p>
                    <SmallButton name="Source" link={proj.linkSource}/>
                    {proj.linkAction? <SmallButton name="Action" link={proj.linkAction} />:<></>}
                    </div>
                    </Fade>
                    </Modal> 
                    </Grid>
                    
                
                )}
          })}
         
          
        </Grid>
      </div> 
      </Container>
      </>);
}
 
export default Projects;
