import React from "react";
import { View,Text, StyleSheet, FlatList } from "react-native";
import ProductItem from "../../components/ProductItem";
// import  DataStore  from "aws-amplify";
//import { Product } from "../../models";
import products from "../../data/products";


const data = [
    { id: 1, title: "First item" },
    { id: 2, title: "Second item" },
  ];

// const renderItem = ({ item }) => {
//     //the app will represent each list item via a Text component
//     return <Text style={sytles.item}> {item.title}</Text>;
//   };

const HomeScreen = ({searchValue}:{searchValue:string}) => {
    
    return (
    <View style={sytles.page}>
      {/* Render Product Componet */}
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        renderItem={({item}) => <ProductItem key={item.id} item={item}/>}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
   
};

const sytles = StyleSheet.create({
    page:{
        padding:10,
    },

    item:{
        backgroundColor:'blue',
        fontSize:22,
        padding:10,
    }
});

export default HomeScreen;