const authService = require("../services/authService");
const axios = require('axios');
const config = require('../config');
const {
   LOGIN_SUCCESS,
   LOGIN_FAILURE
} = require('./types')
const jwt = require('jsonwebtoken')

const tokenName= "BIU_WEB_APP";

export const login = (userData, navigate) => {
    return dispatch => {
      return axios.post(config.apiUrl, {
        "matricNumber": userData.matricNumber,
        "password":userData.password
    })
        .then(res => res.data)
        .then(({token}) => {
          localStorage.setItem(tokenName,token)
          dispatch(loginSuccess(navigate));
        })
        .catch(({response}) => {
          dispatch(loginFailure(response.data.error));
        })
    }
  }

  const loginSuccess = (navigate) => {
    const {name ,matricNumber} = jwt.decode(localStorage.getItem(tokenName),tokenName)
    navigate()
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