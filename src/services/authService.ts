import axiosInstance from "./axiosInstance";

export const loginApi = async (email: string, password: string): Promise<string> => {
  const response = await axiosInstance.post("/login", {
    email,
    password,
  });

  return response.data.token;
};
