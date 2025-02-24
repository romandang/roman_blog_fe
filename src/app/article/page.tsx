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

export default ArticlePage;
