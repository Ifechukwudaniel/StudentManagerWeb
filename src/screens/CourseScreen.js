import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
 import  {Table} from '../components/Users'
class CourseScreen extends Component {
    render() { 
        return (
            <div>
                CourseScreen
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      users: state.users
    }
  }
 
export default connect(mapStateToProps)(CourseScreen);