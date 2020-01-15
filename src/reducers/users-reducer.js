import { 
    FETCH_ALL_USERS, FETCH_ALL_USERS_SUCCESS, FETCH_ALL_USERS_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  allUsers: [],
  error:""
}

export const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_USERS_SUCCESS:
      return Object.assign({}, state,  {error:'',allUsers: action.users});
    case FETCH_ALL_USERS_FAILURE:
      return Object.assign({}, state,  {error:action.error,allUsers: []});
    default:
      return state;
  }
}