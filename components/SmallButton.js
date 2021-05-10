import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  btnStyle: {
    fontWeight: "500",
    fontSize: "12px",
    marginRight:"5px",
    display: "inline-block",
    padding: "5px 10px",
    borderRadius: "50px",
    transition: "0.5s",
    color: "#64dd17",
    border: "2px solid #64dd17",
    textDecoration: "none",
    "&:hover": {
      background: "#64dd17",
      color: "#212121",
      textDecoration: "none",
    },
  },
});

const  SmallButton=(props)=> {
  const classes = useStyles();
  
  
  

  return (
    <>
      <a href={props.link} className={classes.btnStyle}>
        {props.name}
      </a>
    </>
  );
}

export default SmallButton;
