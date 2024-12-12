import { updateGlobalMessage } from "@/redux/reducers/auth";
import { rootReducer } from "@/redux/reducers/root";
import axios from "axios";
import { PRIVATE_TOKEN } from "./common";

const https = axios.create();

https.interceptors.request.use(
  function (config: any) {
    // Làm gì đó trước khi request dược gửi đi
    config.headers = {
      Authorization: `Bearer ${PRIVATE_TOKEN}`,
    };
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    return Promise.reject(error);
  }
);

const handleError = (err: any) => {
  const { response } = err;
  const { message } = response?.data?.response;

  console.log(response)
  if (message) {
    rootReducer.dispatch(updateGlobalMessage(message))
  }

}
https.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    handleError(error)
    return Promise.reject(error);
  }
);

export default https;
