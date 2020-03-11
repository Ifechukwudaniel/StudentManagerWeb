import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../components/Auth/Form';

import * as actions from '../actions';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
//const {isAuth}  = require('../helpers/Auth')

const {tokenName, apiUrl} = require('../config')

class AuthScreen extends Component {
  componentWillMount(){
      if(localStorage.getItem("BIU_WEB_APP")!= undefined){
        this.props.autoLogin(this.navigate)
      }
      return
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

  loginUser =(value)=> {
    value.preventDefault()
    this.props.login(this.state,this.navigate);
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

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin:(navigate)=>{
      dispatch(actions.loginSuccess(navigate))
    },
    login:(user,navigate)=>{
      dispatch(actions.login(user,navigate))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthScreen)