import React, { Component } from 'react';
import './App.css';
import { Post } from './Post';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Post />
      </div>
    );
  }
}

export default App;
