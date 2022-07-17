import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, Alert, Button} from 'react-native';
import CartProductItem from '../../components/CartProductItem';
// import productsInCart from '../../data/cart';
// import products from "../../data/cartlist";
import {store} from '../../store';
import {useNavigation} from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';

const ShoppingcartScreen = ({searchValue}: {searchValue: string}) => {
  
  const navigation = useNavigation(); 
  const {cartItems} = useSelector(state => state.main);
  // console.log(".....cartItems from reducers ::::::::::: ", cartItems);
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


  const chekoutButton = () => {
    navigation.navigate('checkout');
    //Alert.alert("This will navigate to Checkout Page!");
  };
  return (
    <View style={sytles.page}>
      {/* Render Product Componet */}

      <FlatList
        data={cartItems}
        keyExtractor={item => item.id}
        renderItem={({item}) => <CartProductItem key={item.id} item={item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => (
          <View>
            <Text style={{fontSize: 18, color: '#C364C5'}}>
              Subtotal ( {cartLength} items):{' '}
              <Text style={{color: '#C364C5', fontWeight: 'bold'}}>
                ${totalPrice.toFixed(2)}
              </Text>
            </Text>
            <Button
              title="Proceed to checkout"
              color={'#C364C5'}
              onPress={chekoutButton}
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

const sytles = StyleSheet.create({
  page: {
    padding: 10,
  },
  checkout: {
    padding: 1,
    height: 100,
    backgroundColor: '#C364C5',
    marginTop: -10,
  },
});

export default ShoppingcartScreen;
