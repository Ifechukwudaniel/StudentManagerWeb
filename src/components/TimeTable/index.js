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
         marginTop:20
      }
  }));

const TimeTable = ({departments= [], levels= [],handleFetchTimetableChange, department, level,fetchDepartmentTimetable, timeTableData}) => {
  const classes = useStyles();
  return (
      <Grid container spacing={3} >
         <Grid item lg={12} xs={12} >
               <FormControl className={classes.formControl}>
               <InputLabel  className= {classes.select}> Department</InputLabel>
                  <Select
                   value={department}
                   name="department"
                   onChange= {handleFetchTimetableChange}
                 >
                 {
                     departments.map((d)=>(
                        <MenuItem value={d.id}>{d.name}</MenuItem>
                     ))
                 }
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
               <InputLabel >Level</InputLabel>
                  <Select value={level}
                  onChange= {handleFetchTimetableChange}
                  name="level"
                 >
                   {
                     levels.map((d)=>(
                        <MenuItem value={d.id}>{d.level}</MenuItem>
                     ))
                 }
                </Select>
                </FormControl>
                 <Button  onClick={
                     ()=>{
                        fetchDepartmentTimetable(level)
                     }
                 } className= {classes.button} variant="contained" color="primary">  Get TimeTable</Button>
         </Grid>
         <Grid item xs={12}>
         <ScheduleComponent  width='100%' eventSettings={{dataSource:timeTableData,editFollowingEvents:false}} height='550px' currentView='WorkWeek'
             readonly={true}  workHours={{
            highlight: true, start: '07:00', end: '18:00'}} timeScale={{ enable: false }}>
             <ViewsDirective>
              <ViewDirective    option='WorkWeek'/>
              {/* <ViewDirective     option="Day"/> */}
            </ViewsDirective>
          <Inject services={[WorkWeek, Day]} />
         </ScheduleComponent>
       </Grid>
      </Grid>
  );
}
 
 
export default TimeTable;