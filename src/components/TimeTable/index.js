import React from 'react';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';


const TimeTable = () => {
  return (
    <ScheduleComponent width='100%' height='550px' currentView='WorkWeek'
     
      readonly={true}  showHeaderBar={false} timeScale={{ enable: true }}>
      <ViewsDirective>
         <ViewDirective    option='WorkWeek'/>
      </ViewsDirective>
       <Inject services={[WorkWeek]} />
    </ScheduleComponent>
  );
}
 
 
export default TimeTable;