import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Platform, TextInput} from 'react-native';
import Modal from 'react-native-modal-overlay';
import StatusBar from '../StatusBar/StatusBar.component';
import Touchable from 'react-native-platform-touchable';
import Header from '../Header/Header.component';
import styles from './AddNote.component.style.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../styles/theme.style';

import commonStyles from '../../styles/common.style';

class AddNote extends Component {
  state = {
    note: ''
  }
  setNote = (note) => this.setState({note})
  
  onAddNotePress = () => {
    this.props.saveNote(this.state.note);
    this.props.onClosePress();
  }

  headerRight = <Touchable onPress={this.props.onClosePress} style={commonStyles.headerIconWrapper}>
    <Icon name='times' size={30} color='white' />
  </Touchable>

  headerLeft = <Touchable onPress={this.onAddNotePress} style={commonStyles.headerIconWrapper}>
    <Icon name='check' size={30} color='white' />
  </Touchable>

  render () {
    return (
      <Modal visible={this.props.visible} containerStyle={styles.modalContainer} childrenWrapperStyle={styles.modalChildrenWrapper}>
        {Platform.OS === 'ios' ? <StatusBar /> : null}
        <Header title='Add Note' rightComponent={this.headerRight} leftComponent={this.headerLeft}/>
        <View style={styles.inputContainer}>
          <TextInput placeholderTextColor={theme.PLACEHOLDER_COLOR} placeholder="What's on your mind?" multiline style={styles.input} onChangeText={this.setNote}/>
        </View>

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
