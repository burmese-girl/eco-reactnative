import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserSignupScreen from '../screens/UserSingupScreen';
import UserLoginScreen from '../screens/UserLoginScreen';

const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen
        component={UserLoginScreen}
        name="userLogin"
        options={{title: 'Login'}}
      />

      <Stack.Screen component={UserSignupScreen}
      name="userSignup"
      options={{title:'Signup'}}/>    
   
    </Stack.Navigator>
  );
};

export default UserStack;
