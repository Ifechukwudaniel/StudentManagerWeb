import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TimeTableForm from './TimeTableForm';
import EditTimeTable from './EditTimeTable'
import { useConfirm } from 'material-ui-confirm';

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


export default function EditTimeTableStepper(props) {
  let  stepArray = ['Select Department and Level', 'Edit Monday Timetable', 'Edit Tuesday Timetable','Edit Wednesday  Timetable', 'Edit Thursday Timetable', 'Edit Friday Timetable' ]
  
  function getStepContent(stepIndex) {
    if(stepIndex==0){
      return (
        <TimeTableForm
        levels = {props.levels}
        handleFetchTimetableChange = {props.handleFetchTimetableChange} 
        level= {props.level}
        department= {props.department}
        departments={props.departments}
        fetchDepartmentTimetable= { props.fetchDepartmentTimetable}
        editTimeTable
    />
      )
    }

    if(stepIndex===1){
      return  <EditTimeTable title="Monday" courses={props.courses}/>
    }
    if(stepIndex===2){
     return  <EditTimeTable title="Tuesday" courses={props.courses} />
    }
    if(stepIndex===3){
      return    <EditTimeTable title="Wednesday" courses={props.courses} />
    }
    if(stepIndex===4){
      return  <EditTimeTable title="Thursday" courses={props.courses} />
    }
    if(stepIndex===5){
      return <EditTimeTable title="Friday" courses={props.courses}/>
    } 
  }

  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();
  const confirm = useConfirm()

function getSteps() {
  return stepArray
}


  const handleNext = () => {
       if(!props.department && !props.level){
         confirm({title:"",description:'Please select a Department and a Level', cancellationText:"",})
         .then(()=>{

         })
         .catch(()=>{

         })
       }
       else{
        confirm({ title:"",description:'Are You Sure You Want To continue'})
        .then(()=>{
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch(()=>{

        })
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
            <Button variant="contained" color="primary" onClick={()=>{
             props.saveTimeTable()
             console.log(props)
            // handleReset()
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

