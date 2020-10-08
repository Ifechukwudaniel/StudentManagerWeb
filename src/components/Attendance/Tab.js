import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel'
import Typography from '@material-ui/core/Typography'
import StudentTable from './StudentTable';
import StudentAttendanceTable from './StudentAttendanceTable'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'
import AttendanceForm from './AttendanceForm'
import FetchAttendanceForm from './FetchAttendanceForm';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.tab,
    width:"100%",
  },
  saveButton :{
   marginBottom:20,
   marginTop:20,
   marginLeft:20
  }
}));

const AttendanceTabs = ({departments =[]
  ,levels=[], courses=[], users=[],
   department='' ,level="", 
   startTime="", endTime="",
   course="", handleFormChange, handleFetchStudents,
   date="",
   matricNumber= "",
   userAttendance=[],
   handleCheck =()=>{},
   fetchStudentAttendance=()=>{},
   saveAttendance})=> {
    
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="error"
          textColor="inherit"
          variant="fullWidth"
        >
          <Tab label="Add  Student Attendance" {...a11yProps(0)} />
          <Tab label="View Student Attendance " {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
          <Grid>
             <AttendanceForm
              handleChange={handleFormChange}
              departments={departments}
              department={department}
              levels= {levels}
              level={level}
              courses={courses}
              course={course}
              handleFetchStudents= {handleFetchStudents}
              saveAttendance= {saveAttendance}
              startTime={startTime}
              endTime={endTime}
              date={date}
              />
             
              <StudentTable handleCheck= {handleCheck} data={users}/>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <FetchAttendanceForm
            fetchStudentAttendance= {fetchStudentAttendance}
            handleChange={handleFormChange}
            matricNumber={matricNumber}
          />
          <StudentAttendanceTable data={userAttendance}/>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default   AttendanceTabs