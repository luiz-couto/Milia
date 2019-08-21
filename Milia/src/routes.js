import React from 'react';
import { Component, Text } from 'react-native';
import { Root } from "native-base";
import { createStackNavigator, createAppContainer,createDrawerNavigator,
DrawerItems, createBottomTabNavigator} from 'react-navigation';

import Main from './pages/Main/index';
import Income from './pages/Income/index';
import SpendPlan from './pages/SpendPlan/index';
import ISpend from './pages/ISpend/index';

const TabNavig = createBottomTabNavigator(
    {
        Income: { screen: Income },
        SpendPlan: { screen: SpendPlan },
        ISPend: { screen: ISpend }

    },{
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'white',
            style: {backgroundColor: 'rgb(252,95,95)'}
        },
    }
)

const AppNavigator = createStackNavigator(
    {
        Main: { screen: Main },
        Tab: { screen: TabNavig },
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