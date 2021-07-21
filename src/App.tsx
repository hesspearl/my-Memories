import React from "react";
import { theme } from "./theme";
import { Theme, ThemeProvider } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Header from "./components/header/index";
import Form from "./components/form/index";
import Card from "./components/cards/index";
import { useSelector } from "react-redux";
import { RootState } from "./store/rootStore";

export const useStyle = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.secondary.light,
    minHeight: "110vh",
    height: "100%",

    //width: "100%",
    // minWidth:"100vh"
  },

  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: theme.spacing(3),
  },
}));
function App() {
  const post = useSelector((state: RootState) => state.posts);

  const classes = useStyle();
  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Header />
        <Grid container spacing={4} direction="row-reverse">
          <Grid item sm={12} lg={5}>
            <Form />
          </Grid>

          <Grid item spacing={4} alignItems="stretch" xs={12} sm={12} lg={6}>
            {post.length ? (
              post.map((item, index) => (
                <div className={classes.container} key={index}>
                  <Grid item spacing={3} xs={12} sm={12} lg={12}>
                    <Card {...item} />
                  </Grid>
                </div>
              ))
            ) : (
              <div />
            )}
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}

export default App;
