import React, {Component} from 'react';
import AppNavigator from './src/route';
import {Provider} from 'react-redux';
import Signin from './src/modules/login/Signin'
//Custom Imports
import store from './src/store/store';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
      // <Signin/>
    );
  }
}