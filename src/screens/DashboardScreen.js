import React, { Component } from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux'
import * as action from '../actions'
class DashboardScreen extends Component {
  componentWillMount(){
    this.props.dispatch(action.fetchAllDepartment())
    this.props.dispatch(action.fetchAllUsers())
  }
    render() { 
        return (
            <div>
                 <Dashboard 
                 users={this.props.users}
                  departments={this.props.departments}
                 />
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      auth: state.auth,
      users:state.users,
      departments:state.departments

    }
  }
export default connect(mapStateToProps)(DashboardScreen);