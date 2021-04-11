import { CHANGE_STATUS } from '../constants/actionTypes';

const listReducer = (state = { status: 'all' }, action) => {
  switch (action.type) {
    case CHANGE_STATUS:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export default listReducer;
