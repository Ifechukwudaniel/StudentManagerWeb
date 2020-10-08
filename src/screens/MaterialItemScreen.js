import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import { FileIcon, defaultStyles } from 'react-file-icon';
import CourseList from '../components/Courses/CourseList'
 

class MaterialItemScreen extends Component {
    state= {
    
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
     
    }
  }
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     
  }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(MaterialItemScreen);