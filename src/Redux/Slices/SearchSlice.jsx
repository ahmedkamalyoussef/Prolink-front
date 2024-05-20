
import { createSlice } from '@reduxjs/toolkit';

let initialState = { searchVal: "" };

let searchSlice = createSlice({
    name: "Search",
    initialState,
    reducers: {
        setSearch: (state,{payload}) => {
            state.searchVal = payload;
        }
    }
});

export const searchReducer = searchSlice.reducer;
export const { setSearch } = searchSlice.actions;