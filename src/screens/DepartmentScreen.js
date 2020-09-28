import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table} from '../components/Departments'
import {TotalDepartment,} from '../components/Dashboard/components'
import {Grid, } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description'
 
class DepartmentScreen extends Component {
    state= {
        name:"",
        numberOfLevels:0,
        loading:false
    }
    componentDidMount(){
        this.props.dispatch(actions.fetchAllDepartment())
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    addDepartment = ()=>{
        this.setState({loading:true})
        this.props.dispatch(action.addDepartment(this.state, ()=>{
            this.setState({loading:false})
     }))
    }
    render() { 
        return (
               <Grid
              container
              spacing={4}
            >
             <Grid
                item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                   <Description screenName="Department"/>
               </Grid>

                <Grid
                item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                     <TotalDepartment departments= {this.props.departments.allDepartments}/> 
               </Grid>

                {/* <Grid
                item
                lg={9}
                sm={9}
                xl={9}
                xs={12}>
                     <AddDepartment
                      name={this.state.name} 
                      handleChange={this.handleChange}
                      addDepartment={this.addDepartment}
                      loading={this.state.loading}
                    /> 
                </Grid> */}

                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                    <Table 
                       data={this.props.departments.allDepartments}
                    />
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