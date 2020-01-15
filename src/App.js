import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import {ThemeProvider} from '@material-ui/styles'
import theme from './theme'
import { Provider } from 'react-redux';
import  Navigation from './routes';
const {store,persistor } = require('./reducers').init();

function App() {
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

export default App;
