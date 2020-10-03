import { 
  FETCH_DEPARTMENT_TIMETABLE_SUCCESS,
  FETCH_DEPARTMENT_TIMETABLE_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
departmentTimeTable: [],
error:""
}

export const timeTableReducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
 case FETCH_DEPARTMENT_TIMETABLE_SUCCESS:
   return Object.assign({}, state,  {error:'',departmentTimeTable: action.timetable});
 case FETCH_DEPARTMENT_TIMETABLE_FAILURE:
   return Object.assign({}, state,  {error:action.error,departmentTimeTable: []});
 default:
   return state;
}
}