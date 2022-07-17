import {createSlice} from '@reduxjs/toolkit';
import {act} from 'react-test-renderer';
import QuantitySelector from '../../components/QuantitySelector';
import product from '../../data/product';
import {Alert} from 'react-native';
//import cartItems from "../../data/cart";

const initialState = {
  loading: true,
  accessToken: '',
  appNm: 'Ecommerce App',
  cartItems: [],
  quantity: 0,
  itemUpdate: [],
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    // updateName:(state,action)=>{
    //     state.appNm = action.payload;
    //     console.log('App Name::',state.appNm);
    // },

    addProduct: (state, {payload}) => {
      const product = state.cartItems.find(
        product => product.id === payload.id,
      );

      if (product) {
        state = state.cartItems.map(product =>
          product.id === payload.id
            ? {
                ...product,
                quantity: (product.quantity += payload.quantity),
              }
            : product,
        );
      } else {
        state.cartItems.push(payload);
        state.quantity += 1;
      }
      //Alert.alert('Added product to your cart.');
    },

    incQuantity: (state = initialState, {payload}) => {    
      const product = state.cartItems.find(
        product => product.id === payload.item.id,
      );

      if (product) {
       let tempcart = state.cartItems.map(product =>
          product.id === payload.item.id
            ? {
                ...product,
                quantity:payload.newQuantity,
              }
            : product,
        );        
       
        return {...state, quantity: payload.newQuantity,cartItems:tempcart,itemUpdate:product};
      }
    },

    descQuantity: (state, action) => {
      const product = state.cartItems.find(product => product.id === payload.id);
      if (product.quantity === 1) {
        const index = state.cartItems.findIndex(
          product => product.id === payload,
        );
        state.cartItems.splice(index, 1);
      } else {
        product.quantity--;
      }
    },

    removeProduct: (state, {payload}) => {
      const index = state.cartItems.findIndex(
        product => product.id === payload,
      );
      state.cartItems.splice(index, 1);
    },
  },
});

export const {
  setLoading,
  addProduct,
  incQuantity,
  descQuantity,
  removeProduct,
} = mainSlice.actions;

export default mainSlice.reducer;
