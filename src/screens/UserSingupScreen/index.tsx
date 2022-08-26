import React from 'react'
import {Text, TextInput, Button, View, StyleSheet,Image} from 'react-native'
import {RadioButton} from 'react-native-paper';

const staticImage = require("../../assets/favicon.png");


const UserSignupScreen = () => {

  const [value, setValue] = React.useState('male');
  return (
     <View style={{marginTop:0}}> 
         <View style={{
          width: 90,
          height: 110,
          aspectRatio: 1 * 3.8,
          backgroundColor:'white'
        }}>
            
            <Image   style={styles.image} source={staticImage} /> 
        </View>
     <View>
        <TextInput style={styles.TextInput} testID='firstname' placeholder='First name'></TextInput>
        <TextInput style={styles.TextInput} testID='lastname' placeholder='Last name'></TextInput>
        <TextInput style={styles.TextInput} testID='username' placeholder='Email'></TextInput>
        <TextInput style={styles.TextInput} testID='password' placeholder='Password'></TextInput>
        <TextInput style={styles.TextInput} testID='confrim_password' placeholder='Confrim password'></TextInput>
        <TextInput style={styles.TextInput} testID='dob' placeholder='Date of Birth'></TextInput>


        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        <RadioButton.Item label="Male" value="male" style={{backgroundColor:'white'}} />
        <RadioButton.Item label="Female" value="female"  style={{backgroundColor:'white'}}/>
        </RadioButton.Group>
        <Button color='#862e9c' style={styles.registerButton} title='SignUp'></Button>
    </View>       
        
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
    width:'100%',
    padding:10,
    margin:0,
    borderColor: 'lightgray'
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

    image: {
    flex: 1,
    height:'100%',
    width:'100%',
    resizeMode: 'contain',
    backgroundColor:'white',
  },
    

})