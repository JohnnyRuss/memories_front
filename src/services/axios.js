import axios from "axios";
import { BASE_URL } from "config/config";

const axiosPublicQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const axiosPrivateQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export { axiosPublicQuery, axiosPrivateQuery };
