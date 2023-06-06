import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// export const getUserData = createAsyncThunk(
//   'userLogged/getUserData',
//   async () => {
//     const userData = await getCookies();
//     return userData;
//   }
// );

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: {
    isLogged: false,
    username: '',
    email: '',
    password: '',
  },
  reducers: {
    login: (state, action) => {
      const { isLogged, username, email, password } = action.payload;
      state.isLogged = isLogged;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
});

export const { login } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
