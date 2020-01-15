const authService = require("../services/authService");
const axios = require('axios');
const config = require('../config');
const {
   LOGIN_SUCCESS,
   LOGIN_FAILURE,
   LOGOUT,
   FETCH_ALL_USERS,
   FETCH_ALL_USERS_SUCCESS,
   FETCH_ALL_USERS_FAILURE
} = require('./types')
const jwt = require('jsonwebtoken')

const {tokenName}= require('../config');

export const login = (userData, navigate) => {
    return dispatch => {
      return axios.post(`${config.apiUrl}/auth/login`, {
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


export const loginSuccess = (navigate) => {
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

 export const logOut = ()=>{
    return {
     type:LOGOUT
    }
}


export const fetchAllUsers  = () => {
  return dispatch => {
    return axios.get(`${config.apiUrl}/users`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllUsersSuccess(data))
      })
      .catch(({response}) => {
         dispatch(fetchAllUsersFailure(response.data.error))
      })
  }
}

export const fetchAllUsersSuccess = (users) => {
  return {
    type: FETCH_ALL_USERS_SUCCESS,
    users
  }
}

export const fetchAllUsersFailure = (error) => {
  return {
    type: FETCH_ALL_USERS_FAILURE,
    error
  }
}