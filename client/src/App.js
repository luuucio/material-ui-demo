import React, { Fragment } from "react";
import Form from "./components/Form";
import { CssBaseline, AppBar, Grid, Typography } from "@material-ui/core/";

const App = () => {
  return (
    <Fragment>
      <CssBaseline />
      <AppBar position='static'>
        <Typography variant='h2' align='center' style={{ marginTop: "15px" }}>
          Material-UI Demo
        </Typography>
        <Typography variant='h4' align='center' style={{ margin: "15px" }}>
          using React, Redux and JSON-Server
        </Typography>
      </AppBar>
      <Grid container>
        <Grid item md={6} sm={12}>
          <Form />
        </Grid>
        <Grid item md={6} sm={12}>
          Hello
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
