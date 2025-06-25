import { BASE_URL } from "./common";

export const API = {
  BLOG: {
    GET_ALL_BLOG: `${BASE_URL}/api/blogs`,
  },
  COMMON: {
    GET_ALL_CATEGORIES: `${BASE_URL}/api/categories`,
    GET_DATA_HOMEPAGE: `${BASE_URL}/api/pages/homepage`,
    GET_ARTICLE_PAGE: `${BASE_URL}/api/pages/article`,
    GET_FILTER_CONFIG: `${BASE_URL}/api/article/getFilterConfig`,
    GET_FOOTER: `${BASE_URL}/api/general/getFooter`,
  },
  ARTICLE: {
    GET_ALL_ARTICLE: `${BASE_URL}/api/article/getAllArticle`,
    GET_ARTICLE_BY_SLUG: `${BASE_URL}/api/article/getArticleBySlug`,
    GET_ALL_COMMENT_BY_ARTICLE: `${BASE_URL}/api/article/getAllCommentByArticle`,
  },
  AUTH: {
    SIGN_IN: `${BASE_URL}/api/auth/signIn`,
    GET_USER_INFO: `${BASE_URL}/api/auth/getUserInfo`,
  },
  INTERACTIVE: {
    COMMENT: `${BASE_URL}/api/interactive/comment`,
    REPLY_COMMENT: `${BASE_URL}/api/interactive/replyComment`,
  },
};
