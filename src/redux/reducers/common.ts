import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../actions/common";
import { COMMON_CONTEXT } from "../constant/common";

export type ICategory = {
  title: string;
  url?: string;
};

export interface ICommon {
  listCategory: ICategory[];
  homepageData: {
    mainFeatured: {};
    trending: {};
    adbanner: {};
    articles: {};
    recents: {};
    gallerys: {};
    editorPicked: {};
    interesting: {};
    instagramFeatured: {};
  };
}

const initialState: ICommon = {
  listCategory: [],
  homepageData: {
    mainFeatured: {},
    trending: {},
    adbanner: {},
    articles: {},
    recents: {},
    gallerys: {},
    editorPicked: {},
    interesting: {},
    instagramFeatured: {},
  },
};

const common = createSlice({
  name: COMMON_CONTEXT,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllCategories.fulfilled, (state, action) => {
      state.listCategory =
        action.payload?.data?.map((category: any) => ({
          title: category?.attributes?.title,
          url: category?.attributes?.slug,
        })) || [];
    });
  },
});

export default common.reducer;
