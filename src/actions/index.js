const authService = require("../services/authService");
const axios = require('axios');
const config = require('../config');
const {
   LOGIN_SUCCESS,
   LOGIN_FAILURE,
   LOGOUT,
   FETCH_ALL_USERS_SUCCESS,
   FETCH_ALL_USERS_FAILURE,
   FETCH_ALL_DEPARTMENT_FAILURE,
   FETCH_ALL_DEPARTMENT_SUCCESS,
   CREATE_USER_FAILURE,
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


export const creatUsers= (data, cd)=>{
     const x = cd;
    return dispatch=>{
      axios.post(`${config.apiUrl}/auth/register`,
      {...data, register:true})
      .then(res=>res.data)
      .then(data=>{
         dispatch(fetchAllUsers())
         x()
      })
      .catch((response)=>{
         dispatch(creatUsersFailure(response.data.error))
      })
    }
}

export const creatUsersFailure= (error) => {
  return {
    type: CREATE_USER_FAILURE,
    error
  }
}








export const fetchAllDepartment  = () => {
  return dispatch => {
    return axios.get(`${config.apiUrl}/department/`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllDepartmentsSuccess(data))
      })
      .catch(({response}) => {
         dispatch(fetchAllDepartmentsFailure(response))
      })
  }
}

export const fetchAllDepartmentsSuccess = (departments) => {
  return {
    type: FETCH_ALL_DEPARTMENT_SUCCESS,
     departments
  }
}

export const fetchAllDepartmentsFailure = (error) => {
  return {
    type: FETCH_ALL_DEPARTMENT_FAILURE,
    error
  }
}