import React from 'react';
import { createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import MainTabNavigator from './MainTabNavigator';
import LogInScreen from '../screens/LogInScreen';


export default createAppContainer(
  createStackNavigator({
    Login: LogInScreen,
    Main: MainTabNavigator,
  })
);
