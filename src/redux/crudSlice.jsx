// import {createAsyncThunk,createSlice} from redux toolkit
// import axioxInstance
// const  initial state={
//     upload_stateus:"ideal",
//     isloaddding:false,
// }



// export const createStudent=createAsyncThunk(
//     "/student",

//     async(formData)=>{
//         let res=aswait axiosInstance.post("/student",formData)
//         let res=Data=res?.data;
//         return resData
//     }
//     export const CrudSlice=createSlice({
//         name:"crud",
//         initialestate,
//         reducer:{}
//         extrareducer:(builder)=>{
//             builder
//             .addcase(getStudent,pending,(state,{payload})=>{
//                 state.upload_status="loading";
//                 state.isloaddding=true
//             })
//             .addcase(getstudent,fullfilled,(state,{payload})=>{
//                 state.upload_status="fullfilled";
//                 state.isloaddding=

//             })
//         }
//     })
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../Helper/Helper"; // Fix path as per your project

const initialState = {
  upload_status: "idle",
  isLoading: false,
};

// Async thunk for creating a student
export const createStudent = createAsyncThunk(
  "student/create",
  async (formData, thunkAPI) => {
    try {
      const res = await axiosInstance.post("/student", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

// Create the slice
export const CrudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createStudent.pending, (state) => {
        state.upload_status = "loading";
        state.isLoading = true;
      })
      .addCase(createStudent.fulfilled, (state, action) => {
        state.upload_status = "fulfilled";
        state.isLoading = false;
      })
      .addCase(createStudent.rejected, (state) => {
        state.upload_status = "failed";
        state.isLoading = false;
      });
  },
});
