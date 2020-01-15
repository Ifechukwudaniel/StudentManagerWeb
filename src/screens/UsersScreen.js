import React, { Component } from 'react';
 import {connect} from 'react-redux'
 import * as action from '../actions'
 import  {Table} from '../components/Users'
class UsersScreen extends Component {
    componentDidMount(){
        this.props.dispatch(action.fetchAllUsers())
        
    }
    render() { 
        return (
            <div>
                 <Table data={this.props.users.allUsers}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      users: state.users
    }
  }
 
export default connect(mapStateToProps)(UsersScreen);