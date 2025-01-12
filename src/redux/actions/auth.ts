import { API } from "@/utils/endpoints";
import https from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_USER_INFO } from "./constants/auth";

export const signIn = async (data: any) => {
  try {
    const response = await https.post(`${API.AUTH.SIGN_IN}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const getUserInfo = createAsyncThunk(AUTH_USER_INFO, async () => {
  try {
    const response = await https.get(`${API.AUTH.GET_USER_INFO}`);
    
    return response.data;
  } catch (error) {
    return Promise.reject(error) ;
  }
});
