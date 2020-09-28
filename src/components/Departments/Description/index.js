import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
   Paper,
   Typography
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    padding:10
  },
  title:{
     color:'#2B9934'
  }
}));

const DepartmentDescription = ({...rest}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant="h4" component="h4">  Departments </Typography> 
        <Typography variant="subtitle1" gutterBottom>  This allows you to thoroughly manage all listed Person(s) (View, Add, Edit and Delete). </Typography> 
    </Paper>
  );
};

DepartmentDescription.propTypes = {
  className: PropTypes.string
};

export default DepartmentDescription;
