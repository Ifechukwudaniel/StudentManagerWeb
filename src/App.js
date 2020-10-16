import 'date-fns';
import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux';
import  Navigation from './routes';
import { ConfirmProvider } from 'material-ui-confirm';


const {store,persistor } = require('./reducers').init();
const {tokenName, apiUrl} = require('./config')
const App = ()=>{
      return (
           <div className='App'>
              <ThemeProvider theme= {theme}>
                  <Provider store={store}>
                  <ConfirmProvider>
                  <Navigation/>
                  </ConfirmProvider>
                  </Provider>
                  </ThemeProvider>
          </div>

      );
  }
export default App