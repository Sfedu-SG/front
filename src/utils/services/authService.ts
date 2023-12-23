import axiosInstance from "../axios.ts";

export const signUp = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const { data } = await axiosInstance.post("/register", { login, password });

  return data;
};

export const signIn = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}) => {
  const { data } = await axiosInstance.post("/auth", { login, password });

  return data;
};
