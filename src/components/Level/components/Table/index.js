import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MaterialTable from "material-table"

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function Table({data}) {
  const [row, setData] = useState(data);

  const [columns] = useState([
    { title: 'Department', field: 'department',  editable: 'never'},
    { title: 'Level', field:'level', filtering: false,  editable: 'never' },
    { title: 'Has A TimeTable', field:'hasTimeTable' , filtering: false,  editable: 'never'},
    { title: 'Total Number Of Courses', field:'totalCourses', filtering: false ,  editable: 'never'},
  ]);
  return (
    <TableContainer component={Paper}>
          <MaterialTable
         title="Levels"
         columns={columns}
         onRowClick= {()=>{
           alert("jjjdj")
         }}
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