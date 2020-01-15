import React from 'react';
import { Link as RouterLink, Redirect } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Avatar, Typography } from '@material-ui/core';
import {connect} from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: 60,
    height: 60
  },
  name: {
    marginTop: theme.spacing(1)
  }
}));

const Profile = props => {
  const { className } = props;
  const classes = useStyles();
  if(!props.auth.isAuth){
    return (
       <Redirect to="/"/>
    )
  }
  else{
  const user = {
    name: props.auth.name,
    avatar: '/images/avatars/avatar_11.png',
    matricNumber: props.auth.matricNumber
  };

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <Typography
        className={classes.name}
        variant="h4"
      >
        {user.name}
      </Typography>
      <Typography variant="body2">{user.matricNumber}</Typography>
    </div>
  );
  }
};

Profile.propTypes = {
  className: PropTypes.string
};

function mapStateToProps(state) {
  return {
    auth: state.auth
  }
}


export default connect(mapStateToProps)(Profile);
