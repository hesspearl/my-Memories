import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@material-ui/core";
import { useStyle } from "./style";



const Index = (props:CardProps) => {
    const classes = useStyle();
    const{ creator, message ,title ,id}=props

   console.log(message)

  return (
    <Card className={classes.root}>
      <CardHeader title={title}  />
      <CardContent>
        <Typography variant="body2" component="p">
      {creator}
        </Typography>
      </CardContent>
      
      <CardContent>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Index;
