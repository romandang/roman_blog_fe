import { createSlice } from "@reduxjs/toolkit";
import { BLOG_CONTEXT } from "../constant/blog";

const auth = createSlice({
  name: BLOG_CONTEXT,
  initialState: {
    globalMessage: ""
  },
  reducers: {
    updateGlobalMessage: (state, action) => {
      state.globalMessage = action.payload
    }
  }
});

const { updateGlobalMessage } = auth.actions

export {
  updateGlobalMessage
}
export default auth.reducer;
