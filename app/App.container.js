import React, {Component} from 'react';
import {View} from 'react-native';
import HomePage from './pages/Home.page';
import AddNotePage from './pages/AddNote.page.js';
import commonStyles from './styles/common.style';

class App extends Component {
  state = {
    addNoteVisibility: false
  }

  showAddNote = () => this.setState({addNoteVisibility: true})
  hideAddNote = () => this.setState({addNoteVisibility: false})

  render () {
    return (
      <View style={commonStyles.appContainer}>
        <HomePage onAddNotePress={this.showAddNote}/>
        <AddNotePage visible={this.state.addNoteVisibility} onClosePress={this.hideAddNote}/>
      </View>
    );
  }
}


export default App;
