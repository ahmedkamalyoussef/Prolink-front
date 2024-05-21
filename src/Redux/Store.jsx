import { configureStore } from '@reduxjs/toolkit';
import {searchReducer} from './Slices/SearchSlice'; 
import {userIdReducer} from './Slices/UserIdSlice'; 


export const Store = configureStore({
    reducer: {
        search: searchReducer,
        userId: userIdReducer,
        }
});
