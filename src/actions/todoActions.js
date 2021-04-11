import {
  ADD_TODO,
  CHANGE_STATUS,
  CLEAR_COMPLETE,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from '../constants/actionTypes';

export const addTodo = todo => {
  return { type: ADD_TODO, payload: todo };
};

export const removeTodo = id => {
  return { type: REMOVE_TODO, payload: id };
};

export const toggleCompleteTodo = todo => {
  return { type: TOGGLE_COMPLETE, payload: todo };
};

export const changeStaus = id => {
  return { type: CHANGE_STATUS, payload: id };
};

export const clearCompletedTodos = () => {
  return { type: CLEAR_COMPLETE };
};
