import {connect} from 'react-redux';
// import {setTitle, setText} from '../redux/actions/index.actions';
import Home from '../components/Home/Home.component';

const getFilteredNotes = (notes, heartFilter) => heartFilter ? notes.filter((note) => note.heart) : notes;

const mapStateToProps = ({notes, heartFilter}) => ({
  notes: getFilteredNotes(notes, heartFilter),
  heartFilter
});

const mapDispatchToProps = (dispatch) => ({
  toggleHeartFilter: () => dispatch({
    type: 'TOGGLE_HEART_FILTER'
  }),
  toggleHeartForNote: (id) => () => dispatch({
    type: 'TOGGLE_HEART',
    payload: id
  }),
  deleteNote: (id) => () => dispatch({
    type: 'DELETE_NOTE',
    payload: id
  })
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
