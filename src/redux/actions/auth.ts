import { API } from "@/utils/endpoints";
import https from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_SIGN_IN } from "./constants/auth";

export const signIn = async (data: any) => {
  try {
    const response = await https.post(`${API.SIGN_IN}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};
