import axios from "axios";

export const API = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const setToken = (token) =>
  (API.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "");

const token =
  typeof window !== "undefined" ? localStorage.getItem("token") : null;

setToken(token);
