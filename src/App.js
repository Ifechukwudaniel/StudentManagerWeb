import 'date-fns';
import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux';
import  Navigation from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { ToastContainer, toast } from 'react-toastify';



const {store,persistor } = require('./reducers').init();
const {tokenName, apiUrl} = require('./config')
const App = ()=>{
      return (
           <div className='App'>
              <ThemeProvider theme= {theme}>
                  <Provider store={store}>
                     <Navigation/>
                  </Provider>
                  </ThemeProvider>
          </div>

      );
  }
export default App