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
      const { logged, username, email, password } = action.payload;
      state.isLogged = logged;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(getUserData.fulfilled, (state, action) => {
  //     const { username, email, password } = action.payload;
  //     state.username = username;
  //     state.email = email;
  //     state.password = password;
  //   });
  // },
});

export const { login } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
