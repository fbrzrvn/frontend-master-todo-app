import { ADD_TODO } from '../constants/actionTypes';

const TodoReducer = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.payload];
    default:
      return todos;
  }
};

export default TodoReducer;
