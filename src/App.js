import React, {Component} from 'react';
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux';
import  Navigation from './routes';


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