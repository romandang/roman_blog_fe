import { createSlice } from "@reduxjs/toolkit";
import { BLOG_CONTEXT } from "../constant/blog";
import { getAllBlogs } from "../actions/blog";
import { BASE_URL } from "@/utils/common";

const blog = createSlice({
  name: BLOG_CONTEXT,
  initialState: {
    slug: "",
    title: "",
    content: "",
    listBlog: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBlogs.fulfilled, (state, action) => {
      state.listBlog = action.payload.data.map((blog: any) => {
        return {
          title: blog?.attributes?.title,
          description: blog?.attributes?.description,
          content: blog?.attributes?.content,
          thumbnail: `${BASE_URL}${blog?.attributes?.thumbnail?.data?.attributes?.url}`,
          slug: blog?.attributes?.slug,
        };
      });
    });
  },
});

export default blog.reducer;
