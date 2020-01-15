import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter  , Route, Redirect, Switch } from 'react-router-dom';
import  RouteWithLayout from "./components/RouteWIthLayout";
import AuthScreen from './screens/AuthScreen';
import CourseScreen from './screens/CourseScreen';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';

export default class Navigation extends Component {

  render() {
    return (
         <BrowserRouter>
              <Switch>
                <Route 
                 exact
                 path="/"
                 component={AuthScreen}
                 />
                 <RouteWithLayout
                  component={CourseScreen}
                  exact
                  layout={MainLayout}
                  path="/dashboard"
                />
            </Switch>
         </BrowserRouter>
    );
  }
}
