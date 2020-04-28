import React, { useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodos } from "../actions/todoActions";

const TodoList = () => {
  useEffect(() => {
    dispatch(getTodos());
  }, []);

  const { todo } = useSelector(state => ({
    todo: state.todo,
  }));

  const dispatch = useDispatch();

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
