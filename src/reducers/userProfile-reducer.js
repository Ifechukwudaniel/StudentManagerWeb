import {DECODE_USER } from '../actions/types';

const initialState = { 
    name: "", 
    image: "", 
    matricNumber: "", 
    department: "" 
};


export const userProfileReducer = (state= initialState, action = {}) =>{
    switch(action.type){
        case DECODE_USER:
            return {...state, ...action.payload}
        default:
            return state
    }
}

