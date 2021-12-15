import axios from "axios";
import { API_REST_ENDPOINT } from "../constant/constant";

const HttpRestApi = axios.create({
  baseURL: API_REST_ENDPOINT,
});

export { HttpRestApi };
