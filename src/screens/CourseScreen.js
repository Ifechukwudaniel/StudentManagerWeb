import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, } from '@material-ui/core'
import * as actions from '../actions'
 
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
        departmentLevels:[],
        loading:false
    }
    handleChange=(event)=>{
        if(event.target.name==="department"){
            this.setState({[event.target.name]:event.target.value}, ()=>{
             const levels=    this.props.levels.allLevels.filter((value)=>value.department===this.state.department)
             this.setState({departmentLevels:levels});
             })
        }
        else this.setState({[event.target.name]:event.target.value})
    }

    addCourse = ()=>{
      this.setState({loading:true})
      this.props.addCourse(this.state,()=>{
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
                lg={3}
                sm={3}
                xl={3}
                xs={12}
                >
                    <TotalCourses courses={this.props.courses.allCourses}/> 
               </Grid>

                <Grid
                item
                lg={9}
                sm={9}
                xl={9}
                xs={12}>
                     <AddCourses
                      description={this.state.description}
                      department={this.props.departments.allDepartments}
                      courseCode={this.state.courseCode}
                      levels={this.state.departmentLevels}
                      loading={this.state.loading}
                      handleChange= {this.handleChange}
                      addCourse={this.addCourse}
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