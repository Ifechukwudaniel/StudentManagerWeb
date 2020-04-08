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

const AddLevel = ({className,number,department,addLevel,loading,handleChange, ...rest}) => {
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
          title="Create a new level"
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
                      <MenuItem key={value._id} value={value._id}>{value.name}</MenuItem>
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
                label="Level"
                margin="dense"
                name="number"
                type='number'
                onChange={handleChange}
                required
                value={number}
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
            onClick={addLevel}
            disabled={loading}
          >
            { loading? "Loading..." :"Add Level"}
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

AddLevel.propTypes = {
  className: PropTypes.string
};

export default AddLevel
