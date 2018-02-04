import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';
import Modal from 'react-native-modal-overlay';
import StatusBar from '../StatusBar/StatusBar.component.js';
import Header from '../Header/Header.component.js';
import styles, {InputWrapper, NoteInput} from './AddNote.component.styled.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme.style.js';
import {HeaderIconWrapper} from '../../styles/common.styled.js';

class AddNote extends Component {
  state = {
    note: ''
  }
  setNote = (note) => this.setState({note})

  onAddNotePress = () => {
    this.state.note && this.props.saveNote(this.state.note);
    this.setState({note: ''});
    this.props.onClosePress();
  }

  headerRight = <HeaderIconWrapper onPress={this.props.onClosePress}>
    <Icon name='times' size={30} color='white' />
  </HeaderIconWrapper>

  headerLeft = <HeaderIconWrapper onPress={this.onAddNotePress}>
    <Icon name='check' size={30} color='white' />
  </HeaderIconWrapper>

  render () {
    return (
      <Modal visible={this.props.visible} animationDuration={250} containerStyle={styles.modalContainer}
          childrenWrapperStyle={styles.modalChildrenWrapper}>
        {Platform.OS === 'ios' ? <StatusBar /> : null}
        <Header title='Add Note' rightComponent={this.headerRight} leftComponent={this.headerLeft}/>
        <InputWrapper>
          <NoteInput underlineColorAndroid='transparent' placeholderTextColor={theme.PLACEHOLDER_COLOR} placeholder="What's on your mind?"
            multiline onChangeText={this.setNote}/>
        </InputWrapper>
      </Modal>);
  }
}
AddNote.defaultProps = {
};
AddNote.propTypes = {
  onClosePress: PropTypes.func,
  setText: PropTypes.func,
  saveNote: PropTypes.func,
  visible: PropTypes.bool
};
export default AddNote;
