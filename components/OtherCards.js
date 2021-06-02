import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import CardLayout1 from "./CardLayout1";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SmallButton from "./SmallButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Othercards = (props) => {
  const classes = useStyles();
  const [openOtherCards, setOpenOtherCards] = React.useState(false);

  const handleOpenOtherCards = () => {
    setOpenOtherCards(true);
  };

  const handleCloseOtherCards = () => {
    setOpenOtherCards(false);
  };

  return (
    <Grid key={props._id} item xs={6} sm={3}>
      <div type="button" onClick={handleOpenOtherCards}>
        <CardLayout1 image={props.image} title={props.title} height="150" />
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
            <h2 id="transition-modal-title">{props.title}</h2>
            <h3>Tech : {props.tech}</h3>
            <p id="transition-modal-description">{props.describe}</p>
            <SmallButton name="Source" link={props.linkSource} />
            {props.linkAction ? (
              <SmallButton name="Action" link={props.linkAction} />
            ) : (
              <></>
            )}
          </div>
        </Fade>
      </Modal>
    </Grid>
  );
};
export default Othercards;
