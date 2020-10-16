import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import TimeTableTabs from '../components/TimeTable/Tab';
import moment from 'moment'
import axios from 'axios'
const AxiosService = require("../services/axiosService");
const config = require('../config');

class TimeTableScreen extends Component {
    state= {
      filteredLevels:[],
      level:'',
      department:'',
      filteredCourses:[]
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
    saveTimetable = ()=>{
       const {monday, tuesday,wednesday, thursday, friday} = this.props.timeTable
       let data= {
          level:this.state.level,
          days:[
            {
              weekDay:1 ,
              courses:monday.map((data=>{
                 return {...data, startTime:moment(data.startTime).format('hh:mm A'),endTime:moment(data.endTime).format('hh:mm A'), repeated:true,level:this.state.level, weekDay:1}
              }))
            },
            {
              weekDay:2 ,
              courses:tuesday.map((data=>{
                 return {...data, startTime:moment(data.startTime).format('hh:mm A'),endTime:moment(data.endTime).format('hh:mm A'), repeated:true,level:this.state.level, weekDay:2}
              }))
            },
            {
              weekDay:3 ,
              courses:wednesday.map((data=>{
                 return {...data ,startTime:moment(data.startTime).format('hh:mm A'),endTime:moment(data.endTime).format('hh:mm A'), repeated:true,level:this.state.level, weekDay:3}
              }))
            } ,
            {
              weekDay:4 ,
              courses:thursday.map((data=>{
                 return {...data, startTime:moment(data.startTime).format('hh:mm A'),endTime:moment(data.endTime).format('hh:mm A'), repeated:true,level:this.state.level, weekDay:4}
              }))
            },
            {
              weekDay:5 ,
              courses:friday.map((data=>{
                 return {...data, startTime:moment(data.startTime).format('hh:mm A'),endTime:moment(data.endTime).format('hh:mm A'), repeated:true,level:this.state.level, weekDay:5}
              }))
            },
            {
              weekDay:6 ,
              courses:[]
            } ,
            {
              weekDay:7 ,
              courses:[]
            } 
          ]
       }
       this.props.postTimeTable(data)
      console.log(data)
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
                   saveTimeTable={this.saveTimetable}
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
    postTimeTable:(data)=>{
      dispatch(actions.postTimeTable(data))
    }
  }
}
 
export default connect(mapStateToProps,mapDispatchToProps)(TimeTableScreen);