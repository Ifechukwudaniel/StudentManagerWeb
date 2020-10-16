import React from 'react';
import MaterialTable from 'material-table'




export default function CreateTimeTable({title}) {
  const { useState } = React;

  const [columns, setColumns] = useState([
    { title: 'Course', field: 'course' },
    { title: 'Start Time', field: 'startTime', type: 'time'  },
    { title: 'End Time', field: 'endTime', type: 'time' },
    {title: 'Location', field: 'location'},
  ]);

  const [data, setData] = useState([
    // {"course":"5e9dc8098ac82322efe9e203","startTime":"08:00 AM","endTime":"10:00 AM" , "location":"  cncnBiu chapel","repeated":true, "level":"5e8e320de1a20dca09a7fef5", "weekDay":5 },
		// {"course":"5e9dc7da8ac82322efe9e202","startTime":"10:00 AM","endTime":"11:40 AM", "location":"ccBiu chapel", "repeated":true,"level":"5e8e320de1a20dca09a7fef5","weekDay":5 },
		// {"course":"5e9dc7da8ac82322efe9e202","startTime":"12:00 PM","endTime":"01:00 PM", "location":"llBiu chapel" ,"repeated":true, "level":"5e8e320de1a20dca09a7fef5","weekDay":5 },
  ]);

  return (
    <MaterialTable
      title={title}
      columns={columns}
      style={{margin:10}}
      data={data}
      options= {{search:false, paging:false}}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...data, newData]);
              
              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              
              resolve()
            }, 1000)
          }),
      }}
    />
  )
}
