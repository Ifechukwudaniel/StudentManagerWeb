import React, { Component } from 'react';
import Form from '../Auth/Form';

export default class AuthScreen extends Component {
  state= {
     matricNumber:"",
     password:""
  }

  handleChange= ({target})=>{
    const {name, value} = target
    this.setState({[name]: value})
  }
  render() {
    return (
      <Form 
      matricNumber ={this.state.matricNumber} 
      passwword ={this.state.password} o
      onChange={this.handleChange} />
    );
  }
}
