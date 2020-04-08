import React, { Component } from 'react';
import {connect} from 'react-redux'
import AddLevel from '../components/Level/components/AddLevel/AddLevel'
import {Grid, } from '@material-ui/core'
import * as actions from '../actions'
 
 
class LevelScreen extends Component {
    state={
        level:0,
        loading:false,
        department:''
    }
    handleChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
     addLevel=()=>{
       this.setState({loading:true})
      this.props.addLevel(this.state, ()=>{
        this.setState({loading:false})
      })
     }
    render() { 
        return (
          <Grid
           container
           spacing={5}
          >
            <Grid
             item
              md={12}
              xs={12}
            >
            <AddLevel department={this.props.departments.allDepartments} 
                      handleChange={this.handleChange} 
                      number={this.state.number}
                      loading={this.state.loading}
                       addLevel={this.addLevel}
                      />
            </Grid>
          </Grid>
        );
    }
}
 
function mapStateToProps(state) {
    return {
      departments:state.departments,
      levels:state.levels
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      fetchAllDepartment: () => {
        dispatch(actions.fetchAllDepartment())
      },
      fetchAllCourses: () => {
        dispatch(actions.fetchAllCourses())
      },
      addLevel:(data)=>{
        dispatch(actions.addLevel(data))
      }
  }
}
export default  connect(mapStateToProps, mapDispatchToProps )(LevelScreen);