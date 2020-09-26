import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Hidden , Avatar} from '@material-ui/core';
import {Input, CheckBoxRounded, Dashboard , People, MenuBook, LocationCity, Layers,Announcement, Attachment}  from '@material-ui/icons';

import { Profile, SidebarNav } from './components';

const useStyles = makeStyles(theme => ({
  drawer: {
    width: 240,
    [theme.breakpoints.up('lg')]: {
      marginTop: 64,
      height: 'calc(100% - 64px)'
    }
  },
  root: {
    backgroundColor: theme.palette.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: theme.spacing(2)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  avatar:{
    width:'50%',
    alignSelf:'center',
    height:'15%'
  }
}));

const Sidebar = props => {
  const { open, variant, onClose, className, ...rest } = props;

  const classes = useStyles();

  const pages = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <Dashboard />
    },
    {
      title: 'Users',
      href: '/users',
      icon: <People />
    },
    {
      title: 'Courses',
      href: '/courses',
      icon: <MenuBook />
    },
    {
      title: 'Departments',
      href: '/department',
      icon: <LocationCity/>
    },
    {
      title: 'Levels',
      href: '/level',
      icon: <Layers/>
    },
    {
      title: 'Materials',
      href: '/material',
      icon: <Attachment/>
    },
    {
      title: 'Notifications',
      href: '/notifications',
      icon: <Announcement/>
    },
    {
      title: 'Attendance',
      href: '/attendance',
      icon: <CheckBoxRounded/>
    },
    {
      title: 'Logout',
      href: '/logout',
      icon: <Input/>
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{ paper: classes.drawer }}
      onClose={onClose}
      open={open}
      variant={variant}
    >
      <div
        {...rest}
        className={clsx(classes.root, className)}
      > 
        <Avatar className={classes.avatar}/>
        <Profile />
        <Divider className={classes.divider} />
        <SidebarNav
          className={classes.nav}
          pages={pages}
          handleClose= {onClose}
        />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
