import React, { Component } from 'react';
import './Demo.css';
import Password from './lib/Password';

class Demo extends Component {
  render() {
    return (
      <div className="App">
          <h2>Welcome to React-Component-Passwords</h2>
        <p className="App-intro">
          Try it yourself. Introduce a password.
        </p>
        <Password show={true} value="12345567" numbers="true" length="10"/>
      </div>
    );
  }
}

export default Demo;
