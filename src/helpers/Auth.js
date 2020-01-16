
import * as actions from '../actions';
import Axios from 'axios';

const {tokenName, apiUrl} = require('../config')

function isAuth(props){
    const token=  localStorage.getItem(tokenName)
    if(!token)
      return false
    else{
       Axios.post(`${apiUrl}/auth/token`,{
         token:token
       })
       .then(({data})=>{
           props.dispatch(actions.loginSuccess(this.navigate))
           return true
       })
    }

}


module.exports= {
    isAuth
}