import Layout from "@/layout/layout";
import { ICommon } from "@/redux/reducers/common";
import { PRIVATE_TOKEN } from "@/utils/common";
import { API } from "@/utils/endpoints";
import ArticleView from "@/views/Article";

// TODO remove, this demo shouldn't need to reset the theme.

const ArticlePage = () => {
  return (
    <Layout headerData={[]}>
      <ArticleView />
    </Layout>
  );
};

// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch(`${API.COMMON.GET_ALL_CATEGORIES}`, {
//     headers: {
//       Authorization: `Bearer ${PRIVATE_TOKEN}`,
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//   });

//   const result = await res.json();
//   const listCategory =
//     result?.data?.map((category: any) => ({
//       title: category?.attributes?.title,
//       url: category?.attributes?.slug,
//     })) || [];

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       listCategory,
//     },
//   };
// }

export default ArticlePage;
