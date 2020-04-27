import React from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const initialState = {
    todos: [
      {
        id: 1,
        title: "Call John",
        description: "At dinner time",
        completed: false,
      },
      {
        id: 2,
        title: "Backup the laptop",
        description: "Use the new hard drive",
        completed: true,
      },
    ],
  };

  return (
    <div>
      {initialState.todos.map(todo => (
        <div key={todo.id} style={{ margin: "50px" }}>
          <TodoItem todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
