import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
// import MenuScreen from '../screens/MenuScreen';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HomeStack from './HomeStack';
import ShoppingCartStack from './ShoppingCartStack'

import shopingCartScreen from '../components/ProductList'
import ShopingCartStack from './ShoppingCartStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator 
      screenOptions={{
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'purple',
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <Tab.Screen
        component={HomeStack}
        name="Welcome From Market Place. Have fun and happy"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="home" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        name="accountInformation"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" color={color} size={25} />
          ),
        }}
      />

      <Tab.Screen
        component={ShopingCartStack}
        name="ShoppingCart"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="shopping-cart" color={color} size={25} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name="more"
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="arrow-right" color={color} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNav;