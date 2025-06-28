import { updateGlobalMessage } from "@/redux/reducers/auth";
import { rootReducer } from "@/redux/reducers/root";
import axios from "axios";
import { getSession } from "next-auth/react";

const https = axios.create();

https.interceptors.request.use(
  async function (config: any) {
    const session: any = await getSession();
    const access_token = session?.accessToken;

    config.headers = {
      Authorization: access_token ? `Bearer ${access_token}` : "",
    };
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    throw error;
  },
);

const handleError = (err: any) => {
  const { response } = err;
  const { message } = response?.data?.response || response?.data;

  if (message) {
    rootReducer().dispatch(updateGlobalMessage(message))
  }
};
https.interceptors.response.use(
  function (response) {
    return response?.data?.response;
  },
  function (error) {
    handleError(error);
    console.log(error);
    throw error;
  },
);

export default https;
