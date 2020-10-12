import { 
  FETCH_ATTENDANCE_BY_MATRICNUMBER_FAILURE,
  FETCH_ATTENDANCE_BY_MATRICNUMBER_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
userAttendance:[],
error:""
}

export const attendanceReducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
 case FETCH_ATTENDANCE_BY_MATRICNUMBER_SUCCESS:
   return Object.assign({}, state,  {error:'',userAttendance: action.attendance});
 case FETCH_ATTENDANCE_BY_MATRICNUMBER_FAILURE:
   return Object.assign({}, state,  {error:action.error,userAttendance:[]});
 default:
   return state;
}
}