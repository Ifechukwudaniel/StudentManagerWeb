import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux';
import  Navigation from './routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import './App.css'


const {store,persistor } = require('./reducers').init();
const {tokenName, apiUrl} = require('./config')
class App extends Component {
  render() { 
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
}
export default App