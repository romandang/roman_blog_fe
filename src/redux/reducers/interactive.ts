import { createSlice } from "@reduxjs/toolkit";
import { getCommentByArticleId, postComment } from "../actions/interactive";
import { INTERACTIVE_CONTEXT } from "../constant/interactive";

const initialState = {
  listComment: [],
};

const auth = createSlice({
  name: INTERACTIVE_CONTEXT,
  initialState,
  reducers: {
    updateListComment: (state, action) => {
      state.listComment = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(postComment.fulfilled, (state, action) => {
      const data = action.payload || [];
      state.listComment = data;
    });
    builder.addCase(postComment.rejected, (state) => {
      state.listComment = [];
    });
    builder.addCase(getCommentByArticleId.fulfilled, (state, action) => {
      state.listComment = action.payload;
    });
    builder.addCase(getCommentByArticleId.rejected, (state) => {
      state.listComment = [];
    });
  },
});

export const { updateListComment } = auth.actions;
export default auth.reducer;
