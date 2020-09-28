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

const Description = ({screenName,...rest}) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
        <Typography className={classes.title} variant="h4" component="h4">  {screenName} </Typography> 
        <Typography variant="subtitle1" gutterBottom>  This allows you to thoroughly manage all listed {screenName}(s) (View, Add, Edit and Delete). </Typography> 
    </Paper>
  );
};

Description.propTypes = {
  className: PropTypes.string,
  screenName:PropTypes.string
};

export default Description;