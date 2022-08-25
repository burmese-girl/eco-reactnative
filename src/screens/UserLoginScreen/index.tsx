import React from 'react'
import { View, Text, StyleSheet, Button, TextInput} from 'react-native'
import {useNavigation} from '@react-navigation/native';
const UserLoginScreen = () => {
  const navigation = useNavigation();
  const createUserButton = () => {
    navigation.navigate('userSignup');
    //Alert.alert("This will navigate to Checkout Page!");
  };
  
  return (
    <View style={{marginTop:10}}>

        <Text style={styles.title}>Login View</Text>
        <TextInput style={styles.TextInput} testID='username' placeholder='Type your username'></TextInput>
         <TextInput style={styles.TextInput} testID='password' placeholder='Type your password'></TextInput>
        <Button color='#6741d9' style={styles.loginButton} title='login'></Button>
        <Text style={styles.title}>OR </Text>
        <Button onPress={createUserButton} color='purple' style={styles.loginButton} title='Create Account'></Button>
    </View>
  )
}

export default UserLoginScreen


const styles = StyleSheet.create({
  
  loginButton: {
    height: 90,
    width: '100%',
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin:1,
    padding:10,
    color:'orange'
  },

  TextInput:{
    borderRadius: 0,
    backgroundColor:'#fff',
    color:'blue',
    borderWidth:1,
    fontSize:17,
    textAlign:'center',
    width:'100%',
    padding:10,
    margin:0
  },

  title:{
    borderRadius: 0,
    backgroundColor:'lightgray',
    color:'black',
    borderWidth:1,
    fontSize:16,
    height: 50,
    textAlign:'center',
    paddingTop:10,
  },

  

})