import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../components/Auth/Form';

import * as actions from '../actions';
import { Redirect } from 'react-router-dom';

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
    this.props.dispatch(actions.login(this.state,this.navigate));
  }
   
  navigate=()=>{
    this.props.history.push('/dashboard')
  }

  render() {
    if(this.props.auth.isAuth){
      return <Redirect to={'/dashboard'}/>
    }  
    else{
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
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(AuthScreen)