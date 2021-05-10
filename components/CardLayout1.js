import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { useRouter } from 'next/router';


const CardLayout1=(props)=> {
  const router = useRouter()
    

  return (
    <>
      <Card  elevation={0}>
        <CardActionArea>
          <CardMedia
            style={{borderRadius:'5px'}}
            className="imageImg"
            component="img"
            alt={props.title}
            height={props.height}
            image={props.image}
            title={props.title}
          />
          <h3 style={{display:'flex',justifyContent:'center', color:'#f2f2f2'}}>{props.title}</h3>
        </CardActionArea>
       
        
      </Card>
      
    </>
  );
}
export default CardLayout1;
