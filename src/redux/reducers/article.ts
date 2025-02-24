import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles } from "../actions/article";
import { ARTICLE_CONTEXT } from "../constant/article";

const article = createSlice({
  name: ARTICLE_CONTEXT,
  initialState: {
    slug: "",
    title: "",
    content: "",
    listArticle: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArticles.fulfilled, (state, action) => {
      const data = action.payload || [];
      state.listArticle = data.map((article: any) => {
        return {
          title: article?.title,
          timeReading: article?.timeReading,
          imageUrl: article?.imageUrl,
          categoryName: article?.categoryName,
          categoryUrl: article?.categoryUrl,
          datePublished: article?.datePublished,
          pathAlias: article?.pathAlias,
          authorUrl: article?.authorUrl,
          authorName: article?.authorName,
          authorAvarta: article?.authorAvarta,
          createdDate: article?.createdDate,
        };
      });
    });
  },
});

export default article.reducer;
