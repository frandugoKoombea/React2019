import React, { Component } from 'react';
import CommentDetail from './Components/commentDetail';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className="ui container commnets">
          <CommentDetail />
          <h2>Hello!</h2>
        </div>  
      </div>
    );
  }
}

export default App;
