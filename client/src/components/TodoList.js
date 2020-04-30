import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../actions/todoActions";
import { BounceLoader } from "react-spinners";
import { Grid } from "@material-ui/core";

const TodoList = () => {
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const { todo } = useSelector(state => ({
    todo: state.todo,
  }));

  const dispatch = useDispatch();

  if (todo.loading)
    return (
      <Grid
        container
        item
        style={{
          height: "70vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Grid>
          <BounceLoader size='150px' color='#00838f' />
        </Grid>
      </Grid>
    );

  return (
    <div>
      {todo.todos.map(todo => (
        <div key={todo.id} style={{ margin: "50px" }}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
