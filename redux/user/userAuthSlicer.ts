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

const userAuthSlice = createSlice({
  name: "user",
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

export const { addUserDetails } = userAuthSlice.actions;
export const currentUser = (state: RootState) => state.user;
export default userAuthSlice;