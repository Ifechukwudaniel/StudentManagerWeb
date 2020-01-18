
import * as actions from '../actions';
import Axios from 'axios';

const {tokenName, apiUrl} = require('../config')

export function isAuth(props, navigate){
    const token=  localStorage.getItem(tokenName)
    if(!token)
      return false
    else{
      props.dispatch(actions.login(navigate))
      return true
    }
}
