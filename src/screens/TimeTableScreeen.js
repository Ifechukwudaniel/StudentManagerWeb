import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import TimeTableTabs from '../components/TimeTable/Tab';

class TimeTableScreen extends Component {
    state= {
      filteredLevels:[],
      level:'',
      department:'',
      filteredCourses:[],
    }
    componentDidMount (){
      this.props.fetchAllCourses()
      this.props.fetchAllLevels()
      this.props.fetchAllDepartment()
    }

    handleFetchTimetableChange= (event)=>{
      if(event.target.name==="department"){
       return  this.setState({[event.target.name]:event.target.value},()=>{ this.setState({filteredLevels:this.props.levels.allLevels.filter((x)=>x.departmentId==event.target.value)})})
      }
      else if(event.target.name==="level"){
       return this.setState({[event.target.name]:event.target.value},()=>{  this.setState({filteredCourses:this.props.courses.allCourses.filter((x)=>{ return x.levelId ===event.target.value })}) })
      }
      else return this.setState({[event.target.name]:event.target.value})
    }
   
  fetchDepartmentTimetable=(levelId)=>{
     this.props.fetchDepartmentTimetable(this.state.level)
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
                  <Description screenName="TimeTable"/>
                </Grid>
                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                   <TimeTableTabs
                   handleFetchTimetableChange={this.handleFetchTimetableChange} 
                   departments = {this.props.departments.allDepartments} 
                   levels={this.state.filteredLevels}
                   department = {this.state.department}
                   level = {this.state.level}
                   fetchDepartmentTimetable={this.fetchDepartmentTimetable}
                   timeTableData={this.props.timeTable.departmentTimeTable}
                   courses={this.state.filteredCourses}
                   />
                </Grid>
            </Grid>
        );
    }
}
 
function mapStateToProps(state) {
    return {
      departments: state.departments,
      levels: state.levels,
      timeTable:state.timeTable,
      courses: state.courses,
    }
  }

  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAllDepartment: () => {
        dispatch(actions.fetchAllDepartment())
      },
      fetchAllLevels: () => {
        dispatch(actions.fetchAllLevels())
      },
      fetchDepartmentTimetable: (levelId)=>{
        dispatch(actions.fetchDepartmentTimetable(levelId))
      },
      fetchAllCourses: ()=>{
        dispatch(actions.fetchAllCourses())
    },
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TimeTableScreen);