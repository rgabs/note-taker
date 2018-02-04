import {combineReducers} from 'redux';
import notes from './notes.reducer.js';
import heartFilter from './heartFilter.reducer.js';

export default combineReducers({
  notes,
  heartFilter
});
