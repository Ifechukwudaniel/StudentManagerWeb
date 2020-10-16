import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TimeTableForm from './TimeTableForm';
import CreateTimeTable from './CreateTimeTable'
import { useConfirm } from 'material-ui-confirm';
import { isWednesday } from 'date-fns';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  buttonGroup:{
    marginBottom:10
  }
}));


export default function CreateTimeTableStepper({departments= [], 
  levels= [],handleFetchTimetableChange, department,
   level,fetchDepartmentTimetable, createTimeTable, courses,
   saveTimeTable
  }) {

  let  stepArray = ['Select Department and Level', 'Add Monday Timetable', 'Add Tuesday Timetable','Add Wednesday  Timetable', 'Add Thursday Timetable', 'Add Friday Timetable' ]
  
  function getStepContent(stepIndex) {
    if(stepIndex==0){
      return (
        <TimeTableForm
        levels = {levels}
        handleFetchTimetableChange = {handleFetchTimetableChange} 
        level= {level}
        department= {department}
        departments={departments}
        fetchDepartmentTimetable= {fetchDepartmentTimetable}
        createTimeTable
    />
      )
    }

    if(stepIndex===1){
      return  <CreateTimeTable title="Monday" courses={courses}/>
    }
    if(stepIndex===2){
     return  <CreateTimeTable title="Tuesday" courses={courses} />
    }
    if(stepIndex===3){
      return    <CreateTimeTable title="Wednesday" courses={courses} />
    }
    if(stepIndex===4){
      return  <CreateTimeTable title="Thursday" courses={courses} />
    }
    if(stepIndex===5){
      return <CreateTimeTable title="Friday" courses={courses}/>
    } 
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

function getSteps() {
  return stepArray
}


  const handleNext = () => {
       if(!department && !level){
       
       }
       else{
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
       }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            {/* <Typography className={classes.instructions}>Sent timetable to server</Typography> */}
            <Button variant="contained" color="primary" onClick={()=>{
             
            handleReset()
            }}>Save TimeTable</Button>
          </div>
        ) : (
          <div>
            <div>{getStepContent(activeStep)}</div>
            <div className={classes.buttonGroup}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Save TimeTable' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
