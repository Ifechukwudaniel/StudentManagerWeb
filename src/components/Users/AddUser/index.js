import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
  Modal,
  Typography,
  IconButton
} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) =>  ({
  root: {
    margin:'auto',
    width: "50%",
    outline: 0
    // backgroundColor: theme.palette.background.paper,
    // boxShadow: theme.shadows[5],
  },
  rootOut: {
    height: '100%',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText
  },
  content: {
    alignItems: 'center',
    display: 'flex'
  },
  title: {
    fontWeight: 700
  },
  avatar: {
    backgroundColor: theme.palette.white,
    color: theme.palette.primary.main,
    height: 56,
    width: 56,
    "&:hover":{
      backgroundColor: theme.palette.white,
      color: theme.palette.primary.main,
    }
  },
  icon: {
    height: 32,
    width: 32
  }
}));

const AddUser = ({className, departments,level, handleChange,loading,...rest}) => {
  const classes = useStyles();
  const [modal , setModal] = useState(false)
  return (
    <div>
    <Card
    {...rest}
    className={clsx(classes.rootOut, className)}
  >
    <CardContent>
      <Grid
        container
        justify="space-between"
      >
        <Grid item>
          <Typography
            className={classes.title}
            color="inherit"
            gutterBottom
            variant="h5"
          >
            Add a new user
          </Typography>
        </Grid>
        <Grid item>
          <IconButton  onClick= {()=>setModal(true)} className={classes.avatar}>
            <PlusIcon className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
    <Modal   style={{display:'flex',alignItems:'center',justifyContent:'center'}} open={modal}>
    <Card
      {...rest}
      className={classes.root}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          title="Create a new user"
        />
        <Divider />
        <CardContent>
          <Grid
            spacing={1}
          >
            <Grid
              item
              item
              md={12}
              xs={12}
              lg={12}
              xl={12}
            >
              <TextField
                fullWidth
                label="Department Name"
                margin="dense"
                name="name"
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              lg={12}
              xl={12}
            >
              <TextField
                fullWidth
                 type="number"
                label="Total Number of Levels"
                margin="dense"
                name="levels"
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={()=>{
               setModal(false)
            }}
            disabled={loading}
          >
            {loading?"Loading..":"Add Level"}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={()=>{
               setModal(false)
            }}
            disabled={loading}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
    </Modal>
    </div>
  );
};

AddUser.propTypes = {
  className: PropTypes.string
};

export default AddUser;
