import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Hidden , Avatar} from '@material-ui/core';
import {Input, CheckBoxRounded, Dashboard , People, MenuBook, LocationCity, Layers,Announcement, Attachment, AvTimer, Chat}  from '@material-ui/icons';

import { Profile, SidebarNav } from './components';
import Logo from '../../../../images/logo--white.png'
import image from '../../../../images/sidebar-2.jpg'

const drawerWidth = 240;


const useStyles = makeStyles(theme => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    width:240,
     height:"100%"
  },

  root: {
      zIndex: "1",
      // height: "100%",
      width:drawerWidth,
      display: "block",
      top: "0",
      left: "0",
      background: "url(" + image + ")",
      boxShadow:"inset 0 0 0 2000px rgba(0, 0, 0, 0.8)",
      backgroundSize:"cover",
      backgroundPosition: "center center",
      "&:after": {
        position: "absolute",
        zIndex: "1",
        content: '""',
        display: "block",
        background: "#000",
        opacity: ".8"
      }

  },
  divider: {
    margin:10
  },
  nav: {
    marginBottom: theme.spacing(2)
  },
  avatar:{
    width:'50%',
    alignSelf:'center',
    height:'15%'
  },
  toolbar: theme.mixins.toolbar,

  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  image:{
     width:150,
     alignSelf: 'center',
     marginLeft: 30,
     marginTop: 10,
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
      title: 'TimeTable',
      href: '/timetable',
      icon: <AvTimer/>
    },
    {
      title: 'Chat',
      href: '/Chat',
      icon: <Chat/>
    },
    {
      title: 'Logout',
      href: '/logout',
      icon: <Input/>
    },
  ];

  return (
     <div>
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
        <img  src= {Logo} className={classes.image}/>
         <Divider className={classes.divider} />
         <SidebarNav
          className={classes.nav}
          pages={pages}
          handleClose= {onClose}
        /> 

      </div>
    </Drawer>


     </div>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default Sidebar;
