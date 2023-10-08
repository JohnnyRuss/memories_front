import axios from "axios";
import * as jwt from "utils/jwt";
import { BASE_URL } from "config/config";
import decode from "jwt-decode";

const axiosPublicQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const axiosPrivateQuery = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

const refresher = axios.create({
  baseURL: `${BASE_URL}/auth/refresh`,
  withCredentials: true,
  method: "POST",
});

axiosPrivateQuery.interceptors.request.use(tokenExchange);

let refreshTokenPromise = null;

async function tokenExchange(config) {
  const token = jwt.getPassport();

  const decodedUser = token ? decode(token) : null;

  if (!decodedUser) return config;

  const exp = decodedUser.exp;
  const isExpired = Math.floor(Date.now() / 1000) > exp;

  if (isExpired) {
    if (!refreshTokenPromise)
      refreshTokenPromise = refresher()
        .then(({ data }) => data.accessToken)
        .catch((err) => {
          if (err.response.status === 401) jwt.removePassport();
          return "";
        })
        .finally(() => (refreshTokenPromise = null));

    refreshTokenPromise.then((token) => {
      jwt.setPassport(token);
      config.headers.authorization = `Bearer ${token}`;
    });
  } else if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  return config;
}

export { axiosPublicQuery, axiosPrivateQuery };
