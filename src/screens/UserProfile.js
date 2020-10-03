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
               <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Description screenName="Course"/>
                </Grid>

               <Grid
                item
                lg={8}
                sm={8}
                xl={8}
                xs={8}
                >
                     <TotalCourses  coursesLength= {this.props.courses.allCourses.length}/> 
               </Grid>
               <Grid
                item
                lg={4}
                sm={4}
                xl={4}
                xs={4}
                >
                    <AddCourses 
                      description={this.state.description}
                      courseCode={this.state.courseCode}
                      levels= {this.state.departmentLevels}
                      loading={this.state.loading}
                      department= {this.props.departments.allDepartments}
                      dep = {this.state.department}
                      level={this.state.level}
                      handleChange={this.handleChange}
                      addCourse={this.addCourse}
                      modal= {this.state.modal}
                      openModal ={()=>this.setState({modal:true})}
                      closeModal ={()=>this.setState({modal:false})}
                    />
               </Grid>
                   
                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                    <Table 
                         data={this.props.courses.allCourses}
                    />
                </Grid>
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