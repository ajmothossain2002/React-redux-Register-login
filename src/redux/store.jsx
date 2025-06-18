import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";


export const store = configureStore({
  reducer: {
    // loged: loginSlice.reducer,
    contents:authSlice.reducer,
  },

});