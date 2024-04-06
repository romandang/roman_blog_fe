import { blogPost1 } from "@/components/Blog/blog-post.1";
import { blogPost2 } from "@/components/Blog/blog-post.2";
import { blogPost3 } from "@/components/Blog/blog-post.3";
import FeaturedPost from "@/components/FeaturedPost/FeaturedPost";
import Main from "@/components/Main/Main";
import MainFeaturedPost from "@/components/MainFeaturedPost/MainFeaturedPost";
import Sidebar from "@/components/Sidebar/Sidebar";
import { getAllBlogs } from "@/redux/actions/blog";
import { AppDispatch, RootState } from "@/redux/reducers/root";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import XIcon from "@mui/icons-material/X";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as _ from "lodash";
import Preloader from "@/atoms/Preloader";
import { generateRandomKey } from "@/utils/helper";

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: "https://source.unsplash.com/random?wallpapers",
  imageText: "main image description",
  linkText: "Continue reading…",
};

const featuredPosts = [
  {
    title: "Featured post",
    date: "Nov 12",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
  {
    title: "Post title",
    date: "Nov 11",
    description:
      "This is a wider card with supporting text below as a natural lead-in to additional content.",
    image: "https://source.unsplash.com/random?wallpapers",
    imageLabel: "Image Text",
  },
];

const posts = [blogPost1, blogPost2, blogPost3];

const sidebar = {
  title: "About",
  description:
    "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
  archives: [
    { title: "March 2020", url: "#" },
    { title: "February 2020", url: "#" },
    { title: "January 2020", url: "#" },
    { title: "November 1999", url: "#" },
    { title: "October 1999", url: "#" },
    { title: "September 1999", url: "#" },
    { title: "August 1999", url: "#" },
    { title: "July 1999", url: "#" },
    { title: "June 1999", url: "#" },
    { title: "May 1999", url: "#" },
    { title: "April 1999", url: "#" },
  ],
  social: [
    { name: "GitHub", icon: GitHubIcon },
    { name: "X", icon: XIcon },
    { name: "Facebook", icon: FacebookIcon },
  ],
};

const BlogView = () => {
  const { listBlog }: any = useSelector<RootState>((state) => state.blog);
  const dispatch = useDispatch<AppDispatch>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, []);

  useEffect(() => {
    if (!_.isEmpty(listBlog)) {
      setIsLoading(false);
    }
  }, [_.isEmpty(listBlog)]);

  return (
    <main>
      <Preloader isLoading={isLoading} />
      <MainFeaturedPost post={mainFeaturedPost} />
      <Grid container spacing={4}>
        {listBlog?.map((post: any) => (
          <FeaturedPost key={generateRandomKey()} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title='From the firehose' posts={posts} />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>
    </main>
  );
};

export default BlogView;
