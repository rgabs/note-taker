import React, {Component} from 'react';
import HomePage from './pages/Home.page.js';
import AddNotePage from './pages/AddNote.page.js';
import {AppWrapper} from './styles/common.styled.js';

class App extends Component {
  state = {
    addNoteVisibility: false
  }

  showAddNote = () => this.setState({addNoteVisibility: true})
  hideAddNote = () => this.setState({addNoteVisibility: false})

  render () {
    return (
      <AppWrapper>
        <HomePage onAddNotePress={this.showAddNote}/>
        <AddNotePage visible={this.state.addNoteVisibility} onClosePress={this.hideAddNote}/>
      </AppWrapper>
    );
  }
}


export default App;
