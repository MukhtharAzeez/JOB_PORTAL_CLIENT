import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CompanyAdminDetails {
  adminName: string;
  email: string;
  companyAdminId: string;
  companyId: string;
  companyToken: string;
  image: string;
}

const initialState: CompanyAdminDetails = {
  adminName: null,
  email: null,
  companyAdminId: null,
  companyId: null,
  companyToken: null,
  image: "",
};

const companyAdminAuthSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompanyAdminDetails(state, actions) {
      const newItem = actions.payload;
      state.adminName =
        newItem.result.name;
      state.companyAdminId = newItem.result._id;
      state.companyId = newItem.result.company;
      state.email = newItem.result.email;
      state.image = newItem.result.image;
      state.companyToken = newItem.accessToken.access_token;
    },
  },
});

export const { addCompanyAdminDetails } = companyAdminAuthSlice.actions;
export const currentCompanyAdmin = (state: RootState) => state.companyAdmin;
export default companyAdminAuthSlice;
