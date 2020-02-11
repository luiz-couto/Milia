import React from 'react';
import { Component, Text } from 'react-native';
import { Root } from "native-base";
import { Icon } from 'react-native-elements'
import { createStackNavigator, createAppContainer,createDrawerNavigator,
DrawerItems, createBottomTabNavigator} from 'react-navigation';

import Main from './pages/Main/index';
import Income from './pages/Income/index';
import SpendPlan from './pages/SpendPlan/index';

const TabNavig = createBottomTabNavigator(
    {
        Income: { screen: Income },
        SpendPlan: { screen: SpendPlan },

    },{

        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
              const { routeName } = navigation.state;
              //let IconComponent = Ionicons;
              let iconName;
              let type;
              if (routeName === 'Income') {
                iconName = "level-down"
                type = 'font-awesome';
              } else if (routeName === 'SpendPlan') {
                iconName = 'level-up';
                type = 'font-awesome';
              }
              // You can return any component that you like here!
              return <Icon name={iconName} type={type} size={30} color={tintColor} />;
            },
        }),


        tabBarOptions: {
            activeTintColor: 'rgb(171,5,5)',
            inactiveTintColor: 'white',
            showLabel: false,
            style: {
                backgroundColor: 'rgb(252,95,95)',
                height: 65,
            }
            
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