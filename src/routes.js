import React, { Component } from 'react';
import { BrowserRouter  , Route, Redirect, Switch } from 'react-router-dom';
import  RouteWithLayout from "./components/RouteWIthLayout";
import  PrivateRoute from './components/Route/PrivateRoute'
import AuthScreen from './screens/AuthScreen';
import CourseScreen from './screens/CourseScreen';
import UsersScreen from './screens/UsersScreen';
import DepartmentScreen from './screens/DepartmentScreen';
import LevelScreen from './screens/LevelScreen';
import MaterialScreen from './screens/MaterialScreen';
import BlogScreen from './screens/BlogScreen';
import LogoutScreen from './screens/LogoutScreen';
import AttendanceScreen from './screens/AttendanceScreen';
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import DashboardScreen from './screens/DashboardScreen';
import TimeTableScreen from './screens/TimeTableScreeen';
import ChatScreen from './screens/ChatScreen'
import UserProfile from './screens/UserProfile'

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
                 <PrivateRoute
                  component={DashboardScreen}
                  exact
                  layout={MainLayout}
                  path="/dashboard"
                />
               <PrivateRoute
                  component={UsersScreen}
                  exact
                  layout={MainLayout}
                  path="/users"
                />
                 <PrivateRoute
                  component={CourseScreen}
                  exact
                  layout={MainLayout}
                  path="/courses"
                />
                 <PrivateRoute
                  component={DepartmentScreen}
                  exact
                  layout={MainLayout}
                  path="/department"
                />
                  <PrivateRoute
                  component={LevelScreen}
                  exact
                  layout={MainLayout}
                  path="/level"
                />
                <PrivateRoute
                  component={MaterialScreen}
                  exact
                  layout={MainLayout}
                  path="/material"
                />
                <PrivateRoute
                  component={BlogScreen}
                  exact
                  layout={MainLayout}
                  path="/notifications"
                />
                <PrivateRoute
                  component={AttendanceScreen}
                  exact
                  layout={MainLayout}
                  path="/attendance"
                />
                <PrivateRoute
                  component={TimeTableScreen}
                  exact
                  layout={MainLayout}
                  path="/TimeTable"
                />
                 <PrivateRoute
                  component={ChatScreen}
                  exact
                  layout={MainLayout}
                  path="/Chat"
                />
                 <PrivateRoute
                  component={UserProfile}
                  exact
                  layout={MainLayout}
                  path="/profile"
                />
                 <Route
                  component={LogoutScreen}
                  exact
                  layout={MainLayout}
                  path="/logout"
                />
            </Switch>
         </BrowserRouter>
    );
  }
}
