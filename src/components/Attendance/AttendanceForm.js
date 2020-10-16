import React from 'react';
import {
     Grid,  Button, TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';



const useStyles = makeStyles((theme) => ({

    formControl: {
        margin: theme.spacing(1),
        marginTop: 15,
        minWidth: 120,
        width:300,
        marginRight:30
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      button :{
         marginTop:30,
         marginBottom:30,
         marginLeft:10
      }
  }));

const AttendanceForm = ({departments= [], levels= [],courses=[],
  department="", level="", course="", 
  startTime="", endTime='', date="",
  handleChange= ()=>{}, handleFetchStudents= ()=>{}, saveAttendance= ()=>{}}) => {


  const classes = useStyles();
  return (
     <Grid item lg={12} xs={12} >
               <FormControl className={classes.formControl}>
               <InputLabel  className= {classes.select}> Department</InputLabel>
                  <Select
                   value={department}
                   name="department"
                   onChange= {handleChange}
                 >
                 {
                     departments.map((d)=>(
                        <MenuItem key= {d.id} value={d.id}>{d.name}</MenuItem>
                     ))
                 }
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
               <InputLabel >Level</InputLabel>
                  <Select value={level}
                  onChange= {handleChange}
                  name="level"
                 >
                   {
                     levels.map((d)=>(
                        <MenuItem key= {d.id} value={d.id}>{d.level}</MenuItem>
                     ))
                 }
                </Select>

                
                </FormControl>
                <FormControl className={classes.formControl}>
               <InputLabel  className= {classes.select}> Course</InputLabel>
                  <Select
                   value={course}
                   name="course"
                   onChange= {handleChange}
                 >
                 {
                     courses.map((d)=>(
                        <MenuItem  key = {d.id}  value={d.id}>{d.courseCode}</MenuItem>
                     ))
                 }
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                  name="startTime"
                  label="Class Start Time"
                  type="time"
                  value={startTime}
                  className={classes.textField}
                  onChange= {handleChange}
                  InputLabelProps={{
                     shrink: true,}}
                  inputProps={{
                  step: 3000, // 5 min
                  }}
              />
                </FormControl>
                <FormControl className={classes.formControl}>
                <TextField
                  name="endTime"
                  label="Class End Time"
                  type="time"
                  value={endTime}
                  className={classes.textField}
                  onChange= {handleChange}
                  InputLabelProps={{
                     shrink: true,}}
                  inputProps={{
                  step: 3000, // 5 min
                  }}
              />
                </FormControl>
                <FormControl className={classes.formControl}>
                  <TextField
                     name="date"
                    label="Date"
                    type="date"
                    // value={date}
                    onChange={handleChange}
                    className={classes.textField}
                   InputLabelProps={{
                     shrink: true,
                    }}
                  />
                </FormControl>
                
                 <div>
                   <Button  onClick={()=>{
                     handleFetchStudents()
                   }} className= {classes.button} variant="contained" color="primary"> Fetch Students </Button>
                   <Button  onClick={()=>{ 
                     saveAttendance()
                   }} className= {classes.button} variant="contained" color="primary">  Save Attendance </Button>
               </div>
         </Grid>
  );
}
 
 
export default AttendanceForm;