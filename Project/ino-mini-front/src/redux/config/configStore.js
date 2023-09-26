import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../modules/todoSlice";

const store = configureStore({
  //combineReducers => configureStore.reducer 넣어준 거에요.
  reducer: { todoSlice },
});

export default store;
