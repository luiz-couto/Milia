import React from 'react';
import { Component, Text } from 'react-native';
import { Root } from "native-base";
import { createStackNavigator, createAppContainer,createDrawerNavigator,
DrawerItems} from 'react-navigation';

import Main from './pages/Main/index';
import Income from './pages/Income/index';

const AppNavigator = createStackNavigator(
    {
        Main: { screen: Main },
        Income: { screen: Income },
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }

);

const Routes = createAppContainer(AppNavigator);

export default () =>
    <Root>
        <Routes />
    </Root>