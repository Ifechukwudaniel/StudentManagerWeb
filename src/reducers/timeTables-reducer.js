import { 
  FETCH_DEPARTMENT_TIMETABLE_SUCCESS,
  FETCH_DEPARTMENT_TIMETABLE_FAILURE,
  ADD_MONDAY_DATA,
  ADD_THURSDAY_DATA,
  ADD_WEDNESDAY_DATA,
  ADD_TUESDAY_DATA,
  ADD_FRIDAY_DATA
} from '../actions/types';

const INITIAL_STATE = {
departmentTimeTable: [],
error:"",
monday:[],
tuesday:[],
wednesday:[],
thursday:[],
friday:[]
}

export const timeTableReducer = (state = INITIAL_STATE, action) => {
switch(action.type) {
 case FETCH_DEPARTMENT_TIMETABLE_SUCCESS:
   return Object.assign({}, state,  {error:'',departmentTimeTable: action.timetable});
 case FETCH_DEPARTMENT_TIMETABLE_FAILURE:
   return Object.assign({}, state,  {error:action.error,departmentTimeTable: []});
 case ADD_MONDAY_DATA:
    return Object.assign({}, state,  {monday: action.data});
 case ADD_TUESDAY_DATA:
      return Object.assign({}, state,  {tuesday:action.data});
  case ADD_WEDNESDAY_DATA:
    return Object.assign({}, state,  {wednesday: action.data});
  case ADD_THURSDAY_DATA:
    return Object.assign({}, state,  {thursday: action.data});
  case ADD_FRIDAY_DATA:
      return Object.assign({}, state,  {friday: action.data});
 default:
   return state;
}
}