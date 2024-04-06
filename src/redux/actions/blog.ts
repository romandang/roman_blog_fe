import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_BLOG } from "./constants/blog";
import https from "@/utils/http";
import { API } from "@/utils/endpoints";

export const getAllBlogs = createAsyncThunk(GET_ALL_BLOG, async () => {
  try {
    const response = await https.get(`${API.BLOG.GET_ALL_BLOG}?populate=*`);
    return response.data;
  } catch (error) {
    return error;
  }
});
