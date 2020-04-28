import { ADD_TODO, GET_TODOS, SET_LOADING } from "./types";

export const setLoading = () => {
  return { type: SET_LOADING };
};

export const addTodo = todo => async dispatch => {
  setLoading();

  const res = await fetch("/todo", {
    method: "POST",
    headers: { "Content-type": "application/json" },
  });
  const data = await res.json();

  dispatch({ type: ADD_TODO, payload: data });
};

export const getTodos = () => async dispatch => {
  setLoading();

  const res = await fetch("/todo");
  const data = await res.json();

  dispatch({ type: GET_TODOS, payload: data });
};
