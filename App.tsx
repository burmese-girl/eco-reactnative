/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Alert,
  ImageBackground
} from 'react-native';

import {StripeProvider} from '@stripe/stripe-react-native'

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Router from './src/router';

import Amplify, {Auth} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react-native';
import {store} from './src/store'
import { Provider as StoreProvider } from 'react-redux';
import BottomTabNav from './src/router/bottomTabNav';
const image= {uri:"https://reactjs.org/logo-og.png"}

const Section: React.FC<{
  children: React.ReactNode;
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    flex:1,
  };

  // return(  
  // <View style={backgroundStyle}>
  //   <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //   {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
  //     {/* <Text style={styles.text}>Inside</Text> */}
  //     <StripeProvider style={styles.stripeProvider} publishableKey={'pk_test_51IqIfWA2WcfjP4nohlwR7PdK6SEeIt5eenVLWcrduRWk5IlG9WSid3GFZiItmJS4de56nrynA3hblwhrW7FVGED500vznukyss'}>
  //       <Router />
  //     </StripeProvider>
  //   {/* </ImageBackground> */}
  // </View>);

  return (
    <StoreProvider store={store}>
       <Router />
    </StoreProvider>
  )

  // return (
    
  //   <SafeAreaView style={backgroundStyle}>
  //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
  //     <ScrollView
  //       contentInsetAdjustmentBehavior="automatic"
  //       style={backgroundStyle}>       
  //       <View
  //       style={{
  //         backgroundColor: isDarkMode ? Colors.black : Colors.white,
  //       }}>      
        
  //       <TextInput  style={styles.textInput} placeholder='Email'></TextInput> 
  //       <TextInput style={styles.textInput} placeholder='Password'></TextInput> 
  //       <Button style= {styles.button} color='blue' title='Login' onPress={() => Alert.alert('Success login!')} ></Button>
       
  //       </View>
  //     </ScrollView>
      
  //     <StripeProvider style={styles.stripeProvider} publishableKey={'pk_test_51IqIfWA2WcfjP4nohlwR7PdK6SEeIt5eenVLWcrduRWk5IlG9WSid3GFZiItmJS4de56nrynA3hblwhrW7FVGED500vznukyss'}>
  //     <Router />
  //     </StripeProvider>
  //     {/* <Text style={{width:400, height:100,paddingTop:30, paddingBottom:10,textAlign:'center'}}>Already account?</Text>
  //     <Text  style={styles.text, {textAlign:'center',color:'red', padding:50}}>Contatct Here: + 9597774788</Text> */}
  //   </SafeAreaView>
  // );

};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  text:{
    fontSize:25,
    color:'purple',
    paddingTop:0,
    padding:20,
  }
  ,
  button:{
    fontSize:22,
    padding:20,
    backgroundColor:"black"

  },
  textInput:{

    fontSize:22,
    padding:20,
    border:1   

  },
  stripeProvider:{
    backgroundColor:'cyan',
    color:'white',
    height:100,
    width:110,
    padding:40,
    fontSize:40,

  },
   container: {
    flex: 1,
  },
  image:{
    flex: 1,
    justifyContent: "center"
  }
});

export default App;
