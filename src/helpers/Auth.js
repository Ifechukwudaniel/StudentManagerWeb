
import * as actions from '../actions';
import Axios from 'axios';

const {store,persistor } = require('../reducers').init()

const {tokenName, apiUrl} = require('../config')
const jwt = require('jsonwebtoken')



export function isAuth(props, navigate){
    const token=  localStorage.getItem(tokenName)
    if(!token)
      return false
    else{
      store.dispatch(actions.loginSuccess(navigate))
      return true
    }
}


export function isAuthData(props, navigate){
  const token=  localStorage.getItem(tokenName)
  if(!token)
    return store.dispatch(actions.logOut(navigate))
  else{
    const {name ,matricNumber, role, image, department, level} = jwt.decode(localStorage.getItem(tokenName),tokenName)
    return {name, matricNumber, role, image, department, level}
  }
}


