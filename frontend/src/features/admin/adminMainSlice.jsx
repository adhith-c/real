import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../config/axios";

export const getAdmin = createAsyncThunk(
  "admin/getAdmin",
  async ({ email, password, Navigate }) => {
    const res = await instance.post("admin/signin", { email, password });
    Navigate("/dashboard");
    return res.data;
  }
);
