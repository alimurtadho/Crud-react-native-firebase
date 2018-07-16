/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';
import Router from './src/Router';

export default class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyAbrxDmO86GuGFDe25Hr40xuEyeZXHuiH8",
      authDomain: "authentication-b2345.firebaseapp.com",
      databaseURL: "https://authentication-b2345.firebaseio.com",
      projectId: "authentication-b2345",
      storageBucket: "authentication-b2345.appspot.com",
      messagingSenderId: "661131072372"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Router />
      </Provider>
    );
  }
}
