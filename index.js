import React from 'react';
import {AppRegistry,Text,View} from 'react-native';
import {name as appName} from './app.json';
import App from './app/RootNavigator.js';

AppRegistry.registerComponent(appName, () => App);
