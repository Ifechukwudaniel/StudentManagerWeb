import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../Auth/Form';

import * as actions from '../../actions';

class AuthScreen extends Component {


  constructor() {
    super();

    this.loginUser = this.loginUser.bind(this);
  }

  state= {
     matricNumber:"",
     password:"",
  }

  handleChange= ({target})=>{
    var {name, value, type} = target
    type==="checkbox"? value=true : value=value
    this.setState({[name]: value})
  }

  loginUser(value) {
    value.preventDefault()
    this.props.dispatch(actions.login(this.state));
  }
  render() {
    return (
      <Form 
      matricNumber ={this.state.matricNumber} 
      password ={this.state.password} 
      rememberMe= {this.state.RememberMe}
      onChange={this.handleChange}
      onSubmit={this.loginUser} 
      error= {this.props.auth.error}
      />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(AuthScreen)