import React from 'react';
import {theme} from "./theme"
import { Theme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles} from '@material-ui/core/styles';
import {Grid} from "@material-ui/core"
import Header from "./components/header/index"
import Form from "./components/form/index"
import Card from "./components/cards/index"
import {useSelector } from "react-redux"
import { RootState} from "./store/rootStore"


export const useStyle= makeStyles((theme:Theme)=>({

  
  root:{
    background:theme.palette.secondary.light,
    height:"110vh",
    margin:0
    // width:"100%",
    // minWidth:"100vh"
  }
}))
function App() {
  const post = useSelector((state:RootState) => state.posts)
  
  const classes= useStyle()
  return (
  <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Header/>
      <Grid container spacing={3} justify="space-between" direction="row-reverse" alignItems="center">
        <Grid item sm={12} md={5} lg={6}>
            <Form/>
        </Grid>
        <Grid item sm={12} md={5} lg={6}>
          {post.length? post.map((item,index)=>
         
        <Card id={index} {...item}/>):<div/> }
         
        </Grid>
      </Grid>
    
    </div>
    
  </ThemeProvider>
  );
}

export default App;
