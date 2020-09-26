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
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {}
}));

const AddDepartments = props => {
  const { className,name,addDepartment,loading,handleChange, ...rest  } = props;

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
          title="Create a new department"
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
              <TextField
                fullWidth
                label="department"
                margin="dense"
                name="name"
                onChange={handleChange}
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
                type="number"
                label="total number of level"
                margin="dense"
                name="numberOfLevels"
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
            onClick={addDepartment}
            disabled={loading}
          >
            { loading? "Loading..." :"Add Department"}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddDepartments.propTypes = {
  className: PropTypes.string
};

export default AddDepartments;
