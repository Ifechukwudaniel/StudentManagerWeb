import { 
    FETCH_ALL_COURSES_SUCCESS,
    FETCH_ALL_COURSES_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
 allCourse: [],
 error:""
}

export const coursesReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case FETCH_ALL_COURSES_SUCCESS:
     return Object.assign({}, state,  {error:'',allCourses: action.courses});
   case FETCH_ALL_COURSES_FAILURE:
     return Object.assign({}, state,  {error:action.error,allCourses: []});
   default:
     return state;
 }
}