import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSideThemeSlice from "./user/ThemeSlice";
import userAuthSlice from "./user/userAuthSlicer";

const reducer = combineReducers({
  user: userAuthSlice.reducer,
  userTheme: userSideThemeSlice.reducer,
});

const store = configureStore({
  reducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
