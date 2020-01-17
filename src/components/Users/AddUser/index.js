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

const AddUser = props => {
  const { className,name,matricNumber,role ,addUser,loading,handleChange, ...rest  } = props;

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
          title="Create a new user"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="matricNumber"
                margin="dense"
                name="matricNumber"
                onChange={handleChange}
                required
                value={matricNumber}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="password"
                margin="dense"
                name="password"
                onChange={handleChange}
                required
                value={name}
                variant="outlined"
                type="password"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <InputLabel>Role</InputLabel>
                <Select
                  name='role'
                  value={role}
                  onChange={handleChange}
                >
                  <MenuItem value={'user'}>users</MenuItem>
                  <MenuItem value={'admin'}>admin</MenuItem>
                </Select>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <CardActions>
          <Button
            color="primary"
            variant="contained"
            onClick={addUser}
            disabled={loading}
          >
            { loading? "Loading..." :"Add User"}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddUser.propTypes = {
  className: PropTypes.string
};

export default AddUser;
