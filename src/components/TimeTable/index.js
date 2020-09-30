import React from 'react';
import {
  ScheduleComponent, Day, Week, WorkWeek, Agenda, Month, Inject,
  ViewsDirective, ViewDirective
} from '@syncfusion/ej2-react-schedule';


const TimeTable = () => {
  let  data = [
    {
        "id": "5f74bb1598ff51644888f8f2",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "TEST hxdhhd",
        "RecurrenceRule": "FREQ=WEEKLY;INTERVAL=1",
        "StartTime": "2020-09-28T07:00:00.000Z",
        "EndTime": "2020-09-28T09:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f3",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "nnnd",
        "RecurrenceRule": "FREQ=WEEKLY;INTERVAL=1",
        "StartTime": "2020-09-28T09:00:00.000Z",
        "EndTime": "2020-09-28T11:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f4",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu chapelmmnns c cdc",
        "RecurrenceRule": "FREQ=WEEKLY;INTERVAL=1",
        "StartTime": "2020-09-28T12:00:00.000Z",
        "EndTime": "2020-09-28T14:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f9",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu mcmmc chapel",
        "StartTime": "2020-09-29T07:00:00.000Z",
        "EndTime": "2020-09-29T09:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fa",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biu  nncc chapel",
        "StartTime": "2020-09-29T09:00:00.000Z",
        "EndTime": "2020-09-29T10:40:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fb",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biunn  chapel",
        "StartTime": "2020-09-29T11:00:00.000Z",
        "EndTime": "2020-09-29T12:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fc",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu chapel",
        "StartTime": "2020-09-29T12:00:00.000Z",
        "EndTime": "2020-09-29T14:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8ee",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu chkxdk apel",
        "StartTime": "2020-09-30T07:00:00.000Z",
        "EndTime": "2020-09-30T09:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8ef",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biu jdjdj chapel",
        "StartTime": "2020-09-30T09:00:00.000Z",
        "EndTime": "2020-09-30T10:40:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f0",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biu  mm   chapel",
        "StartTime": "2020-09-30T11:00:00.000Z",
        "EndTime": "2020-09-30T12:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f1",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu nnnc chapel",
        "StartTime": "2020-09-30T12:00:00.000Z",
        "EndTime": "2020-09-30T14:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8f9",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu mcmmc chapel",
        "StartTime": "2020-10-01T07:00:00.000Z",
        "EndTime": "2020-10-01T09:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fa",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biu  nncc chapel",
        "StartTime": "2020-10-01T09:00:00.000Z",
        "EndTime": "2020-10-01T10:40:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fb",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "Biunn  chapel",
        "StartTime": "2020-10-01T11:00:00.000Z",
        "EndTime": "2020-10-01T12:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8fc",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "Biu chapel",
        "StartTime": "2020-10-01T12:00:00.000Z",
        "EndTime": "2020-10-01T14:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8ea",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "  cncnBiu chapel",
        "StartTime": "2020-10-02T07:00:00.000Z",
        "EndTime": "2020-10-02T09:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8eb",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "ccBiu chapel",
        "StartTime": "2020-10-02T09:00:00.000Z",
        "EndTime": "2020-10-02T10:40:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8ec",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "CSC 123",
        "Location": "llBiu chapel",
        "StartTime": "2020-10-02T11:00:00.000Z",
        "EndTime": "2020-10-02T12:00:00.000Z"
    },
    {
        "id": "5f74bb1598ff51644888f8ed",
        "repeat": true,
        "IsAllDay": false,
        "Subject": "Csc 125",
        "Location": "ccBiu chapel",
        "StartTime": "2020-10-02T12:00:00.000Z",
        "EndTime": "2020-10-02T14:00:00.000Z"
    }
]
  return (
    <ScheduleComponent width='100%' eventSettings={{dataSource:data,editFollowingEvents:false}} height='550px' currentView='WorkWeek'
     
      readonly={true}   timeScale={{ enable: true }}>
      <ViewsDirective>
         <ViewDirective    option='WorkWeek'/>
         <ViewDirective    option="Day"/>
      </ViewsDirective>
       <Inject services={[WorkWeek, Day]} />
    </ScheduleComponent>
  );
}
 
 
export default TimeTable;