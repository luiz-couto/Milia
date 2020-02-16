import React from 'react';
import { Component, Text } from 'react-native';
import { Root } from "native-base";
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer,createDrawerNavigator,
DrawerItems, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import Main from './pages/Main/index';
import Income from './pages/Income/index';
import SpendPlan from './pages/SpendPlan/index';

const TabNavig = createMaterialTopTabNavigator(
    {
        Income: { screen: Income, params: {color: '#fd8888'} },
        SpendPlan: { screen: SpendPlan, params: {color: '#088cc4'} },
        Statistics: { screen: SpendPlan, params: {color: 'grey'} },

    },{

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              let iconName;
              let type;
              if (routeName === 'Income') {
                iconName = "account-balance-wallet"
                type = 'material';
              } else if (routeName === 'SpendPlan') {
                iconName = 'playlist-add';
                type = 'material';
              } else if (routeName === 'Statistics') {
                iconName = 'trending-up';
                type = 'material';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} type={type} size={25} color={tintColor} />;
            },

            tabBarOptions: {
                activeTintColor: '#c3c4c3',
                inactiveTintColor: '#c3c4c3',
                indicatorStyle: {
                  marginBottom: 53,
                  backgroundColor: navigation.state.params.color,
                  width: 57,
                  marginLeft: 32
                },
                showLabel: false,
                style: {
                    backgroundColor: 'white',
                    height: 55,
                },
                showIcon: true
            },
        }),
        tabBarPosition: 'bottom',
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