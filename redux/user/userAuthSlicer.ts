import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface UserDetails {
  userName: string;
  email: string;
  userId: string;
  userToken: string;
  image: string;
}

const initialState: UserDetails = {
  userName: null,
  email: null,
  userId: null,
  userToken: null,
  image: '',
};

const userAuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUserDetails(state, actions) {
      const newItem = actions.payload;
      state.userName = newItem.result.firstName + " " + newItem.result.lastName;
      state.userId = newItem.result._id;
      state.email = newItem.result.email;
      state.image = newItem.result.image
      state.userToken = newItem.accessToken.access_token;
    },
  },
});

export const { addUserDetails } = userAuthSlice.actions;
export const currentUser = (state: RootState) => state.user;
export default userAuthSlice;


