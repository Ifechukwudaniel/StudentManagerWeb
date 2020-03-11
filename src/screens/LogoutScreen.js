import React from 'react';
import {Redirect} from 'react-router-dom'
import * as actions from '../actions'
import {connect} from 'react-redux'
 
const Logout = (props) => {
    props.dispatch(actions.logOut())
    return (
        <Redirect to="/"/>
    );
}
 
function mapStateToProps(state) {
    return {
      users: state.users
    }
  }
 
export default connect(mapStateToProps)(Logout);