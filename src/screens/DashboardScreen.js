import React, { Component } from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux'
import * as action from '../actions'
import { coursesReducer } from '../reducers/courses-reducer';
class DashboardScreen extends Component {
  componentWillMount(){
    this.props.fetchAllDepartment()
    this.props.fetchAllUsers()
    this.props.fetchAllCourses()
  }
    render() { 
        return (
            <div>
                 <Dashboard 
                  
                 />
          </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      auth: state.auth,
      users:state.users,
      departments:state.departments,
      courses:state.courses
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAllDepartment: () => {
        dispatch(action.fetchAllDepartment())
      },
      fetchAllUsers: () => {
        dispatch(action.fetchAllUsers())
      },
      fetchAllCourses: () => {
        dispatch(action.fetchAllCourses())
      },
      fetchAllLevels:()=>{
        dispatch(action.fetchAllLevels())
      }
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(DashboardScreen);