import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import MaterialTable from 'material-table'
import Checkbox from '@material-ui/core/Checkbox'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function StudentTable(props) {
  const classes = useStyles();

  const [row, setData] = useState([]);

  useEffect(()=>{
    setData(props.data)
  },[props.data])


  const [columns, setColumns] = useState([
    { title: 'Name', field: 'name' },
    { title: 'Matric Number', field: 'matricNumber'},
      {title:'Present', field:'present', 
      render:(rowData)=>(
        <Checkbox
          checked={rowData.present}
        onChange={(event)=>{props.handleCheck(rowData, event)}}
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      )}
  ]);

  return (
    <TableContainer component={Paper}>
      <MaterialTable
         title="Students"
         columns={columns}
         data={row}
          options= {{
            sorting:true,
            exportButton: true,
            filtering:true,
          }}       
      />
    </TableContainer>
  );
}