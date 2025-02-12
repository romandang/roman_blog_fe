import { BASE_URL } from "./common";

export const API = {
  BLOG: {
    GET_ALL_BLOG: `${BASE_URL}/api/blogs`,
  },
  COMMON: {
    GET_ALL_CATEGORIES: `${BASE_URL}/api/categories`,
    GET_DATA_HOMEPAGE: `${BASE_URL}/api/pages/homepage`,
    GET_FILTER_CONFIG: `${BASE_URL}/api/article/getFilterConfig`,
  },
  AUTH: {
    SIGN_IN: `${BASE_URL}/api/auth/signIn`,
    GET_USER_INFO: `${BASE_URL}/api/auth/getUserInfo`,
  },
};
