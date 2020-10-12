import React from 'react';
import {Redirect} from 'react-router-dom'
import RouteWIthLayout from '../../RouteWIthLayout'
import PropTypes from 'prop-types';
import {isAuth}  from '../../../helpers/Auth'
 
const PrivateRoute  = ({component, layout, path}, ...props) => {
    if(isAuth(props)){
        return ( <RouteWIthLayout
            component={component}
            layout={layout}
            path={path}
            {...props}
        />
        )
    }
    else{
        return<Redirect to="/"/>  
    }
}

PrivateRoute.propTypes = {
    component: PropTypes.any.isRequired,
    layout: PropTypes.any.isRequired,
    path: PropTypes.string
  };
 
export default PrivateRoute ;