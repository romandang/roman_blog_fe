import { BASE_URL } from "./common";

export const API = {
  BLOG: {
    GET_ALL_BLOG: `${BASE_URL}/api/blogs`,
  },
  COMMON: {
    GET_ALL_CATEGORIES: `${BASE_URL}/api/categories`,
  },
  SIGN_IN: `${BASE_URL}/api/auth/signIn`
};
