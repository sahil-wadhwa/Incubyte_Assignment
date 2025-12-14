import { apiRequest } from "./api";

export const registerUser = (data) =>
  apiRequest("/auth/register", {
    method: "POST",
    body: data,
  });

export const loginUser = (data) =>
  apiRequest("/auth/login", {
    method: "POST",
    body: data,
  });