import { FETCH_ALL_COURSES_SUCCESS, FETCH_ALL_COURSES_FAILURE, DECODE_USER } from "./types";
import axiosService from "../services/axiosService";

const AxiosService = require("../services/axiosService");
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
   FETCH_ALL_LEVELS_SUCCESS,
   FETCH_ALL_LEVELS_FAILURE,
   CREATE_USER_FAILURE,
   FETCH_DEPARTMENT_TIMETABLE,
   FETCH_DEPARTMENT_TIMETABLE_FAILURE,
   FETCH_DEPARTMENT_TIMETABLE_SUCCESS,
   FETCH_ATTENDANCE_BY_MATRICNUMBER,
   FETCH_ATTENDANCE_BY_MATRICNUMBER_FAILURE,
   FETCH_ATTENDANCE_BY_MATRICNUMBER_SUCCESS,
   ADD_MONDAY_DATA,
   ADD_TUESDAY_DATA,
   ADD_WEDNESDAY_DATA,
   ADD_THURSDAY_DATA,
   ADD_FRIDAY_DATA,
   
} = require('./types')
const jwt = require('jsonwebtoken')

const {tokenName}= require('../config');
const  axiosAuth= axiosService.initInstance();

export const loadUserProfile = ()=>{
  const user = jwt.decode(localStorage.getItem(tokenName),tokenName);
  console.log({decodedUser: user})
  return {
    type: DECODE_USER,
    payload: {name: user.name, image: user.image, matricNumber: user.matricNumber, department: user.department}
  }
}

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
          console.log(response)
          // dispatch(loginFailure(response.error));
        })
    }
  }

//Thunk to handle a successfull login 
export const loginSuccess = (navigate=()=>{}) => (dispatch)=> {
    const {name ,matricNumber, role, image, department, level} = jwt.decode(localStorage.getItem(tokenName),tokenName)
    dispatch({
      type: LOGIN_SUCCESS,
      name:name,
      matricNumber:matricNumber,
      role,
      image,
      department, 
      level
    });
    dispatch(loadUserProfile()); 
  }

 export const loginFailure = (  error) => {
    return {
      type: LOGIN_FAILURE,
      error
    }
  }

 export const logOut = ()=>{
   localStorage.removeItem(tokenName)
    return {
     type:LOGOUT
    }
}

export const fetchAllUsers  = () => {
  return dispatch => {
    return axiosAuth.get(`${config.apiUrl}/users`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllUsersSuccess(data))
      })
      .catch(({response}) => {
         console.log(response)
        //  dispatch(fetchAllUsersFailure(response.data.error))
      })
  }
}

export const fetchUserByLevel   = (level) => {
  return dispatch => {
    return axiosAuth.get(`${config.apiUrl}/users/${level}`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllUsersSuccess(data))
      })
      .catch(({response}) => {
         console.log(response)
        //  dispatch(fetchAllUsersFailure(response.data.error))
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
      axiosAuth.post(`${config.apiUrl}/auth/register`,
      {...data, register:true})
      .then(res=>res.data)
      .then(data=>{
         dispatch(fetchAllUsers())
         x()
      })
      .catch(({response})=>{
        //  console.log(response.data.error)
        //  dispatch(creatUsersFailure(response.data.error))
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
    return axiosAuth.get(`${config.apiUrl}/department/view`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllDepartmentsSuccess(data))
      })
      .catch(({response}) => {
        // console.log(response)
         //dispatch(fetchAllDepartmentsFailure(response.error))
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

export const addDepartment= (data, cd=()=>{})=>{
  const x = cd;
 return dispatch=>{
   axiosAuth.post(`${config.apiUrl}/department/levels/create`,
   {...data})
   .then(res=>res.data)
   .then(data=>{
      dispatch(fetchAllDepartment())
    
   })
   .catch((response)=>{
    //  console.log(response)
    //  dispatch(creatUsersFailure(response.data.error))
   })
 }
}

export const fetchAllCourses = ()=>{
  return dispatch => {
    return axiosAuth.get(`${config.apiUrl}/courses/view`)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllCoursesSuccess(data))
      })
      .catch(({response}) => {
        // console.log(response)
         //dispatch(fetchAllDepartmentsFailure(response.error))
      })
  }
}

export const fetchAllCoursesSuccess = (courses) => {
  return {
    type: FETCH_ALL_COURSES_SUCCESS,
     courses
  }
}

export const fetchAllCoursesFailure = (error) => {
  return {
    type: FETCH_ALL_COURSES_FAILURE,
    error
  }
}


export const fetchAllLevels = ()=>{
  return dispatch => {
    return axiosAuth.get(`${config.apiUrl}/levels/`)
      .then(res => res.data)
      .then((data) => {
        // console.log(data)
          dispatch(fetchAllLevelsSuccess(data))
      })
      .catch(({response}) => {
        // console.log(response)
        //  dispatch(fetchAllDepartmentsFailure(response.error))
      })
  }
}

export const fetchAllLevelsSuccess = (levels) => {
  return {
    type: FETCH_ALL_LEVELS_SUCCESS,
     levels
  }
}

export const fetchAllLevelsFailure = (error) => {
  return {
    type: FETCH_ALL_LEVELS_FAILURE,
    error
  }
}


export const addCourse = (data,cb=()=>{})=>{
  return dispatch => {
    return axiosAuth.post(`${config.apiUrl}/course/create`, data)
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchAllCourses())
          cb()
      })
      .catch((error) => {
        // console.log(error)
         //dispatch(fetchAllDepartmentsFailure(response.error))
      })
  }
}


export const addLevel = (data,cb=()=>{})=>{
  return dispatch => {
    const x = cb
    return axiosAuth.post(`${config.apiUrl}/level/create`, data)
      .then(res => res.data)
      .then((data) => {
          x()
          dispatch(fetchAllLevels())
      })
      .catch(({response}) => {
         dispatch(fetchAllDepartmentsFailure(response.data.error))
      })
  }
}


export const fetchDepartmentTimetable = (levelId)=>{
  return dispatch => {
    return axiosAuth.get(`${config.apiUrl}/activity/timetable/view/${levelId}`)
      .then(res => res.data)
      .then((data) => {
        // console.log(data)
          dispatch(fetchDepartmentTimetableSuccess(data))
      })
      .catch(({response}) => {
         dispatch(fetchDepartmentTimetableFailure(response.data.error))
      })
  }
}

export const fetchDepartmentTimetableSuccess = (timetable) => {
  return {
    type:FETCH_DEPARTMENT_TIMETABLE_SUCCESS,
     timetable
  }
}

export const fetchDepartmentTimetableFailure = (error) => {
  return {
    type: FETCH_DEPARTMENT_TIMETABLE_FAILURE,
    error
  }
}


export const fetchUserAttendance = (matricNumber)=>{
  return dispatch => {
    return axiosAuth.post(`${config.apiUrl}/attendance/matric`,{
      matricNumber:matricNumber
    } )
      .then(res => res.data)
      .then((data) => {
          dispatch(fetchUserAttendanceSuccess(data))
      })
      .catch(({response}) => {
         dispatch(fetchUserAttendanceFailure(response.data.error))
      })
  }
}

export const fetchUserAttendanceSuccess  = (attendance) => {
  return {
    type:FETCH_ATTENDANCE_BY_MATRICNUMBER_SUCCESS,
      attendance
  }
}

export const fetchUserAttendanceFailure = (error) => {
  return {
    type: FETCH_ATTENDANCE_BY_MATRICNUMBER_FAILURE,
    error
  }
}

export const saveMondayData = (data) => {
  return {
    type: ADD_MONDAY_DATA,
    data
  }
}

export const saveTuesdayData = (data) => {
  return {
    type: ADD_TUESDAY_DATA,
    data
  }
}

export const saveWednesdayData = (data) => {
  return {
    type: ADD_WEDNESDAY_DATA,
    data
  }
}

export const saveThursdayData = (data) => {
  return {
    type: ADD_THURSDAY_DATA,
    data
  }
}

export const saveFridayData = (data) => {
  return {
    type: ADD_FRIDAY_DATA,
    data
  }
}

export const postTimeTable = (data)=>{
  return dispatch => {
    return axiosAuth.post(`${config.apiUrl}/timeTable/`,data)
      .then(res => res.data)
      .then((data) => {
          //dispatch(fetchUserAttendanceSuccess(data))
      })
      .catch(({response}) => {
        //  dispatch(fetchUserAttendanceFailure(response.data.error))
      })
  }
}