import React, { Component } from 'react';
import './Demo.css';
import ManagePasswords from './components/ManagePasswords';

class Demo extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React-Manage-Passwords</h2>
        <p className="App-intro">
          Try it yourself. Introduce a password.
        </p>
        <ManagePasswords show={true}/>
      </div>
    );
  }
}

export default Demo;
