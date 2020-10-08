import React, {useState} from 'react';
import {
     Grid,  Button, TextField
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { to24Time } from '../../helpers/timeConverter';



const useStyles = makeStyles((theme) => ({

    formControl: {
        margin: theme.spacing(1),
        marginTop: 15,
        minWidth: 120,
        width:"100%",
        marginRight:30,
        flexDirection:'row'
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
      button :{
        marginTop:13,
        marginBottom:30,
        marginLeft:20
      },
      textField:{
        width:'40%'
      }
  }));

const FetchAttendanceForm = ({ handleChange= ()=>{},matricNumber="", fetchStudentAttendance= ()=>{}}) => {

  const classes = useStyles();
  return (
        <Grid item lg={12} xs={12} >
         <FormControl className={classes.formControl}>
                  <TextField
                    name="matricNumber"
                    label="Matric Number "
                    type="text"
                    onChange={handleChange}
                    className={classes.textField}
                    value={matricNumber}
                  />
                <div>
                   <Button  onClick={()=>{
                      fetchStudentAttendance()
                   }} className= {classes.button} variant="contained" color="primary"> Fetch Students Attendance  </Button>
               </div>
               </FormControl>
         </Grid>
  );
}
 
 
export default FetchAttendanceForm;