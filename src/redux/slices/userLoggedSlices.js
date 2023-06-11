import { getCookie } from '@/app/utils/Cookies';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getUserData = createAsyncThunk(
  'userLogged/getUserData',
  async () => {
    const userData = await getCookie();
    return userData;
  }
);
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
  extraReducers: (builder) => {
    builder.addCase(getUserData.fulfilled, (state, action) => {
      const { username, email } = action.payload;
      state.isLogged = username.length == 0 ? false : true;
      state.username = username;
      state.email = email;
      console.log('el username es: ', username);
    });
  },
});

export const { login } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
