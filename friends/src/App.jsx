import React, { Component } from 'react';
import FriendsList from './components/FriendsList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Friends</h1>
        <FriendsList />
      </div>
    );
  }
}

export default App;
