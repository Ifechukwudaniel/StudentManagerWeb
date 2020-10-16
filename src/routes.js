import React, { Component, lazy, Suspense } from 'react';
import { BrowserRouter  , Route, Redirect, Switch } from 'react-router-dom';
import  RouteWithLayout from "./components/RouteWIthLayout";
import { Main as MainLayout, Minimal as MinimalLayout } from './layouts';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import Spinner from './components/Spinner/Spinner';
import  PrivateRoute from './components/Route/PrivateRoute'
const AuthScreen = lazy(()=> import('./screens/AuthScreen'));
const CourseScreen = lazy(()=> import('./screens/CourseScreen'));
const UsersScreen = lazy(()=> import('./screens/UsersScreen'));
const DepartmentScreen = lazy(()=> import('./screens/DepartmentScreen'));
const LevelScreen = lazy(()=> import('./screens/LevelScreen'));
const MaterialScreen = lazy(()=> import('./screens/MaterialScreen'));
const BlogScreen = lazy(()=> import('./screens/BlogScreen'));
const LogoutScreen = lazy(()=> import('./screens/LogoutScreen'));
const AttendanceScreen = lazy(()=> import('./screens/AttendanceScreen'));
const DashboardScreen = lazy(()=> import('./screens/DashboardScreen'));
const TimeTableScreen = lazy(()=>import('./screens/TimeTableScreeen'));
const ChatScreen =  lazy(()=> import('./screens/ChatScreen'));
const MaterialItemScreen = lazy(()=> import('./screens/MaterialItemScreen'));
const UserProfile = lazy( ()=> import('./screens/UserProfile'));

const Navigation = ()=>{
    return (
         <BrowserRouter>
              <Switch>
                <ErrorBoundary>
                  <Suspense fallback={<MainLayout><Spinner /></MainLayout>} >
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
                  component={MaterialItemScreen}
                  exact
                  layout={MainLayout}
                  path="/material/:courseId"
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
                </Suspense>
                </ErrorBoundary>
            </Switch>
         </BrowserRouter>
    );
  }



export default  Navigation