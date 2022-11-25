import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    authInfo: {},
    tokens: {},
  },
  reducers: {
    setAuth: (state, action) => {
      state.authInfo = action.payload;
    },
    setTokens(state, action) {
      state.tokens = action.payload;
    },
  },
});

// this is for dispatch
export const { setAuth, setTokens } = authSlice.actions;

// this is for configureStore
export default authSlice.reducer;
