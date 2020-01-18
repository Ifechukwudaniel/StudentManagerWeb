import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'


import {authReducer} from "./auth-reducer"
import {userReducer} from './users-reducer'
import {departmentReducer} from './department-reducer'
import { coursesReducer} from './courses-reducer'
import {levelsReducer } from './levels-reducers'

 export const init = () => {
  const reducer = combineReducers({
    auth:authReducer,
    users:userReducer,
    departments:departmentReducer,
    courses:coursesReducer,
    levels:levelsReducer
  });


   

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


  return {store};
}

