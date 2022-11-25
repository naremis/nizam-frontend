import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    users: {},
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});

// this is for dispatch
export const { setUser } = adminSlice.actions;

// this is for configureStore
export default adminSlice.reducer;
