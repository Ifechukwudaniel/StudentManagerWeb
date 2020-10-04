import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
 
class CoursesScreen extends Component {
    componentWillMount(){
        this.props.fetchAllCourses()
        this.props.fetchAllDepartment()
        this.props.fetchAllLevels()
    }
    state= {
        courseCode:'',
        description:'',
        title:'',
        department:'',
        level:'',
        lecturer:'',
        departmentLevels:[],
        loading:false ,
        modal :false
    }
    handleChange=(event)=>{
       console.log(this.state.department)
        if(event.target.name==="department"){
            this.setState({[event.target.name]:event.target.value}, ()=>{
               console.log(this.state.department)
             const levels=    this.props.levels.allLevels.filter((value)=>value.departmentId===this.state.department)
             this.setState({departmentLevels:levels});
             })
        }
        else this.setState({[event.target.name]:event.target.value})
    }

    addCourse = ()=>{
      this.setState({loading:true})
      this.props.addCourse(this.state)
      this.setState({loading:false, modal:false})
    }
    render() { 
        return (
               <Grid
              container
              spacing={4}
            >
            </Grid>
        );
    }
}
 
function mapStateToProps(state) {
    return {
      courses: state.courses,
      departments:state.departments,
      levels:state.levels
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAllDepartment: () => {
        dispatch(actions.fetchAllDepartment())
      },
      fetchAllCourses: () => {
        dispatch(actions.fetchAllCourses())
      },
      fetchAllLevels: () => {
        dispatch(actions.fetchAllLevels())
      },
      addCourse:(data)=>{
        dispatch(action.addCourse(data))
      }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(CoursesScreen);