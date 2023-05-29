import { createSlice } from '@reduxjs/toolkit';

export const userLoggedSlice = createSlice({
  name: 'userLogged',
  initialState: {
    username: false,
    email: false,
    password: false,
  },
  reducers: {
    login: (state, action) => {
      const { username, email, password } = action.payload;
      state.username = username;
      state.email = email;
      state.password = password;
    },
  },
});

export const { login } = userLoggedSlice.actions;
export default userLoggedSlice.reducer;
