import React from 'react';
import MaterialTable from 'material-table'
import {connect} from 'react-redux';
import * as actions from '../../actions'


 function CreateTimeTable(props) {
  const { useState } = React;
  let  courseData= {}
   props.course.map((data)=>{
    
   })
  let data = []
  const [columns, setColumns] = useState([
    { title: 'Course', field: 'course',  lookup: { ...courseData } },
    { title: 'Start Time', field: 'startTime', type: 'time'  },
    { title: 'End Time', field: 'endTime', type: 'time' },
    { title: 'Location', field: 'location'},
  ]);
  

  if(props.title==="Monday") data  = props.timeTable.monday;
  if(props.title==="Tuesday")  data  = props.timeTable.tuesday;
  if(props.title==="Wednesday")  data  = props.timeTable.wednesday;
  if(props.title==="Thursday")  data  = props.timeTable.thursday;
  if(props.title==="Friday") data  = props.timeTable.friday;

const setData= (data)=>{
   if(props.title==="Monday") return props.saveMonday(data);
   if(props.title==="Tuesday")  return props.saveTuesday(data);
   if(props.title==="Wednesday")  return props.saveWednesday(data);
   if(props.title==="Thursday")  return props.saveThursday(data);
   if(props.title==="Friday")  return props.saveFriday(data);
 }

  return (
    <MaterialTable
      title={props.title}
      columns={columns.map((c)=>({...c,tableData:undefined}))}
      style={{margin:10}}
      data={data}
      options= {{search:false, paging:false}}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
              setData([...data, newData]);
              resolve();
            }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }
          ),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);
              resolve()
          }),
      }}
    />
  )
}


function mapStateToProps(state) {
  return {
   timeTable:state.timeTable
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveMonday: (data) => {
      dispatch(actions.saveMondayData(data))
    },
    saveTuesday: (data) => {
      dispatch(actions.saveTuesdayData(data))
    },
    saveWednesday: (data) => {
      dispatch(actions.saveWednesdayData(data))
    },
    saveThursday: (data) => {
      dispatch(actions.saveThursdayData(data))
    },
    saveFriday: (data) => {
      dispatch(actions.saveFridayData(data))
    }
}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTimeTable);
