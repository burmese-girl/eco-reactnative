// import React, {useState} from 'react';
import React from 'react';
import {Image, Button, View, Text, Alert, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Product} from '../../models';
import QuantitySelector from '../QuantitySelector';
import styles from './styles';
import {
  ADD_OR_REMOVE_FROM_SHOPPING_CART,
  CLEAR_STATE_AFTER_TOAST,
} from '../../store/actionTypes';
import {useDispatch, useSelector} from 'react-redux';
import {incQuantity, descQuantity, addProduct, removeProduct} from '../../store/reducers/main';

interface CartProductItemProps {
  // item: {
  //   id: string;
  //   userSub: string;
  //   quantity: number;
  //   option?: string;
  //   productID: string;
  //   product?: Product;
  // }; 
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
    quantity: number;
  };


}

const CartProductItem = ({item}: CartProductItemProps) => {
  console.log('....starting Shoping Cart ...');
  //const {product, ...cartProduct} = item;
  const {...product } = item;  
  const qtyUpdate = product.quantity; 
  const {quantity} = useSelector(state => state.main);
  const {itemUpdate} = useSelector(state => state.main);
  const {cartItems} = useSelector(state => state.main);
  //if (itemUpdate.id == product.id) {
    //qtyUpdate = itemUpdate.quantity;    
    //console.log('... cartItems in Component :', cartItems); 
   //}
  const dispatch = useDispatch();


  const updateQty = async (newQuantity: number, type: string) => {    
    dispatch(incQuantity({item, newQuantity}));
  };



  return (
    <View style={styles.root}>
      <View style={styles.row}>
        <Image style={styles.image} source={{uri: product.image}} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>
            {product.title}
          </Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${product.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(product.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#C364C5'}
              />
            ))}
            <Text>{product.ratings}</Text>
          </View>
          <Text style={styles.price}>${product.price}</Text>
        </View>
      </View>

      <View style={styles.quantityContainer}>
        <QuantitySelector
          quantity={qtyUpdate}
          type={'increase'}
          setQuantity={updateQty}
        />
      </View>
    </View>
  );
};

export default CartProductItem;
