import React from 'react';
import {
     Grid,  Button
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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
         marginTop:20,
         marginBottom:20,
         marginLeft:10
      }
  }));

const TimeTableForm = ({departments= [], levels= [],handleFetchTimetableChange, department, level,fetchDepartmentTimetable, createTimeTable}) => {
  const classes = useStyles();
  return (
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
                {
                  !createTimeTable? (
                    <div>
                      <Button  onClick={()=>{}} className= {classes.button} variant="contained" color="primary">  Get TimeTable</Button>
                      <Button  onClick={()=>{ }} className= {classes.button} variant="contained" color="primary">  Save TimeTable</Button>
                    </div>
                  ):(
                     <div>
                           <Button  onClick={()=>{ }} className= {classes.button} variant="contained" color="primary"> Creating TimeTable</Button>
                           <Button  onClick={()=>{ }} className= {classes.button} variant="contained" color="primary">  Save TimeTable</Button>
                     </div>
                  )
                }
         </Grid>
  );
}
 
 
export default TimeTableForm;