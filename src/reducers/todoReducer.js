import {
  ADD_TODO,
  CLEAR_COMPLETE,
  ORDER_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from '../constants/actionTypes';

const TodoReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    case REMOVE_TODO:
      return todos.filter(todo => todo.id !== action.payload);
    case TOGGLE_COMPLETE:
      return todos.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              complete: !todo.complete,
              status: todo.complete ? 'active' : 'complete',
            }
          : todo
      );
    case CLEAR_COMPLETE:
      return todos.filter(todo => !todo.complete);
    case ORDER_TODO:
      return action.payload;
    default:
      return todos;
  }
};

export default TodoReducer;
