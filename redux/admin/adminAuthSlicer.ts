import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface AdminDetails {
  adminId: any;
  adminName: string | null;
  adminToken: string | null;
  image: string | null;
}

const initialState: AdminDetails = {
  adminName: null,
  adminToken: null,
  image: "",
};

const adminAuthSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    addAdminDetails(state, actions) {
      const newItem = actions.payload;
      state.adminName = newItem.result.admin;
      state.image = newItem.result.image;
      state.adminToken = newItem.accessToken.access_token;
    },
     logoutAdmin(state) {
      state.adminName = null;
      state.image = "";
      state.adminToken = null;
    },
  },
});

export const { addAdminDetails, logoutAdmin } = adminAuthSlice.actions;
export const currentAdmin = (state: RootState) => state.admin;
export default adminAuthSlice;
