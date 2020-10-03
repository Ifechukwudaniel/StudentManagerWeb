import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
class ChatScreen extends Component {
    state= {
    
    }
    handleChange=(event)=>{
    }

    addCourse = ()=>{

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
      departments: state.departments,
      levels: state.levels
    }
  }
 
export default connect(mapStateToProps)(ChatScreen);