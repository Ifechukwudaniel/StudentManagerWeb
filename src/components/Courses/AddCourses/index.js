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
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Dialog,
  Modal,
  Typography,
  IconButton
} from '@material-ui/core';
import PlusIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) =>  ({
  root: {
    margin:'auto',
    width: 500,
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
  },
  formItem:{
    marginTop:10,
    marginBottom:10
  }
}));

const AddCourses = ({className, courseCode,courses, description,department,loading, levels,modal, handleChange,addCourse, openModal, closeModal,...rest}) => {
  const classes = useStyles();
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
            Add a new course
          </Typography>
        </Grid>
        <Grid item>
          <IconButton  onClick= {()=>openModal()} className={classes.avatar}>
            <PlusIcon className={classes.icon} />
          </IconButton>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
    <Modal  style={{display:'flex',alignItems:'center',justifyContent:'center'}}  open={modal}>
    <Card
      {...rest}
      className={classes.root}
    >
      <form
        autoComplete="off"
        noValidate
      >
        <CardHeader
          title="Create a new course"
        />
        <Divider />
        <CardContent>
          <Grid
            spacing={1}
          >
            <Grid
              item
              md={12}
              xs={12}
              lg={12}
              xl={12}
            >
                <InputLabel> Department</InputLabel>
                <Select
                className={classes.formItem}
                  style={{width:'100%'}}
                  name='department'
                  onChange={handleChange}
                  value={null}
                >
                  {department.map((value)=>(
                      <MenuItem value={value.id}>{value.name}</MenuItem>
                  ))}
                </Select>
                <InputLabel> Level</InputLabel>
                <Select
              
                  className={classes.formItem}
                 style={{width:'100%'}}
                  name='level'
                  onChange={handleChange}
                  value={null}
                >
                  {levels.map((value)=>(
                      <MenuItem value={value.id}>{value.level}</MenuItem>
                  ))}
                </Select>
            </Grid>
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
                className={classes.formItem}
                label="Course Code"
                margin="dense"
                name="courseCode"
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
                className={classes.formItem}
                label="Title"
                margin="dense"
                name="title"
                onChange={handleChange}
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
                className={classes.formItem}
                label="Lecturer"
                margin="dense"
                name="lecturer"
                onChange={handleChange}
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
                className={classes.formItem}
                label="Description"
                margin="dense"
                name="description"
                onChange={handleChange}
                variant="outlined"
                multiline={true}
                rows={5}
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
               addCourse()
               closeModal()
            }}
            disabled={loading}
          >
            {loading?"Loading..":"Add Course"}
          </Button>
          <Button
            color="secondary"
            variant="contained"
            onClick={()=>{
               closeModal()
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

AddCourses.propTypes = {
  className: PropTypes.string
};

export default AddCourses;
