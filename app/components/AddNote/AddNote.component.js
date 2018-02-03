/* AddNote: */

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, Platform} from 'react-native';
import Modal from 'react-native-modal-overlay';
import StatusBar from '../StatusBar/StatusBar.component';
import Touchable from 'react-native-platform-touchable';
import Header from '../Header/Header.component';
import commonStyles from '../../styles/common.style';

class AddNote extends Component {
  headerRight = <Touchable onPress={this.props.onClosePress} style={commonStyles.header}><Text>Close </Text></Touchable>
  render () {
    return (
      <Modal visible={this.props.visible} containerStyle={{padding: 0, backgroundColor: 'transparent'}} childrenWrapperStyle={{flex: 1, padding: 0}}>
        {Platform.OS === 'ios' ? <StatusBar /> : null}
        <Header title='Add Note' rightComponent={this.headerRight}/>
        <View>

          <Text>AddNote</Text>
        </View>
      </Modal>);
  }
}
AddNote.defaultProps = {
};
AddNote.propTypes = {
};
export default AddNote;
