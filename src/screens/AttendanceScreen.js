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
      matricNumber:''
    }

   componentDidMount (){
     this.props.fetchAllCourses()
     this.props.fetchAllDepartment()
     this.props.fetchAllLevels()
     this.props.fetchSaveUser([])
     this.props.fetchStudentAttendanceByMatricNumber([])
   }

   handleChange=(event)=>{
    if( event.target.type=="time")  return this.setState({[event.target.name]:event.target.value})
    if(event.target.name==="department"){
     return  this.setState({[event.target.name]:event.target.value},()=>{ this.setState({filteredLevels:this.props.levels.allLevels.filter((x)=>x.departmentId==event.target.value)})})
    }
    else if(event.target.name==="level"){
     return this.setState({[event.target.name]:event.target.value},()=>{  this.setState({filteredCourses:this.props.courses.allCourses.filter((x)=>{ return x.levelId ===event.target.value })}) })
    }
    else return this.setState({[event.target.name]:event.target.value})
   }

    handleFetchStudents= ()=>{
       if(!this.state.level) 
         return alert('no course set')
      return this.props.fetchLevelUser(this.state.level)
    }
    
    handleCheck= (rowData, event) =>{
      this.props.users.allUsers.forEach((item,index)=>{
        if(item.id == rowData.id )
        this.props.users.allUsers[index].present=event.target.checked
        this.props.fetchSaveUser(this.props.users.allUsers)
     })
    }

    saveAttendance= ()=>{
      const {level, department, course, startTime, endTime, date} = this.state
      if(!department)  return alert("Please select a department")
      if(!level) return alert("Please select a level")
      if(!course)  return alert("Please select a course")
      if(!startTime)return  alert("Please select a class start time")
      if(!date)return  alert("Please select a date")

      if(!endTime){
        alert("Please select a class end time")
        return
      }

      if(compareStartAndEndTime(startTime, endTime)){
          if(this.props.users.allUsers.length==0) return  alert(" please fetch all the  students in this level")
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
            .catch(()=> alert("please an error occurred please check the form  ")
            )
          }
      }
      else return alert("Please the check your values for class start and end time")
    }

     fetchStudentAttendance = ()=>{
        this.props.fetchStudentAttendanceByMatricNumber([])
        if(!this.state.matricNumber) return alert("Please  enter matric number")
        this.props.fetchStudentAttendanceByMatricNumber(this.state.matricNumber)
        this.setState({matricNumber:''})
     }

    render() { 
        return (
               <Grid
              container
              spacing={4}
            >
               <Grid item lg={12} sm={12}  xl={12}  xs={12}  >
                  <Description screenName="Attendance"/>
                </Grid>
                <Grid item lg={12}  sm={12} xl={12} xs={12} >
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
                     fetchStudentAttendance={this.fetchStudentAttendance}
                     matricNumber={this.state.matricNumber}
                     userAttendance = {this.props.attendance.userAttendance}
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
    levels:state.levels,
    attendance:state.attendance
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
   },
    fetchStudentAttendanceByMatricNumber : (matricNumber)=>{
      dispatch(actions.fetchUserAttendance(matricNumber))
 }
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AttendanceScreen);