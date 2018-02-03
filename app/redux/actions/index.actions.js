import {createAction} from 'redux-actions';

export const ADD_NOTE = 'ADD_NOTE';
export const TOGGLE_HEART_FILTER = 'TOGGLE_HEART_FILTER';
export const TOGGLE_HEART = 'TOGGLE_HEART';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = createAction(ADD_NOTE);

/* This is equivalent to
export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload: payload
  };
};
*/
export const toggleHeartFilter = createAction(TOGGLE_HEART_FILTER);
export const toggleHeartForNote = createAction(TOGGLE_HEART);
export const deleteNote = createAction(DELETE_NOTE);
