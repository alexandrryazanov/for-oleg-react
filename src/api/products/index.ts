import api from "../index";

export const getAll = async () => {
  return await api("/products", "GET");
};

export const create = async () => {
  return await api("/products", "POST", false, {});
};
