import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserDetails {
  userName: string;
  email: string;
  userId: string;
  userToken: string;
}

const initialState: UserDetails = {
  userName: "",
  email: "",
  userId: "",
  userToken: "",
};

export const userAuthSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addUserDetails(state, actions) {
      const newItem = actions.payload;
      state.userName = newItem.firstName + " " + newItem.lastName;
      state.userId = newItem._id;
      state.email = newItem.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserDetails } = userAuthSlice.actions;
export const selectUserDetails = (state: RootState) => state.userAuthReducer;
export default userAuthSlice.reducer;
