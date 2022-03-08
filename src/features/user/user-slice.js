import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {},
});
export const userReducer = userSlice.reducer;

export const selectUserName = (state) => state.user.username;
export const selectUser = (state) => state.user;
