  export const  convertTime12to24 = (time12h) => {
  const [fullMatch, time, modifier] = time12h.match(/(\d?\d:\d\d)\s*(\w{2})/i);

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = 0;
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return parseInt(hours)
}


export const  convertTime12ToHourMinute = (time12h) => {
  const [fullMatch, time, modifier] = time12h.match(/(\d?\d:\d\d)\s*(\w{2})/i);

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = 0;
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return {hour:parseInt(hours), minute :parseInt(minutes)}
}

export function to12Time(time) {
  // Check correct time format and split into components
  time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];

  if (time.length > 1) { // If time format correct
    time = time.slice (1);  // Remove full string match value
    time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
    time[0] = +time[0] % 12 || 12; // Adjust hours
  }
  return time.join (''); // return adjusted time or original string
}

export function to24TimeString(time12h) {
  
  if(time12h==""){
     return '00:00'
  }
  else{
  const [fullMatch, time, modifier] = time12h.match(/(\d?\d:\d\d)\s*(\w{2})/i);

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return `${hours}:${minutes}`;
}
}

export function to24TimeNumber(time12h) {
  
  if(time12h==""){
     return '00:00'
  }
  else{
  const [fullMatch, time, modifier] = time12h.match(/(\d?\d:\d\d)\s*(\w{2})/i);

  let [hours, minutes] = time.split(':');

  if (hours === '12') {
    hours = '00';
  }

  if (modifier === 'PM') {
    hours = parseInt(hours, 10) + 12;
  }

  return  parseInt(hours)
}
}

export const compareStartAndEndTime =(startTime, endTime)=>{
  let timeStart = startTime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [startTime];
  let timeEnd = endTime.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [endTime];
  if (timeStart.length > 1 && timeEnd.length>1) { // If time format correct
    timeStart = timeStart.slice (1);  // Remove full string match value
    timeEnd = timeEnd.slice (1);  // Remove full string match value
    if(  parseInt(timeStart[0]) < parseInt(timeEnd[0]))
      return true
    return false
  }
}