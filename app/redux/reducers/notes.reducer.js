import {ADD_NOTE} from '../actions/index.actions';

const notes = (state = [{
  title: 'dfds',
  text: 'wqr3r',
  id: '1234'
}], action) => {
  switch (action.type) {
  case ADD_NOTE: {
    return [...state, {
      text: action.payload,
      id: Date.now(),
      heart: false
    }];
  }
  case 'TOGGLE_HEART': {
    return state.map((note) => note.id === action.payload ? {...note, heart: !note.heart} : note);
  }
  case 'DELETE_NOTE': {
    return state.filter((note) => note.id !== action.payload);
  }
  case 'SHOW_ALL':
  default:
    return state;
  }
};

export default notes;
