import {configureStore} from "@reduxjs/toolkit";
import {searchReducer} from "./Slices/SearchSlice"
export const Store=configureStore({
    reducer:{
        search:searchReducer
    }
})
