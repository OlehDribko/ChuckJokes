import { api } from "./api.js";

export const jokesAPI = {
  getRandom: () => api(`/random`),
  getByCategory: (category) => api(`/random?category=${category}`),
  getCategories: () => api(`/categories`),
  getBySearchInput: (query) => api(`/search?query=${query}`),
};
