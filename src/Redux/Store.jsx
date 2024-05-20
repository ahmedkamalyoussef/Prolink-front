import { configureStore } from '@reduxjs/toolkit';
import {searchReducer} from './Slices/SearchSlice'; 
// import currentUserReducer from './Slices/CurrentUserSlice';


export const Store = configureStore({
    reducer: {
        search: searchReducer,
        // user: currentUserReducer,
    }
});
