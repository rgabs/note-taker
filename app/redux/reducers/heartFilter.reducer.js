import {TOGGLE_HEART_FILTER} from '../actions/index.actions';

const heartFilter = (state = false, action) => {
  switch (action.type) {
  case 'TOGGLE_HEART_FILTER': {
    return !state;
  }
  default:
    return state;
  }
};

export default heartFilter;
