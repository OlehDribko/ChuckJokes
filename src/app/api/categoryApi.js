import { api } from "./api.js";

export const categoryAPI = {
  getCategories: () => api(`/categories`),
};
