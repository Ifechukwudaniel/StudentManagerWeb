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


export default function SimpleTable({data}) {
  const classes = useStyles();

  const [row, setData] = useState(data);

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Matric Number', field: 'matricNumber'},
    { title: 'Department', field: 'department'},
    { title: 'Levels', field: 'level', filtering:'never'},
    { title: 'Role', field: 'role',lookup: { admin: 'Admin', user: 'User' },},
  ]);

  return (
    <TableContainer component={Paper}>
      <MaterialTable
         title="Departments"
         columns={columns}
         data={data}
          options= {{
            sorting:true,
            exportButton: true,
            filtering:true,
          }}
         editable={{
       onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...row];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...row];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
         
      />
    </TableContainer>
  );
}