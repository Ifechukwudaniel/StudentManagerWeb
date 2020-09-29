import React, {useState} from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import MaterialTable from 'material-table';
import Typography from '@material-ui/core/Typography';


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


export default function Table({data}) {
  const classes = useStyles();

  const [row, setData] = useState(data);

  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Total number of levels',field:'totalLevels',  editable: 'never'},
  ]);
  return (
    <TableContainer component={Paper}>
      <MaterialTable
         title="Departments"
         columns={columns}
         data={data}
         onRowClick= {()=>{
           alert("jjjdj")
         }}
          options= {{
            sorting:true,
            exportButton: true,
          
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