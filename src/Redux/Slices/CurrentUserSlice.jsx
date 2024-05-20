// import { createSlice } from '@reduxjs/toolkit';
// import { fetchUserData } from '../../Api/User';

// // Action types
// const FETCH_USER_REQUEST = 'user/fetchUserRequest';
// const FETCH_USER_SUCCESS = 'user/fetchUserSuccess';
// const FETCH_USER_FAILURE = 'user/fetchUserFailure';

// // Action creators
// const fetchUserRequest = () => ({ type: FETCH_USER_REQUEST });
// const fetchUserSuccess = (data) => ({ type: FETCH_USER_SUCCESS, payload: data });
// const fetchUserFailure = (error) => ({ type: FETCH_USER_FAILURE, payload: error });

// // Async function to fetch user data
// export const HandlefetchUserData = (userId) => async (dispatch) => {
//   dispatch(fetchUserRequest());
//   try {
//     const response = await fetchUserData(userId);
//     dispatch(fetchUserSuccess(response.data));
//   } catch (error) {
//     dispatch(fetchUserFailure(error.response?.data || error.message));
//   }
// };

// // Create the slice
// const userSlice = createSlice({
//   name: 'user',
//   initialState: {
//     data: {},
//     status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
//     error: null
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(FETCH_USER_REQUEST, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(FETCH_USER_SUCCESS, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(FETCH_USER_FAILURE, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default userSlice.reducer;
