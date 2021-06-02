import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  highlightCard: {
    borderRadius: "5px",
    "&:hover": {
      boxShadow: "0 -2px 7px #b2ff59",
    },
  },
});

const CardLayout1 = (props) => {
  const classes = useStyles();
  return (
    <>
      <Card elevation={0} className={classes.highlightCard}>
        <Card elevation={0}>
          <CardActionArea>
            <CardMedia
              style={{ borderRadius: "5px" }}
              className="imageImg"
              component="img"
              alt={props.title}
              height={props.height}
              image={props.image}
              title={props.title}
            />
            <h3
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#f2f2f2",
              }}
            >
              {props.title}
            </h3>
          </CardActionArea>
        </Card>
      </Card>
    </>
  );
};
export default CardLayout1;
