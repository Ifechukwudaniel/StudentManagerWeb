import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table, } from '../components/Departments'
import {TotalUsers} from '../components/Dashboard/components'
import {Grid, } from '@material-ui/core'
import * as actions from '../actions'
 
class DepartmentScreen extends Component {
    componentDidMount(){
        this.props.dispatch(actions.fetchAllDepartment())
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
                     {/* <TotalUsers users= {this.props.users.allUsers}/> */}
               </Grid>

                <Grid
                item
                lg={9}
                sm={6}
                xl={3}
                xs={12}>
                     {/* <AddUser
                      matricNumber={this.state.matricNumber} 
                      password={this.state.password}
                      role={this.state.role}
                      handleChange={this.handleChange}
                      addUser={this.addUser}
                      loading={this.state.loading}
                    /> */}
                </Grid>

                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                    <Table data={this.props.departments.allDepartments}/>
                </Grid>
            </Grid>
        );
    }
}
 
function mapStateToProps(state) {
    return {
      departments: state.departments
    }
  }
 
export default connect(mapStateToProps)(DepartmentScreen);