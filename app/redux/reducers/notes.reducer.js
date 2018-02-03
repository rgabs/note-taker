import {ADD_NOTE} from '../actions/index.actions';

const notes = (state = [{
  title: 'dfds',
  text: 'wqr3r'
}], action) => {
  switch (action.type) {
  case ADD_NOTE: {
    return [...state, action.payload];
  }
  default:
    return state;
  }
};

export default notes;
