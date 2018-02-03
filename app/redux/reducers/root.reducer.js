import {combineReducers} from 'redux';
import notes from './notes.reducer';
import heartFilter from './heartFilter.reducer';

export default combineReducers({
  notes,
  heartFilter
});
