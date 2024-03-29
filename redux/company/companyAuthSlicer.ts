import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface CompanyDetails {
  companyName: string;
  email: string;
  companyId: string;
  companyToken: string;
  image: string;
}

const initialState: CompanyDetails = {
  companyName: null,
  email: null,
  companyId: null,
  companyToken: null,
  image: '',
};

const companyAuthSlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    addCompanyDetails(state, actions) {
      const newItem = actions.payload;
      state.companyName = newItem.result.company;
      state.companyId = newItem.result._id;
      state.email = newItem.result.email;
      state.image = newItem.result.image
      state.companyToken = newItem.accessToken.access_token;
    },
    logoutCompany(state) {
      state.companyName = null;
      state.image = "";
      state.email = null;
      state.companyId = null;
      state.companyToken = null;
    },
  },
});

export const { addCompanyDetails , logoutCompany} = companyAuthSlice.actions;
export const currentCompany = (state: RootState) => state.company
export default companyAuthSlice;


