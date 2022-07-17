import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CheckoutCartScreen from '../screens/checkoutScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';

const Stack = createStackNavigator();

const ShopingCartStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        component={ShoppingCartScreen}
        name="shoppingCart"
        options={{title: 'Shopping Cart'}}
      />

      <Stack.Screen component={CheckoutCartScreen}
      name="checkout"
      options={{title:'Checkout'}}/>    
   
    </Stack.Navigator>
  );
};

export default ShopingCartStack;
