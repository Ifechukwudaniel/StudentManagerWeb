import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {
  TotalUsers,
  TotalDepartment,
  TotalMaterials,
  TotalCourses
} from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = ({users, departments, courses}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
    </div>
  );
};

export default Dashboard;
