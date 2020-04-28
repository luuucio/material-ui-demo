import { ADD_TODO, GET_TODOS, SET_LOADING } from "../actions/types";

const initialState = {
  todos: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case GET_TODOS:
      return {
        ...state,
        todos: action.payload,
        loading: false,
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        loading: false,
      };
    default:
      return state;
  }
};
