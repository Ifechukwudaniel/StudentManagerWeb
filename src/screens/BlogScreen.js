import React, { Component } from 'react';
import {connect} from 'react-redux'
import {Grid } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
import Notifications  from '../components/Notifications';

//fake notifications array for testing, ** delete for production important!!!
const dummyData = [
  {
    id: "1",
    title: "test title 1",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "2",
    title: "test title 2",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "3",
    title: "test title 3",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "4",
    title: "test title 4",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "5",
    title: "test title 5",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "6",
    title: "test title 6",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "7",
    title: "test title 7",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "8",
    title: "test title 8",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
  {
    id: "9",
    title: "test title 9",
    body: " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."
  },
]

class BlogsScreen extends Component {
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
               <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Description screenName="Notifications"/>
                </Grid>
                <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Notifications
                  title="Notification"
                  subTitle="All user  notifications"
                  data={dummyData}
                  />
                </Grid>
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
 
export default connect(mapStateToProps, mapDispatchToProps)(BlogsScreen);