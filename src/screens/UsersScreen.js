import React, { Component } from 'react';
import {connect} from 'react-redux'
import Form from '../Auth/Form';

import * as actions from '../../actions';

class DashBoardScreen extends Component {


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
      <div> dash board</div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToProps)(DashBoardScreen)