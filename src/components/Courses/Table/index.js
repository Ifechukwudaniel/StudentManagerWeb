import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function SimpleTable({data}) {
  const classes = useStyles();
  const  rows = data
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell   component="th" scope="row" >title</TableCell>
            <TableCell align="right">courseCode</TableCell>
            <TableCell align="right">TotalMaterial</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">Level</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row._id}>
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell align="right">{row.courseCode}</TableCell>
              <TableCell align="right">{1}</TableCell>
              <TableCell align="right">{row.department.name}</TableCell>
              <TableCell align="right">{row.level.number}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}