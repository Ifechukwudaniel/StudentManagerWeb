import { PersistGate } from 'redux-persist/integration/react'
import AuthScreen from './components/screens/AuthScreen';

import React from 'react';
import { Provider } from 'react-redux';
import  Navigation from './routes';
const {store,persistor } = require('./reducers').init();

function App() {
  return (
    <div className='App'>
         <Provider store={store}>
             <Navigation/>
         </Provider>
    </div>
  );
}

export default App;
