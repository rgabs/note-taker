import AddNote from '../components/AddNote/AddNote.component';
import {setTitle, setText, addNote} from '../redux/actions/index.actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({
  saveNote: () => dispatch(addNote()),
  setText: () => dispatch(setText())
});
export default connect(mapStateToProps, mapDispatchToProps)(AddNote);
