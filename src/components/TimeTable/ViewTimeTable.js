import React from 'react';
import {
     Grid, Paper, Button
} from '@material-ui/core'
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import TimeTableAccordion from './TimeTableAccordion';



const useStyles = makeStyles((theme) => ({

    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width:300,
        marginRight:20
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      button :{
         marginTop:30
      }
  }));

const ViewTimeTable = ({departments= [], levels= [],handleFetchTimetableChange, department, level,fetchDepartmentTimetable}) => {
  const classes = useStyles();
  return (
      <Grid container spacing={3} >
          <TimeTableForm 
             departments={departments} 
             levels = {levels}
             handleFetchTimetableChange = {handleFetchTimetableChange} 
             level= {level}
             department= {department}
             fetchDepartmentTimetable= {fetchDepartmentTimetable}
          />
         <TimeTableAccordion/>
      </Grid>
  );
}
 
 
export default ViewTimeTable;