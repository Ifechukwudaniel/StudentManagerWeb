import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as action from '../actions'
import { Table, AddCourses } from '../components/Courses'
import { TotalCourses } from '../components/Dashboard/components'
import { Grid, Typography, Paper } from '@material-ui/core'
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

import { grayColor } from "../assets/jss/material-dashboard-react.jsx";
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


class UserProfileScreen extends Component {
  state = {
    errors: {}
  }

  render() {
    const { classes, auth } = this.props;
    const { errors } = this.state;
    const { name, matricNumber, image , department , level} = auth
    const email = "test@test"
    return (
      <div>
        <GridContainer>
        <Grid
                 item
                lg={12}
                sm={12}
                xl={12}
                xs={12}
                >
                  <Description screenName="User Profile"/>
                </Grid>
          <GridItem style={{marginTop:30}} xs={12} sm={12} md={4}>
            <Card profile>
              <CardAvatar   profile>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={image} alt="..." />
                </a>
              </CardAvatar>
              <CardBody profile>
                <h6 className={classes.cardCategory}>{matricNumber}</h6>
                <h4 className={classes.cardTitle}>{name}</h4>
                <p className={classes.description}>
                 Department: {department}
                </p>
                <p className={classes.description}>
                 Level:{level}
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem style={{marginTop:50}} xs={12} sm={12} md={8}>
            <form >
              <Card>
                <CardHeader color="success">
                  <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                  <p className={classes.cardCategoryWhite}>
                    Change your password
                  </p>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={3}>
                      <CustomInput
                        labelText="Password"
                        id="currPassword"
                        error={errors.name}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          required: true,
                          defaultValue: "",
                          name: "currPassword"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="New password"
                        id="new-password-1"
                        error={errors.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          required: true,
                          defaultValue: "",
                          name: "newPassword1"
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Confirm password"
                        id="new-password-2"
                        error={errors.username}
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          type: "password",
                          required: true,
                          defaultValue: "",
                          name: "newPassword2"
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
    auth: state.auth,
  }
}




export default connect(mapStateToProps)(withStyles(styles)(UserProfileScreen));