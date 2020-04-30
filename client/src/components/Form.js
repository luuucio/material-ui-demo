import React, { useState } from "react";
import {
  TextField,
  Typography,
  Button,
  Container,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

const Form = () => {
  const [state, setState] = useState({
    title: null,
    description: null,
    completed: false,
  });

  const setCompleted = () => {
    setState({ ...state, completed: !state.completed });
  };

  const onChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <Container>
      <form onSubmit={onSubmit}>
        <div style={{ margin: "40px" }}>
          <Typography variant='h3' align='center'>
            Add a TODO
          </Typography>
        </div>
        <div style={{ margin: "30px" }}>
          <TextField
            type='text'
            label='Title'
            name='title'
            variant='outlined'
            required
            fullWidth
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "30px" }}>
          <TextField
            type='text'
            label='Description'
            name='description'
            variant='outlined'
            required
            fullWidth
            onChange={onChange}
          />
        </div>
        <div style={{ margin: "30px" }}>
          <FormControlLabel
            control={
              <Switch
                name='completed'
                color='primary'
                onChange={setCompleted}
              />
            }
            label='Completed'
          />
        </div>
        <div align='center' style={{ margin: "30px" }}>
          <Button variant='contained' color='primary' type='submit'>
            Submit
          </Button>
        </div>
        <div align='center' style={{ margin: "30px" }}>
          <Button variant='contained' color='secondary'>
            Clear
          </Button>
        </div>
      </form>
    </Container>
  );
};

export default Form;
