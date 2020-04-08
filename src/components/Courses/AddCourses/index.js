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
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AddCourses = ({className, courseCode,courses, description,department,loading, levels, handleChange,addCourse,...rest}) => {
  const classes = useStyles();
  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
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
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
                <InputLabel> Department</InputLabel>
                <Select
                  name='department'
                  onChange={handleChange}
                  value={null}
                >
                  {department.map((value)=>(
                      <MenuItem value={value._id}>{value.name}</MenuItem>
                  ))}
                </Select>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
                <InputLabel> Level</InputLabel>
                <Select
                  name='level'
                  onChange={handleChange}
                  value={null}
                >
                  {levels.map((value)=>(
                      <MenuItem value={value._id}>{value.number}</MenuItem>
                  ))}
                </Select>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
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
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
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
            >
              <TextField
                fullWidth
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
            onClick={addCourse}
            disabled={loading}
          >
            {loading?"Loading..":"Add Course"}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddCourses.propTypes = {
  className: PropTypes.string
};

export default AddCourses;
