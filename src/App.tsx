import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './config/AppRoute';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import store from './config/redux/Store';
function App() {
  return (
    <Provider store={store}>
      <AppRoute/>

    </Provider>
  );
}

export default App;
