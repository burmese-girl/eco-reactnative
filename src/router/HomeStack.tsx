import React, { useState } from 'react'
// import  React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen  from '../screens/HomeScreen';
import {Text,SafeAreaView, TextInput ,View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { StackActions } from '@react-navigation/native';

const Stack = createStackNavigator();
interface HeaderComponentProps{
    searchValue: string;
    setSearchValue:() => void;
}

const HeaderComponent=(
    {searchValue, setSearchValue,
    }: HeaderComponentProps) =>{
    return(
        <SafeAreaView style={{backgroundColor:"#C364C5", marginTop:0.5,padding:1,borderWidth:1, borderColor:'gray'}}>
            <View 
            style={{
                margin:1,
                padding:3,
                paddingTop:5,
                backgroundColor:'white',
                flexDirection:'row',
                alignItems:'center',
            }}>
            {/* <Feather name='search' size={20} color="#400"/> */}
             <FontAwesome name="search" size={20} color="#C364C5" /> 
            <TextInput style={{height:40, marginLeft:10, fontSize:17}}
            placeholder="Search...."
            value={searchValue}
            onChangeText={setSearchValue}            
            />
            </View>
        </SafeAreaView>
    );

    };

const HomeStack = () => {

  const [searchValue, setSearchValue] = useState('');

  return (
    <Stack.Navigator   screenOptions={{
        header: () => (
          <HeaderComponent
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        ),
      }} >    
    <Stack.Screen  name='HomeScreen' options={{title:'Home'}}>       
    
    {() => <HomeScreen searchValue={searchValue} />}
    </Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack;