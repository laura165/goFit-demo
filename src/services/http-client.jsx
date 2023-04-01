import axios, {
  AxiosError,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { APP_URL, AXIOS_TIMEOUT_DURATION } from "../config";

export const instance = axios.create({
  baseURL: APP_URL,
  timeout: AXIOS_TIMEOUT_DURATION,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  config.headers["X-Api-Key"] = "v0xqBpfinQgdIXcG8WHdH8FjIbIaRfKAhzjPr4ed";

  return config;
});
