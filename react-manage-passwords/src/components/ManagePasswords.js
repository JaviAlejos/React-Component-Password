import React, { Component } from 'react';
import zxcvbn from "zxcvbn";
import {Glyphicon} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import './css/App.css';

class ManagePasswords extends Component {

  constructor(props) {
    super(props);
    const { value } =props;
    if(value)
      this.state = {password:value};
    else
      this.state = {password:""};
  }

  handlePassChange = (event) => {
    this.setState({ password: event.target.value });
  };

renderInput(){
  const { show} =this.props;
  var component;

  const res=zxcvbn(this.state.password);
  const score=res.score;

  switch (score) {
    case 0:
    case 1:
        component= <Glyphicon className="Glyphicon GlyphiconDanger" glyph="glyphicon glyphicon-remove" />; break;
      case 2:
        component= <Glyphicon className="Glyphicon GlyphiconWarning" glyph="glyphicon glyphicon-warning-sign"/>; break;
      case 3:
      case 4:
        component= <Glyphicon className="Glyphicon GlyphiconOk" glyph="glyphicon glyphicon-ok" />;break;
    }


    if (!show)
      return (
        <div>
          <input type="password" placeholder="password" value={this.state.password} onChange={this.handlePassChange}/>
          {component}
        </div>
      );
    else
      return (
        <div>
        <input type="text" placeholder="password" value={this.state.password} onChange={this.handlePassChange}/>
        {component}
      </div>
    );
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
