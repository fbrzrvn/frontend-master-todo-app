import {
  ADD_TODO,
  CLEAR_COMPLETE,
  ORDER_TODO,
  REMOVE_TODO,
  TOGGLE_COMPLETE,
} from '../constants/actionTypes';

const TODO_ITEMS = 'TODO_ITEMS';
const initialState = [
  { id: 1, text: '10 min meditation', complete: false, status: 'active' },
  { id: 2, text: 'Read for 1 hour', complete: false, status: 'active' },
  {
    id: 3,
    text: 'Complete Todo App on Frontend Mentor',
    complete: true,
    status: 'complete',
  },
  { id: 4, text: 'Pick up groceries', complete: false, status: 'active' },
];

const TodoReducer = (state = initialState, action) => {
  let todos;
  switch (action.type) {
    case ADD_TODO:
      todos = [...state, action.payload];
      localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
      return todos;
    case REMOVE_TODO:
      todos = state.filter(todo => todo.id !== action.payload);
      localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
      return todos;
    case TOGGLE_COMPLETE:
      todos = state.map(todo =>
        todo.id === action.payload.id
          ? {
              ...todo,
              complete: !todo.complete,
              status: todo.complete ? 'active' : 'complete',
            }
          : todo
      );
      localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
      return todos;
    case CLEAR_COMPLETE:
      todos = state.filter(todo => !todo.complete);
      localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
      return todos;
    case ORDER_TODO:
      todos = action.payload;
      localStorage.setItem(TODO_ITEMS, JSON.stringify(todos));
      return todos;
    default:
      return state;
  }
};

export default TodoReducer;
