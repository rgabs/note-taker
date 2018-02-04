import {ADD_NOTE, TOGGLE_HEART, DELETE_NOTE} from '../actions/index.actions';

const notes = (state = [], action) => {
  switch (action.type) {
  case ADD_NOTE: {
    return [{
      text: action.payload,
      id: Date.now(),
      heart: false
    }, ...state];
  }
  case TOGGLE_HEART: {
    return state.map((note) => note.id === action.payload ? {...note, heart: !note.heart} : note);
  }
  case DELETE_NOTE: {
    return state.filter((note) => note.id !== action.payload);
  }
  default:
    return state;
  }
};

export default notes;
