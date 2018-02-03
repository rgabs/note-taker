import {createAction} from 'redux-actions';

export const ADD_NOTE = 'ADD_NOTE';

export const addNote = createAction(ADD_NOTE);
/* This is equivalent to
export const addNote = (payload) => {
  return {
    type: ADD_NOTE,
    payload: payload
  };
};
*/
