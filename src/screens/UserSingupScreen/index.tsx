import React from 'react'
import {Text, TextInput, Button, View, StyleSheet} from 'react-native'

const UserSignupScreen = () => {
  return (
     <View style={{marginTop:10}}>

        <Text style={styles.title}>Signup View</Text>
        <TextInput style={styles.TextInput} testID='firstname' placeholder='Type your first name'></TextInput>
         <TextInput style={styles.TextInput} testID='lastname' placeholder='Type your last name'></TextInput>
        <TextInput style={styles.TextInput} testID='username' placeholder='Type your email'></TextInput>
         <TextInput style={styles.TextInput} testID='password' placeholder='Type your password'></TextInput>
         <TextInput style={styles.TextInput} testID='confrim_password' placeholder='Type your confrim password'></TextInput>
         <TextInput style={styles.TextInput} testID='dob' placeholder='Type your Date of Birth'></TextInput>
        <Button color='purple' style={styles.registerButton} title='SignUp'></Button>
    </View>
  )
}

export default UserSignupScreen

const styles = StyleSheet.create({

    registerButton: {
        height: 50,
        width: '100%',
        borderRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      TextInput:{
        borderRadius: 0,
        backgroundColor:'#fff',
        color:'blue',
        borderWidth:1,
        fontSize:17,
        textAlign:'center',
        marginTop:4,
        marginBottom:4,
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