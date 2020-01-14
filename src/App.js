import { PersistGate } from 'redux-persist/integration/react'
import AuthScreen from './components/screens/AuthScreen';

import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import  Navigation from './routes';
const {store,persistor } = require('./reducers').init();

function App() {
  return (
    <div className='App'>
        <Navigation/>
    </div>
  );
}

export default App;
