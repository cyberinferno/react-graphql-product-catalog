import {
  START_LIST_FETCH,
  FINISH_LIST_FETCH,
} from '../actions/types';

const INITIAL_STATE = {
  data: {},
  loading: false,
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_LIST_FETCH:
      return { ...state, loading: true };
    case FINISH_LIST_FETCH:
      return { ...state, data: action.payload, loading: false };
    default:
      return state;
  }
};
