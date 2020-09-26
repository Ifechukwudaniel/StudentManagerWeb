import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme=>({
  table: {
    minWidth: 650,
  },
  edit:{
    background:theme.palette.success.main,
    color:theme.palette.info.contrastText,
  },
  delete:{
    background:theme.palette.error.main,
    color:theme.palette.info.contrastText,
  },
  rename:{
    background:theme.palette.primary.main,
    color:theme.palette.info.contrastText,
    
  }
}));


export default function SimpleTable({data}) {
  const classes = useStyles();
  const  rows = data
  return (
    <TableContainer component={Paper}>
      <Table  checkboxSelection  className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Department</TableCell>
            <TableCell align="left">Level</TableCell>
            <TableCell align='center'>Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
            <TableCell align="center">Rename</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell align="left">
                {row.name}
              </TableCell>
              <TableCell align="left">
                {row.levels.length}
              </TableCell>
              <TableCell align='center'>
                 <Button contained="true"  className={classes.edit}>Edit </Button>
              </TableCell>
              <TableCell align="center">
                 <Button contained="true" className={classes.delete} >Delete </Button>
              </TableCell>
              <TableCell align="center">
                 <Button contained="true" className={classes.rename} >  Rename </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}