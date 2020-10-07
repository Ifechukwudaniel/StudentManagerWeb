import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import AttendanceTabs from '../components/Attendance/Tab';
import { compareStartAndEndTime, to12Time} from '../helpers/timeConverter';
import axiosService from '../services/axiosService'
const config = require('../config');

const  axiosAuth= axiosService.initInstance();
class AttendanceScreen extends Component {
    state= {
      filteredLevels:[],
      filteredCourses:[],
      department:'',
      level:"",
      course:"",
      startTime:"",
      endTime:"",
      date:"",
    }
   componentDidMount (){
     this.props.fetchAllCourses()
     this.props.fetchAllDepartment()
     this.props.fetchAllLevels()
     this.props.fetchSaveUser([])
   }

   handleChange=(event)=>{
    if( event.target.type=="time"){
      this.setState({[event.target.name]:event.target.value})
       return 
    }
    if(event.target.name==="department"){
      this.setState({[event.target.name]:event.target.value},()=>{
        this.setState({filteredLevels:this.props.levels.allLevels.filter((x)=>x.departmentId==event.target.value)})
      })
      return
    }
    else if(event.target.name==="level"){
      this.setState({[event.target.name]:event.target.value},()=>{
        this.setState({filteredCourses:this.props.courses.allCourses.filter((x)=>{
           return x.levelId ===event.target.value
        })})
      })
      return
    }
    else{
       this.setState({[event.target.name]:event.target.value})
       return
    }
   }
    handleFetchStudents= ()=>{
      if(!this.state.level){
        alert('no course set')
      }
      else{
        this.props.fetchLevelUser(this.state.level)
      }
    }
    handleCheck= (rowData, event) =>{
      this.props.users.allUsers.forEach((item,index)=>{
        if(item.id == rowData.id )
        this.props.users.allUsers[index].present=event.target.checked
        this.props.fetchSaveUser(this.props.users.allUsers)
     })
    }

    saveAttendance= ()=>{
      const {level, department, course, startTime, endTime} = this.state
      if(!department){
        alert("Please select a department")
        return
      }

      if(!level){
        alert("Please select a level")
        return
      }
      if(!course){
        alert("Please select a course")
        return
      }

      if(!startTime){
        alert("Please select a class start time")
        return
      }

      if(!endTime){
        alert("Please select a class end time")
        return
      }

      if(compareStartAndEndTime(startTime, endTime)){
          if(this.props.users.allUsers.length==0)
            return  alert(" please fetch all the  students in this level")
          else{
             let studentData =  this.props.users.allUsers.map((stu)=>{
               return{
                 user:stu.id,
                 attended:stu.present,
                 timeStart: to12Time(this.state.startTime),
                 timeEnd:to12Time(this.state.endTime),
                 date:this.state.date,
                 course:this.state.course
             }})
             console.log(studentData)
            axiosAuth.post(`${config.apiUrl}/attendance/bulk`,{attendance:studentData})
            .then(()=>{
              alert("saved  users attendance")
              this.setState({
                filteredLevels:[],
                filteredCourses:[],
                department:'',
                level:"",
                course:"",
                startTime:"",
                endTime:"",
                date:"",
              })
            })
            .catch(()=>{
              alert("please an error occurred please check the form  ")
            })
          }
      }
      else{
        alert("Please the check your values for class start and end time")
      }
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
                  <Description screenName="Attendance"/>
                </Grid>
                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                   <AttendanceTabs
                     departments={this.props.departments.allDepartments}
                     levels = {this.state.filteredLevels}
                     courses={this.state.filteredCourses}
                     handleFormChange= {this.handleChange}
                     department={this.state.department}
                     level= {this.state.level}
                     course={this.state.course}
                     handleFetchStudents= {this.handleFetchStudents}
                     saveAttendance= {this.saveAttendance}
                     users={this.props.users.allUsers}
                     startTime={this.state.startTime}
                     endTime={this.state.endTime}
                     date={this.state.date}
                     handleCheck= {this.handleCheck}
                   />
                </Grid>
            </Grid>
        );
    }
}
 
function mapStateToProps(state) {
  return {
    users: state.users,
    courses: state.courses,
    departments:state.departments,
    levels:state.levels
  }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAllLevels: () => {
        dispatch(actions.fetchAllLevels())
      },
      fetchAllDepartment: ()=>{
        dispatch(actions.fetchAllDepartment())
      },
     fetchAllCourses: ()=>{
         dispatch(actions.fetchAllCourses())
     },
     fetchLevelUser : (level)=>{
        dispatch(actions.fetchUserByLevel(level))
     },
     fetchSaveUser : (users)=>{
      dispatch(actions.fetchAllUsersSuccess(users))
   }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AttendanceScreen);