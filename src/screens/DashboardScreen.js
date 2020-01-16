import React, { Component } from 'react';
import Dashboard from '../components/Dashboard'
import {connect} from 'react-redux'
class DashboardScreen extends Component {
    render() { 
        return (
            <div>
                 <Dashboard/>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
      auth: state.auth
    }
  }
export default connect(mapStateToProps)(DashboardScreen);