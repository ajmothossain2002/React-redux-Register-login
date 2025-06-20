// import React from "react";
// import { configureStore } from "@reduxjs/toolkit";
// import { authSlice } from "../redux/authSlice";
// import { CrudSlice } from "./crudSlice";
// import {loginSlice} from "./"


// export const store = configureStore({
//   reducer: {
//     // loged: loginSlice.reducer,
//     content:loginSlice.reducer
//     crudSlice:CrudSlice.reducer
//     // contents:authSlice.reducer,
//   },

// });//tt


import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../redux/authSlice";
import { CrudSlice } from "./crudSlice";
// import { logIn } from "../components/login/login"; // <-- Correct the path if needed

export const store = configureStore({
  reducer: {
    // content: logIn.reducer,
    crudSlice: CrudSlice.reducer,
    auth: authSlice.reducer, // Optional, if you want to use it
  },
});
