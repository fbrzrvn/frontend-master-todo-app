import { ADD_TODO } from '../constants/actionTypes';

export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};
