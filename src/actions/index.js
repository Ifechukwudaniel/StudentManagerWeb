const authService = require("../services/authService");
const axios = require('axios');
const config = require('../config');
const {
   LOGIN_SUCCESS,
   LOGIN_FAILURE
} = require('./types')
const jwt = require('jsonwebtoken')

const tokenName= "BIU_WEB_APP";

export const login = (userData) => {
    return dispatch => {
      return axios.post(config.apiUrl, {
        "matricNumber": userData.matricNumber,
        "password":userData.password
    })
        .then(res => res.data)
        .then(({token}) => {
          localStorage.setItem(tokenName,token)
          dispatch(loginSuccess());
        })
        .catch(({response}) => {
          dispatch(loginFailure(response.data.error));
        })
    }
  }

  const loginSuccess = () => {
    const {name ,matricNumber} = jwt.decode(localStorage.getItem(tokenName),tokenName)
    return {
      type: LOGIN_SUCCESS,
      name:name,
      matricNumber:matricNumber
    }
  }

  const loginFailure = (error) => {
    return {
      type: LOGIN_FAILURE,
      error
    }
  }