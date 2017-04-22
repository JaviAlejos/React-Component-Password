import React, { Component } from 'react';
import zxcvbn from "zxcvbn";

class ManagePasswords extends Component {

  constructor(props) {
    super(props);
    const { value } =props;
    this.state = {password:value};
  }

  handlePassChange = (event) => {
    this.setState({ password: event.target.value });
  };

renderInput(){
  const { show} =this.props;
//const res=zxcvbn("rycbar123");//res.score
/*
result.score      # Integer from 0-4 (useful for implementing a strength bar)

0 # too guessable: risky password. (guesses < 10^3)

1 # very guessable: protection from throttled online attacks. (guesses < 10^6)

2 # somewhat guessable: protection from unthrottled online attacks. (guesses < 10^8)

3 # safely unguessable: moderate protection from offline slow-hash scenario. (guesses < 10^10)

4 # very unguessable: strong protection from offline slow-hash scenario. (guesses >= 10^10)

*/
  if (!show)
    return (<input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange}/>);
  else
    return (<input type="text" placeholder="password" value={this.state.password} onChange={this.handlePassChange}/>);
}

  render() {
    return (
      <div>
        {this.renderInput()}
      </div>
    );
  }
}

export default ManagePasswords;
