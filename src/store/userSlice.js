import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: {},
  },
  reducers: {
    setUserInfo: (state, action) => {
      state.userInfo = action.payload;
    },
  },
});

// this is for dispatch
export const { setUserInfo } = userSlice.actions;

// this is for configureStore
export default userSlice.reducer;
