import React from "react";
import {
  TextField,
  Typography,
  Button,
  Container,
  FormControlLabel,
  Switch,
} from "@material-ui/core";

const Form = () => {
  return (
    <Container>
      <form>
        <div style={{ margin: "40px" }}>
          <Typography variant='h3' align='center'>
            Add a TODO
          </Typography>
        </div>
        <div style={{ margin: "30px" }}>
          <TextField
            type='text'
            label='Title'
            variant='outlined'
            required
            fullWidth
          />
        </div>
        <div style={{ margin: "30px" }}>
          <TextField
            type='text'
            label='Description'
            variant='outlined'
            required
            fullWidth
          />
        </div>
        <div style={{ margin: "30px" }}>
          <FormControlLabel
            control={<Switch name='completed' color='primary' />}
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
