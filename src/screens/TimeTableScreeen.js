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
      department:''
    }
    componentDidMount (){
      this.props.fetchAllLevels()
      this.props.fetchAllDepartment()
    }

    handleFetchTimetableChange= (event)=>{
      if(event.target.name==="department"){
        this.setState({[event.target.name]:event.target.value},()=>{
          this.setState({filteredLevels:this.props.levels.allLevels.filter((x)=>x.departmentId==event.target.value)})
        })
      }
      else{
         this.setState({[event.target.name]:event.target.value})
      }
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
      timeTable:state.timeTable
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
      }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TimeTableScreen);