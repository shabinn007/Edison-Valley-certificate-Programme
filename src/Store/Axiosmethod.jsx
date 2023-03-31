/** @format */

import axios from "axios";

const BASICURL = "https://fine-pear-turtle-tie.cyclic.app/";

export const axiosApi = axios.create({
  baseURL: BASICURL,
  withCredentials: true,
});

axiosApi.interceptors.request.use(function (config) {
  const token = sessionStorage.getItem("token");

  if (token) {
    config.headers["Authorization"] =
      "Token " + sessionStorage.getItem("token");
  } else {
    console.log("error");
  }

  return config;
});
