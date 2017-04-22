import React, { Component } from 'react';
import './css/Demo.css';
import ManagePasswords from './manage-passwords/ManagePasswords';

class Demo extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React-Manage-Passwords</h2>
        <p className="App-intro">
          Try it yourself. Introduce a password.
        </p>
        <ManagePasswords show={true} value="12345678"/>
      </div>
    );
  }
}

export default Demo;
