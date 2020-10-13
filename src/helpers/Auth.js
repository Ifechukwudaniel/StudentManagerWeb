
import * as actions from '../actions';
import Axios from 'axios';

const {store,persistor } = require('../reducers').init()

const {tokenName, apiUrl} = require('../config')


export function isAuth(props, navigate){
    const token=  localStorage.getItem(tokenName)
    if(!token)
      return false
    else{
      store.dispatch(actions.loginSuccess(navigate))
      return true
    }
}
