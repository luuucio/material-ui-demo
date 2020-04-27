import React, { Fragment } from "react";
import { Paper, Typography, Container } from "@material-ui/core";

const TodoItem = ({ todo }) => {
  const lineTrough = {
    textDecoration: "line-through",
  };

  const inherit = {
    textDecoration: "inherit",
  };

  return (
    <Fragment>
      <Paper>
        <Container style={todo.completed ? lineTrough : inherit}>
          <div
            style={{
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Typography variant='h5'>{todo.title}</Typography>
          </div>
          <div>
            <Typography variant='body1' style={{ paddingBottom: "20px" }}>
              {todo.description}
            </Typography>
          </div>
        </Container>
      </Paper>
    </Fragment>
  );
};

export default TodoItem;
