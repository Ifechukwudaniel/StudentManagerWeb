import React, { Component } from 'react';
import { BrowserRouter  , Route, Redirect, Switch } from 'react-router-dom';
import  RouteWithLayout from "./components/RouteWIthLayout";
import AuthScreen from './screens/AuthScreen';
import CourseScreen from './screens/CourseScreen';
import UsersScreen from './screens/UsersScreen';
import DepartmentScreen from './screens/DepartmentScreen';
import LevelScreen from './screens/LevelScreen';
import MaterialScreen from './screens/MaterialScreen';
import BlogScreen from './screens/BlogScreen';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import DashboardScreen from './screens/DashboardScreen';

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
                  component={DashboardScreen}
                  exact
                  layout={MainLayout}
                  path="/dashboard"
                />
               <RouteWithLayout
                  component={UsersScreen}
                  exact
                  layout={MainLayout}
                  path="/users"
                />
                 <RouteWithLayout
                  component={CourseScreen}
                  exact
                  layout={MainLayout}
                  path="/courses"
                />
                 <RouteWithLayout
                  component={DepartmentScreen}
                  exact
                  layout={MainLayout}
                  path="/department"
                />
                  <RouteWithLayout
                  component={LevelScreen}
                  exact
                  layout={MainLayout}
                  path="/level"
                />
                <RouteWithLayout
                  component={MaterialScreen}
                  exact
                  layout={MainLayout}
                  path="/material"
                />
                <RouteWithLayout
                  component={BlogScreen}
                  exact
                  layout={MainLayout}
                  path="/blog"
                />
            </Switch>
         </BrowserRouter>
    );
  }
}
