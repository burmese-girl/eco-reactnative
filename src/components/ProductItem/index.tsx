import React from 'react';
import {View, Image, Text, Pressable, Button, StyleSheet} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {useDispatch,useSelector}  from 'react-redux';
import {addProduct } from  '../../store/reducers/main'

interface ProductItemProps {
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


const ProductItem = ({item}: ProductItemProps) => {

  const dispatch=useDispatch();
  const navigation = useNavigation();

  // push data to reducers
  const addProducts=()=>{
    dispatch(addProduct(item));
  };
  
  const onPress = () => {
    navigation.navigate('ProductDetails', {id: item.id});
    
  };

  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Image style={styles.image} source={{uri: item.image}}></Image>
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Ratings */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => (
            <FontAwesome
              key={`${item.id}-${i}`}
              style={styles.star}
              name={i < Math.floor(item.avgRating) ? 'star' : 'star-o'}
              size={18}
              color={'#C364C5'}
            />
          ))}
          <Text>{item.ratings}</Text>
        </View>
            {/* hide initial quantity */}
         {/* <Text>{item.quantity}</Text> */}
        <Text>
          from ${item.price.toFixed(2)}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice.toFixed(2)}</Text>
          )}
        </Text>
        <Button  style={styles.buttonStyle} title='addCart' onPress={addProducts} color={'#C364C5'}></Button>
      </View>
    </Pressable>
    
  );
};

export default ProductItem;
