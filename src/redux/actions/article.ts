import { API } from "@/utils/endpoints";
import https from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_ALL_ARTICLE } from "./constants/article";

export const getAllArticles = createAsyncThunk(
  GET_ALL_ARTICLE,
  async (params: string) => {
    try {
      const response = await https.get(
        `${API.ARTICLE.GET_ALL_ARTICLE}?${params}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
