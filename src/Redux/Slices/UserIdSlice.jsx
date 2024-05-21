
import { createSlice } from '@reduxjs/toolkit';

let initialState = { userId: "" };

let userIdSlice = createSlice({
    name: "UserId",
    initialState,
    reducers: {
        setSearch: (state,{payload}) => {
            state.userId = payload;
        }
    }
});

export const userIdReducer = userIdSlice.reducer;
export const { setUserId } = userIdSlice.actions;