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
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

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
    { title: 'Present', field: 'present',filtering:false},
    { title: 'Absent', field: 'absent', filtering:false},
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
            exportButton: true,
            filtering:true,
          }}       
         detailPanel={rowData => {
        return (
          <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                  Attendance
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>StartTime</TableCell>
                    <TableCell align="right">EndTime</TableCell>
                    <TableCell align="right">Present</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rowData.attendance.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">{moment(historyRow.date).format("YYYY-MM-DD")}</TableCell>
                      <TableCell>{historyRow.timeStart}</TableCell>
                      <TableCell align="right">{historyRow.timeEnd}</TableCell>
                      <TableCell align="right">{historyRow.attended? " Present": "Absent"} </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
                </Table>
            </Box>
        )
      }}       
      />
    </TableContainer>
  );
}