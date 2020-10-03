import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function StudentAttendanceTable({data}) {
  const classes = useStyles();

  const [row, setData] = useState(data);

  const [columns, setColumns] = useState([
    { title: 'CourseCode', field: 'courseCode' },
    { title: 'Present', field: 'present'},
    { title: 'Absent', field: 'absent'},
  ]);

  return (
    <TableContainer component={Paper}>
      <MaterialTable
         title="Students Attendance"
         columns={columns}
         data={data}
         onRowClick= {()=>{
           alert("jjjdj")
         }}
          options= {{
          
          }}       
      />
    </TableContainer>
  );
}