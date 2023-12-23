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
