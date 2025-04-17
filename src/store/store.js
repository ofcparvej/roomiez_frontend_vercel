import  {configureStore}  from "@reduxjs/toolkit";
// import configureStore from 
import authSlice from "./slices/authSlice"

import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import {combineReducers} from "@reduxjs/toolkit"


//.............................................
const persistConfig = {
    key:"root",
    version:1,
    storage
};

const reducer = combineReducers({
    auth: authSlice,
})


const persistedReducer = persistReducer(persistConfig , reducer);




//..................................

const store = configureStore({
    // reducer: {
        // auth: authSlice,
    // },

    reducer:persistedReducer
});


export default store;