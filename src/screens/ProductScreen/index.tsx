import React from 'react'
import {Text, View, Button, Image} from 'react-native';
import { useRoute } from '@react-navigation/native';
import products from '../../data/products';
import styles from './styles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import QuantitySelector from '../../components/QuantitySelector';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../store/reducers/main';

const ProductScreen= () => {
    const route=useRoute();
    const dispatch = useDispatch();
    const selectedItem = products.find(obj => {
        return obj.id === route?.params?.id;
      });

    const imageUrl= selectedItem?.image;

    const addProducts=()=>{
        dispatch(addProduct(selectedItem));
      };     

    const updateQty = ()=> {
        console.log('qtyUpdate Here!!');
    }

    // console.log("... selectedItem in Details ::: ", selectedItem.image);
    // console.log("... item in Details ::: ", typeof(products));
    // console.log("........ Product ID in PDetails ::: ",route.params.id);

  return (
    
    <View style={styles.root}>
        <View style={styles.row}>
        <Image style={styles.image} source={{ uri:imageUrl}}></Image>       
       </View>
        <View style={styles.quantityContainer}>
            <QuantitySelector 
            quantity={selectedItem?.quantity}
            type={'increase'}
            setQuantity={updateQty}
            /> 
        </View>  
      
      <View > 
            <Text style={styles.title} numberOfLines={3} > {selectedItem?.title} </Text>
            
            <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={`${selectedItem.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(selectedItem?.avgRating) ? 'star' : 'star-o'}
                size={18}
                color={'#C364C5'}
              />
            ))}
            <Text>{selectedItem?.ratings}</Text>
          </View>
         
        <Text style={styles.price} >Price: {selectedItem?.price}</Text>
         

            
        </View>      

        <View style={styles.buttonStyle}>  
            <Button title='add Cart' onPress={addProducts} color={'#C364C5'}></Button>
        </View>         

      </View>
  )
}

export default ProductScreen