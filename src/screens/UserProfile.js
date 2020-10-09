import React, { Component } from 'react';
import {connect} from 'react-redux'
import * as action from '../actions'
import  {Table,AddCourses } from '../components/Courses'
import {TotalCourses} from '../components/Dashboard/components'
import {Grid, Typography, Paper } from '@material-ui/core'
import * as actions from '../actions'
import Description from '../components/description';
//aditional imports
import axios from "axios";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "../components/Grid/GridItem.jsx";
import GridContainer from "../components/Grid/GridContainer.jsx";
import CustomInput from "../components/CustomInput/CustomInput.jsx";
import Button from "../components/CustomButtons/Button.jsx";
import Card from "../components/Card/Card.jsx";
import CardHeader from "../components/Card/CardHeader.jsx";
import CardAvatar from "../components/Card/CardAvatar.jsx";
import CardBody from "../components/Card/CardBody.jsx";
import CardFooter from "../components/Card/CardFooter.jsx";

import {grayColor} from "../assets/jss/material-dashboard-react.jsx";
import avatar from "../assets/img/faces/marc.jpg";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  cardCategory: {
    color: grayColor[0],
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    paddingTop: "10px",
    marginBottom: "0"
  },
  cardTitle: {
    color: grayColor[2],
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: grayColor[1],
      fontWeight: "400",
      lineHeight: "1"
    }
  },
};


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
        modal :false,
        errors: {}
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
    // creative-tim profile page


  render() {
    /*
    To do 
    1)get classes object
    2) Replace name and email
    3)Transfer needed components to components folder //

    
    */
    const name = "test";
    const email = "tester@test.com"
    const { classes} = this.props;
    const { errors } = this.state;
    return (
      <div>
        <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={avatar} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                <h4 className={classes.cardTitle}>Alec Thompson</h4>
                <p className={classes.description}>
                  Don't be scared of the truth because we need to restart the
                  human foundation in truth And I love you like Kanye loves
                  Kanye I love Rick Owens’ bed design but the back is...
                </p>
                <Button color="success" round>
                  Follow
                </Button>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={8}>
            <form >
              <Card>
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                  <p className={classes.cardCategoryWhite}>
                    Complete your profile
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Name"
                        id="name"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: name,
                          name: "name"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Email address"
                        id="email-address"
                        error={errors.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          required: true,
                          defaultValue: email,
                          name: "username"
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                </CardBody>
                <CardFooter>
                  <Button type="submit" color="success">
                    Update Profile
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </GridItem>
          
        </GridContainer>
      </div>
    );
  }
}

/*
 "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "transparent"
*/





    //modify content
    // render() { 
    //     return (
    //            <Grid
    //           container
    //           spacing={4}
    //         >
    //         </Grid>
    //     );
    // }

 
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
 


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CoursesScreen));