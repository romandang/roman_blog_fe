import { API } from "@/utils/endpoints";
import https from "@/utils/http";
import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  GET_COMMENT_BY_ARTICLE_ID,
  POST_COMMENT,
} from "./constants/interactive";

export const postComment = createAsyncThunk(
  POST_COMMENT,
  async (params: { comment: string; articleId: string }) => {
    try {
      const response = await https.post(`${API.INTERACTIVE.COMMENT}`, params);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const postReplyComment = createAsyncThunk(
  POST_COMMENT,
  async (params: { parentId, comment: string; articleId: string }) => {
    try {
      const response = await https.post(`${API.INTERACTIVE.REPLY_COMMENT}`, params);
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const getCommentByArticleId = createAsyncThunk(
  GET_COMMENT_BY_ARTICLE_ID,
  async (params: { articleId: string }) => {
    try {
      const response = await https.get(
        `${API.ARTICLE.GET_ALL_COMMENT_BY_ARTICLE}/${params.articleId}`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);
