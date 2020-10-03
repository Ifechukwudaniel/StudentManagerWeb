import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from './TabPanel'
import TimeTableAccordions from './TimeTableAccordion'
import TimeTable from '.'
import TimeTableForm from './TimeTableForm';

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
}));

const TimeTableTabs = ({departments,levels,handleFetchTimetableChange, department, level, fetchDepartmentTimetable, timeTableData})=> {
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
          <Tab label="Add TimeTable" {...a11yProps(0)} />
          <Tab label="Edit Timetable" {...a11yProps(1)} />
          <Tab label="View Timetable" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel  value={value} index={0} dir={theme.direction}>
         <TimeTableForm
              levels = {levels}
              handleFetchTimetableChange = {handleFetchTimetableChange} 
              level= {level}
              department= {department}
              departments={departments}
              fetchDepartmentTimetable= {fetchDepartmentTimetable}
              createTimeTable
          />
          <TimeTableAccordions/>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <TimeTableForm
             levels = {levels}
             handleFetchTimetableChange = {handleFetchTimetableChange} 
             level= {level}
             department= {department}
             departments={departments}
             fetchDepartmentTimetable= {fetchDepartmentTimetable} 
          />
          <TimeTableAccordions/>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
           <TimeTable departments={departments} 
             levels = {levels}
             handleFetchTimetableChange = {handleFetchTimetableChange} 
             level= {level}
             department= {department}
             departments={departments}
             fetchDepartmentTimetable= {fetchDepartmentTimetable}
             timeTableData={timeTableData}
            />
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default   TimeTableTabs