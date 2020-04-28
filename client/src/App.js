import React, { Fragment } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { CssBaseline, AppBar, Grid, Typography } from "@material-ui/core/";

import store from "./store";
import { Provider } from "react-redux";

const App = () => {
  return (
    <Provider store={store}>
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
            <TodoList />
          </Grid>
        </Grid>
      </Fragment>
    </Provider>
  );
};

export default App;
