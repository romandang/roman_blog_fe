import { createSlice } from "@reduxjs/toolkit";
import { getAllArticles, getArticlePage } from "../actions/article";
import { ARTICLE_CONTEXT } from "../constant/article";

const article = createSlice({
  name: ARTICLE_CONTEXT,
  initialState: {
    slug: "",
    title: "",
    content: "",
    listArticle: [],
    dataFilter: {},
    mostPopularArticle: [],
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
          author: article?.author,
          createdDate: article?.createdDate,
        };
      });
    });
    builder.addCase(getArticlePage.fulfilled, (state, action) => {
      const data = action.payload || [];
      state.dataFilter = data.dataFilter;
      state.mostPopularArticle = data.mostPopularArticle;
    });
  },
});

export default article.reducer;
