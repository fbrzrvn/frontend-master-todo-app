import { combineReducers } from 'redux';
import listReducer from './listReducer';
import todoReducer from './todoReducer';

const reducers = combineReducers({ todos: todoReducer, filters: listReducer });

export default reducers;
