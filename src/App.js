import React, { Component } from 'react';
import CommentDetail from './Components/CommentDetail';
import ApprovalCard from './Components/ApprovalCard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="ui container commnets">
          <ApprovalCard children="sias" >
            <h2>Warning!</h2>
            <p>Lorem ipsum dolor yeah</p>
            <CommentDetail date="Today at 3:00PM" description="lorem ipsum 1" />
          </ApprovalCard>
          <CommentDetail date="Today at 3:00PM" description="lorem ipsum 1" />
          <CommentDetail date="Today at 4:00PM" description="lorem ipsum 2" />
          <CommentDetail date="Today at 5:00PM" description="lorem ipsum 3" />
          <CommentDetail date="Today at 6:00PM" description="lorem ipsum 4" />
          <h2>Hello!</h2>
        </div>  
      </div>
    );
  }
}

export default App;
