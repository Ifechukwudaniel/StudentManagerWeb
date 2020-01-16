import { 
    FETCH_ALL_DEPARTMENT_FAILURE,
    FETCH_ALL_DEPARTMENT_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
 allDepartments: [],
 error:""
}

export const departmentReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case FETCH_ALL_DEPARTMENT_SUCCESS:
     return Object.assign({}, state,  {error:'',allDepartments: action.departments});
   case FETCH_ALL_DEPARTMENT_FAILURE:
     return Object.assign({}, state,  {error:action.error,allDepartments: []});
   default:
     return state;
 }
}