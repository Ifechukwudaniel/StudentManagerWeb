import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter  , Route, Redirect, Switch } from 'react-router-dom';
import AuthScreen from './components/screens/AuthScreen';
export default class Navigation extends Component {

  render() {
    return (
         <BrowserRouter>
              <Switch>
                <Route path="/">
                   <AuthScreen/>
                </Route>
              </Switch>
         </BrowserRouter>
    );
  }
}
