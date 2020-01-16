import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddUser } from '../components/Users'
import {TotalUsers} from '../components/Dashboard/components'
import {Grid, } from '@material-ui/core'
class UsersScreen extends Component {
    state={
        matricNumber:'',
        password:"",
        role:'admin',
        loading:false
    }
    componentDidMount(){
        this.props.dispatch(action.fetchAllUsers())
    }
    handleChange=(event)=>{
        if(event._targetInst.type==='li'){
            this.setState({[event.target.name]:event.target.value})
        }
        else{
            this.setState({[event.target.name]:event.target.value})
        }
    }
    addUser = ()=>{
        this.setState({loading:true})
        this.props.dispatch(action.creatUsers(this.state, ()=>{
            this.setState({loading:false})
        }))
    }
    render() { 
        return (
            <Grid
              container
              spacing={5}
            >
                <Grid
                item
                lg={3}
                sm={6}
                xl={3}
                xs={12}
                >
                     <TotalUsers users= {this.props.users.allUsers}/>
               </Grid>

                <Grid
                item
                lg={9}
                sm={6}
                xl={3}
                xs={12}>
                     <AddUser
                      matricNumber={this.state.matricNumber} 
                      password={this.state.password}
                      role={this.state.role}
                      handleChange={this.handleChange}
                      addUser={this.addUser}
                      loading={this.state.loading}
                    />
                </Grid>

                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                    <Table data={this.props.users.allUsers}/>
                </Grid>
            </Grid>
        );
    }
}

function mapStateToProps(state) {
    return {
      users: state.users
    }
  }
 
export default connect(mapStateToProps)(UsersScreen);