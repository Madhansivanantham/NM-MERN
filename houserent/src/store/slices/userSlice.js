import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
};
const userSlice = createSlice({
  name: "User",
  initialState: initialState,
  reducers: {
    logIn(state, action) {
      const { email, _id, token } = action.payload;
      console.log({ email, _id });
      state.user = { email, _id, token };
      console.log(state.user, "currentUser");
    },
    logOut(state, action) {
      state.user = null;
    },
  },
});
export const { logIn, logOut } = userSlice.actions;
export default userSlice.reducer;
