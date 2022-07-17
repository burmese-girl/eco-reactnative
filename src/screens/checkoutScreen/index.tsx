import React from 'react';
import {View, Text, StyleSheet, FlatList, Button} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
import {useNavigation} from '@react-navigation/native';
import productsIncart from '../../data/cartlist';
import { useSelector, useDispatch } from 'react-redux';

//const navigation = useNavigation();


const users = [
  {
    id: 1,
    fullname: 'Nay Yi Win',
    phone: '09777777888',
    address:
      '5th Flr, Lanmadaw St., Yangon Book Plaza, Latha, Yangon , Myanmar',
  },
  {
    id: 2,
    title: 'Sein Moe Sat',
    phone: '09-443086554 ',
    address:
      '5th Flr, Lanmadaw St., Yangon Book Plaza, Latha, Yangon , Myanmar',
  },
  {
    id: 3,
    fullname: 'John Wai Yan',
    phone: '09-443086554 ',
    address:
      '5th Flr, Lanmadaw St., Yangon Book Plaza, Latha, Yangon , Myanmar',
  },
];

const CheckoutCartScreen = () => {
  const {cartItems} = useSelector(state => state.main);
  const navigation= useNavigation();

  var cartLength = 0;
  var totalPrice=0;
  if (cartItems) {
    totalPrice = cartItems.reduce(
      (summedPrice: number, product: {price: any; quantity: number}) =>
        summedPrice + (product?.price || 0) * product.quantity,
      0,
    );
    cartLength=cartItems.length;

  }


  const placeOrder = () => {
    navigation.navigate('accountInformation');
    //Alert.alert("This will navigate to Place Order Page!");
  };

  return (
    <View style={styles.page}>  

    <FlatList
        data={users[0]}
        keyExtractor={item => item.id}
        renderItem={({item}) => <Text key={item.id} item={item} > {item.fullname}</Text>}
        showsVerticalScrollIndicator={false}   />  
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartProductItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false} 
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, color: '#C364C5'}}>
              Subtotal ({cartLength} items):{' '}
              <Text style={{color: '#C364C5', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              title="Place Order"
              color={'#C364C5'}
              onPress={placeOrder}
              style={{
                backgroundColor: '#C364C5',
                borderColor: '#c7b702',
                fontSize: 20,
              }}
            />
          </View>
        )}

      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  text: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default CheckoutCartScreen;
