import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import  PDF from '../../../assets/svg/fileIcons/pdf.svg'
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import GetAppRoundedIcon from '@material-ui/icons/GetAppRounded';
import { useMediaQuery } from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import {connect} from 'react-redux'

function generate(element) {
  return [0, 1, 2, 3, 4,5].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

function MaterialList(props) {
  const theme= useTheme()
  console.log(props)
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });
  
  const useStyles = makeStyles((theme) => ({
    root: {
      // width: '100%',
      backgroundColor: theme.palette.background.paper,
      marginLeft:10
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    listItem:{
      width: isDesktop ? window.innerWidth-300 : window.innerWidth-0
    },
    icon:{
      width:100, 
      height:100
    },
    list:{
    //  width:'100%'
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
      background:'transparent'
    },
  }));

  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
        <List>
      {
         generate(
           <div>
           <ListItem   className={classes.listItem} alignItems="flex-start">
        <ListItemAvatar>
          <Avatar variant="square" className={classes.large} alt="Remy Sharp" src={PDF} />
        </ListItemAvatar>
        <ListItemText
          primary= {" The First Material"} 
          secondary={
            <React.Fragment>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                  By - The school
              </Typography>
            </React.Fragment>
          }
        />
        {
           props.auth.role==="admin"
           ?
             (
              <div>
                 <IconButton>
                   <GetAppRoundedIcon/>
                 </IconButton>
                 <IconButton>
                   <VisibilityIcon/>
                 </IconButton>
                 <IconButton>
                   <EditIcon/>
                 </IconButton>
                 <IconButton>
                   <DeleteIcon/>
                 </IconButton>
               </div>
           )
           :
            <div>
               <IconButton>
                   <GetAppRoundedIcon/>
                </IconButton>
               <IconButton>
                 <VisibilityIcon/>
              </IconButton>
             </div>
        }
      </ListItem>
       <Divider variant="fullWidth"/>
           </div>
         )} 
    </List>
    </div>
  );
}

function mapStateToProps(state) {
  return {
   auth:state.auth
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
   
}
}

export default   connect(mapStateToProps, mapDispatchToProps)(MaterialList)