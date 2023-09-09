import axios from "axios";
import * as jwt from "utils/jwt";
import { BASE_URL } from "config/config";

const axiosPublicQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const axiosPrivateQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

axiosPrivateQuery.interceptors.request.use(tokenExchange);

async function tokenExchange(config) {
  config.headers.authorization = `Bearer ${jwt.getPassport()}`;
  return config;
}

export { axiosPublicQuery, axiosPrivateQuery };
