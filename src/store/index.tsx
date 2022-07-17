import {configureStore} from '@reduxjs/toolkit'
import MainReducer from './reducers/main';


export const store =configureStore({
    reducer:{
        main:MainReducer
    }
})