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


export default function StudentTable({data}) {
  const classes = useStyles();

  const [row, setData] = useState(data);

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Matric Number', field: 'matricNumber'},
    { title: 'Department', field: 'department'},
    { title: 'Levels', field: 'level', filtering:'never'},
  ]);

  return (
    <TableContainer component={Paper}>
      <MaterialTable
         title="Students"
         columns={columns}
         data={data}
         onRowClick= {()=>{
           alert("jjjdj")
         }}
          options= {{
            sorting:true,
            exportButton: true,
            filtering:true,
            selection: true
          }}       
      />
    </TableContainer>
  );
}