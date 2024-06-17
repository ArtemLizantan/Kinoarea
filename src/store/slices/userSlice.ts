import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  lastname: null,
  login: null,
  password: null,
  email: null,
  token: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      (state.email = action.payload.email),
        (state.id = action.payload.id),
        (state.name = action.payload.name),
        (state.lastname = action.payload.lastname),
        (state.login = action.payload.login),
        (state.token = action.payload.token),
        (state.password = action.payload.password);
    },
    removeUser(state) {
      (state.email = null),
        (state.id = null),
        (state.name = null),
        (state.lastname = null),
        (state.login = null),
        (state.token = null),
        (state.password = null);
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
