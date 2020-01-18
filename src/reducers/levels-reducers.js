import { 
    FETCH_ALL_LEVELS_SUCCESS,
    FETCH_ALL_LEVELS_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
 allLevels: [],
 error:""
}

export const levelsReducer = (state = INITIAL_STATE, action) => {
 switch(action.type) {
   case FETCH_ALL_LEVELS_SUCCESS:
     return Object.assign({}, state,  {error:'',allLevels: action.levels});
   case FETCH_ALL_LEVELS_FAILURE:
     return Object.assign({}, state,  {error:action.error,allLevels: []});
   default:
     return state;
 }
}