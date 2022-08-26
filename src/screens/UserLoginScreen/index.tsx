import React from 'react'
import { View, Text, StyleSheet, Button, TextInput, Image} from 'react-native'
import {useNavigation} from '@react-navigation/native';
import  axios from 'axios'

const staticImage = require("../../assets/favicon.png");

const UserLoginScreen = () => {
  const navigation = useNavigation();

  const createUserButton = () => {
    navigation.navigate('userSignup');   
  };

  const loginButton= () => {


    axios.post('http://xylamall.ap-southeast-1.elasticbeanstalk.com/en/user/api/user_login/', 
    {
    "username": "may",
    "password": "may"
      })
      .then(function (response) {

          console.log("Hello................................")
          console.log(response);
          console.log("World................................")
      })
      .catch(function (error) {
          console.log(error);
      }); 
    

  }
  
  return (
    <View style={{
      backgroundColor: 'white'}} >
        
        <View style={{
                  width: 180,
                  height: 200,
                  aspectRatio: 1 * 2.2,
                  backgroundColor:'white'
                }}>
            
              <Image   style={styles.image} source={staticImage} /> 
        </View>
        
        <View>
              <TextInput style={styles.TextInput} testID='username' placeholder='username'></TextInput>
              <TextInput style={styles.TextInput} testID='password' placeholder='password'></TextInput>
              <Button onPress={loginButton} color='#6741d9' style={styles.loginButton} title='login'></Button>
              <Text style={styles.title} >OR </Text>
              <Button onPress={createUserButton} color='#862e9c' style={styles.loginButton} title='Create Account'></Button>
        </View>
   </View>
     
    
  )
}

export default UserLoginScreen


const styles = StyleSheet.create({
  
  container: {
   flex: 1,
   backgroundColor: "#fff",
   alignItems: "center",
   justifyContent: "center",
   width:'100%',
   height:'20%'
 },
  
  
  loginButton: {
    height: 90,
    width: 100,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
    margin:1,
    padding:10,
    color:'orange',
    textAlign:'center'
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
    margin:0,
    borderColor: 'lightgray'
  },

  title:{
    borderRadius: 0,
    backgroundColor:'white',
    color:'gray',
    borderWidth:1,
    fontSize:16,
    height: 50,
    textAlign:'center',
    paddingTop:10,
  },

  image: {
    flex: 1,
    height:'100%',
    width:'100%',
    resizeMode: 'contain',
    backgroundColor:'white',
  },

  

})