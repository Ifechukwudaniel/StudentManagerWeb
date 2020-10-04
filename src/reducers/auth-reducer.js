import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/types';

const INITIAL_STATE = {
  isAuth: false,
  errors: [],
  name: '',
  matricNumber:'', 
  role:''
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {isAuth: true, error:"", name: action.name, matricNumber:action.matricNumber , role:action.role});
    case LOGIN_FAILURE:
      return Object.assign({}, state, {error: action.error});
    case LOGOUT:
      return Object.assign({}, state, {isAuth: false, name: '', matricNumber:''});
    default:
      return state;
  }
}