import React, { useEffect } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Divider, Drawer, Hidden , Avatar} from '@material-ui/core';
import {Input, CheckBoxRounded, Dashboard , People, MenuBook, LocationCity, Layers,Announcement, Attachment, AvTimer, Chat, Person}  from '@material-ui/icons';

import { Profile, SidebarNav } from './components';
import Logo from '../../../../images/logo--white.png'
import image from '../../../../images/sidebar-2.jpg'
import {connect} from 'react-redux'
import * as actions from '../../../../actions'


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


  let pages = []

  const pagesAdmin = [
    {
      id:'1',
      title: 'Dashboard',
      href: '/dashboard',
      icon: <Dashboard />
    },
    {
      id:'2',
      title: 'Users',
      href: '/users',
      icon: <People />
    },
    {
      id:'3',
      title: 'Courses',
      href: '/courses',
      icon: <MenuBook />
    },
    {
      id:'4',
      title: 'Departments',
      href: '/department',
      icon: <LocationCity/>
    },
    {
      id:'5',
      title: 'Levels',
      href: '/level',
      icon: <Layers/>
    },
    {
      id:'6',
      title: 'Materials',
      href: '/material',
      icon: <Attachment/>
    },
    {
      id:'7',
      title: 'Notifications',
      href: '/notifications',
      icon: <Announcement/>
    },
    {
      id:'8',
      title: 'Attendance',
      href: '/attendance',
      icon: <CheckBoxRounded/>
    },
    {
      id:'9',
      title: 'TimeTable',
      href: '/timetable',
      icon: <AvTimer/>
    },
    {
      id:'10',
      title: 'Chat',
      href: '/Chat',
      icon: <Chat/>
    },
    {
      id:'11',
      title: 'My Profile',
      href: '/profile',
      icon: <Person/>
    },
    {
      id:'12',
      title: 'Logout',
      href: '/logout',
      icon: <Input/>
    },
  ];

  const pagesUser = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: <Dashboard />
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
      title: 'My Profile',
      href: '/profile',
      icon: <Person/>
    },
    {
      title: 'Logout',
      href: '/logout',
      icon: <Input/>
    },
  ];

  // useEffect(()=>{
  //   if(props.auth.role==''){
  //     props.logOut()
  // }
  // else{
  //   if(props.auth.role="admin"){
  //      pages= pagesAdmin
  //   }
  //   else{
  //     pages=pagesUser
  //   }
  // }
  // })

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
        style={{height:'100%'}}
      > 
        <img  src= {Logo} className={classes.image}/>
         <Divider className={classes.divider} />
         <SidebarNav
          className={classes.nav}
          pages={pagesUser}
          handleClose= {onClose}
        /> 

      </div>
    </Drawer>


     </div>
  );
};

function mapStateToProps(state) {
  return {
   auth:state.auth
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logOut: () => {
      dispatch(actions.logOut())
    },

}
}

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
