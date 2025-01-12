import * as lodash from "lodash";

export const generateRandomKey = () => {
  return Math.random().toString(36).substring(7);
};

export const _ = lodash;
