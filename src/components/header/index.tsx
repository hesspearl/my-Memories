import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { useStyle } from "./style";
import { ResolvedModuleWithFailedLookupLocations } from "typescript";

const Index = () => {
  const classes = useStyle();

  return (
    <div className={classes.contain}>
      <AppBar color="primary" className={classes.appbar} position="absolute">
        <Toolbar className={classes.toolbar}>
            <div className={classes.background}>
                <Typography variant="h4" color="textSecondary" className={classes.text}>
              Memories
          </Typography> 
            </div>
         
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Index;
