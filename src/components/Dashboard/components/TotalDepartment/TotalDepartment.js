import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Card, CardContent, Grid, Typography, Avatar } from '@material-ui/core';
import LocationCityIcon from '@material-ui/icons/LocationCity'; 

const useStyles = makeStyles(theme => ({
root: {
  height: '100%'
},
content: {
  alignItems: 'center',
  display: 'flex'
},
title: {
  fontWeight: 700
},
avatar: {
  backgroundColor: theme.palette.success.main,
  height: 56,
  width: 56
},
icon: {
  height: 32,
  width: 32
},
difference: {
  marginTop: theme.spacing(2),
  display: 'flex',
  alignItems: 'center'
},
differenceIcon: {
  color: theme.palette.success.dark
},
differenceValue: {
  color: theme.palette.success.dark,
  marginRight: theme.spacing(1)
}
}));

const TotalDepartments = props => {
  const { className, departments , ...rest } = props;

  const classes = useStyles();

  return (
    <Card
     color='inherit'
      {...rest}
      className={clsx(classes.root, 
      className)}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
        >
          <Grid item>
            <Typography
              className={classes.title}
              gutterBottom
              variant="body2"
            >
              TOTAL DEPARTMENTS
            </Typography>
            <Typography
              variant="h2"
            >
               {departments.length}
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <LocationCityIcon className={classes.icon} />
            </Avatar>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

TotalDepartments.propTypes = {
  className: PropTypes.string
};

export default TotalDepartments;
