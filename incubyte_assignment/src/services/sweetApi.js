import { apiRequest } from "./api";

export const getSweets = (token) =>
  apiRequest("/sweets", { token });

export const searchSweets = (query, token) =>
  apiRequest(`/sweets/search?${query}`, { token });

export const createSweet = (data, token) =>
  apiRequest("/sweets", {
    method: "POST",
    body: data,
    token,
  });

export const purchaseSweet = (id, token) =>
  apiRequest(`/sweets/${id}/purchase`, {
    method: "POST",
    token,
  });

export const restockSweet = (id, amount, token) =>
  apiRequest(`/sweets/${id}/restock`, {
    method: "POST",
    body: { amount },
    token,
  });