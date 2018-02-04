import {connect} from 'react-redux';
import Home from '../components/Home/Home.component.js';
import * as actions from '../redux/actions/index.actions.js';

const getFilteredNotes = (notes, heartFilter) => heartFilter ? notes.filter((note) => note.heart) : notes;

const mapStateToProps = ({notes, heartFilter}) => ({
  notes: getFilteredNotes(notes, heartFilter),
  heartFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggleHeartFilter: () => dispatch(actions.toggleHeartFilter()),
  toggleHeartForNote: (id) => () => dispatch(actions.toggleHeartForNote(id)),
  deleteNote: (id) => () => dispatch(actions.deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
