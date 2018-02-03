import AddNote from '../components/AddNote/AddNote.component';
import {addNote} from '../redux/actions/index.actions';
import {connect} from 'react-redux';

const mapDispatchToProps = (dispatch) => ({
  saveNote: (noteContent) => dispatch(addNote(noteContent))
});
export default connect(null, mapDispatchToProps)(AddNote);
