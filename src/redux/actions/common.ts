import { API } from "@/utils/endpoints";
import https from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_CATEGORY, GET_FILTER_CONFIG } from "./constants/common";

export const getAllCategories = createAsyncThunk(GET_ALL_CATEGORY, async () => {
  try {
    const response = await https.get(
      `${API.COMMON.GET_ALL_CATEGORIES}?populate=*`,
    );
    return response.data;
  } catch (error) {
    return error;
  }
});

export const getFilterConfig = createAsyncThunk(GET_FILTER_CONFIG, async () => {
  try {
    const response = await https.get(API.COMMON.GET_FILTER_CONFIG);
    return response?.data;
  } catch (error) {
    return error;
  }
});
