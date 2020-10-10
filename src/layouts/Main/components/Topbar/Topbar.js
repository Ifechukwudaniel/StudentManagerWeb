import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { AppBar, Toolbar, Hidden, IconButton, Badge, Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import {
   Notifications, 
   Mail
} from '@material-ui/icons'
import {connect} from 'react-redux';
import * as action from '../../../../actions'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';


const drawerWidth = 240
const useStyles = makeStyles(theme => ({
  root: {
    boxShadow: 'none',
    // background:theme.palette.primary.main,
    [theme.breakpoints.up('lg')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  flexGrow: {
    flexGrow: 1
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  },
  icons:{
    margin:theme.spacing(1)
  }
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const Topbar = props => {
  const { className, onSidebarOpen, ...rest } = props;

  const classes = useStyles();

  const [notifications] = useState([]);

  return (
    <HideOnScroll>
        <AppBar
      {...rest}
      className={clsx(classes.root, className)}
    >
      <Toolbar>
      <Hidden lgUp>
          <IconButton
            color="inherit"
            onClick={onSidebarOpen}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.flexGrow} />
          <div className={classes.icons}>
          <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                  <Notifications/>
               </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="error">
                 <Mail/>
              </Badge>
            </IconButton>
          </div>
          <Avatar alt={props.auth.name} src={props.auth.image} />
      </Toolbar>
    </AppBar>

 </HideOnScroll>
  );
};

Topbar.propTypes = {
  className: PropTypes.string,
  onSidebarOpen: PropTypes.func
};

const mapStateToProps = (state) => {
   return{
     auth:state.auth
   }
}


export default connect(mapStateToProps)(Topbar);
