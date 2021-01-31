import React from 'react';
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom';
import App from './App';
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './store'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

import './index.css';

const { store, persistor } = configureStore()

const MyApp = () => (
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>

)

ReactDOM.render(<MyApp />, document.getElementById('root'))
registerServiceWorker()