import { createSlice } from "@reduxjs/toolkit";
import { getUserInfo } from "../actions/auth";
import { AUTH_CONTEXT } from "../constant/auth";

const initialState = {
  globalMessage: "",
  userInfo: {
      email: "",
      authorName: "",
      firstName: "",
      lastName: "",
      alias: "",
      phoneNumber: "",
      avatar: "",
      isLogin: false,
      isLoaded: false,
  }
}

const auth = createSlice({
  name: AUTH_CONTEXT,
  initialState,
  reducers: {
    updateGlobalMessage: (state, action) => {
      state.globalMessage = action.payload
    },
    signOut: (state) => {
      state.userInfo = {...initialState.userInfo}
    }
  },
  extraReducers(builder) {
    builder.addCase(getUserInfo.fulfilled, (state, action) => {
      const { data } = action.payload?.response || {}
      const { authorName, avatar, email, firstName, lastName, phoneNumber} = data || {};
      state.userInfo.isLogin = true;
      state.userInfo.avatar = avatar;
      state.userInfo.authorName = authorName;
      state.userInfo.email = email;
      state.userInfo.firstName = firstName;
      state.userInfo.lastName = lastName;
      state.userInfo.phoneNumber = phoneNumber;
      state.userInfo.isLoaded = true;
    })
    builder.addCase(getUserInfo.rejected, (state) => {
      state.userInfo.isLoaded = false;
    })
  }
});

export const { updateGlobalMessage, signOut } = auth.actions
export default auth.reducer;
