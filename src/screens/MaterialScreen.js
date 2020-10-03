import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses, CoursesDescription } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import { FileIcon, defaultStyles } from 'react-file-icon';
 

class MaterialScreen extends Component {
    state= {
    
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
              <Description screenName="Material"/>
            </Grid>
            <div style={{width:30, marginLeft:20}}>
              <FileIcon extension="zip" {...defaultStyles['zip']}/>
            </div>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(MaterialScreen);