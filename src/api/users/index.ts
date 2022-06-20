import api from "../index";
import { LS_TOKEN } from "../../constants/global";

export const getAll = async () => {
  return await api("/users", "GET", true);
};

export const create = async () => {
  return await api("/users", "POST", true, { login: "1", password: "2" });
};

export const login = async (login: string, password: string) => {
  const {
    data: { token },
  } = await api("/login", "POST", false, {
    login,
    password,
  });
  localStorage.setItem(LS_TOKEN, token);
};
