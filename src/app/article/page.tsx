import Layout from "@/layout/layout";
import { API } from "@/utils/endpoints";
import ArticleView from "@/views/Article";



export default async function ArticlePage() {
  const data = await fetch(API.COMMON.GET_ARTICLE_PAGE);
  const articlePage = await data.json();
  const articlePageData = articlePage?.response?.data;

  return (
    <Layout headerData={[]}>
      <ArticleView articlePageData={articlePageData} />
    </Layout>
  );
};

