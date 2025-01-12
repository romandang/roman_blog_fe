import { updateGlobalMessage } from "@/redux/reducers/auth";
import { rootReducer } from "@/redux/reducers/root";
import axios from "axios";

const https = axios.create();

https.interceptors.request.use(
  function (config: any) {
    const access_token = localStorage.getItem("access_token");

    config.headers = {
      Authorization: access_token ? `Bearer ${access_token}`: "",
    };
    return config;
  },
  function (error) {
    // Làm gì đó với lỗi request
    throw error
  }
);

const handleError = (err: any) => {
  const { response } = err;
  const { message } = response?.data?.response || response?.data;

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
    console.log(error)
    throw error
  }
);

export default https;
