import axiosInstance from "./axiosInstance";

export const loginApi = async (username: string, password: string, userType: string): Promise<string> => {
  const response = await axiosInstance.post("auth/login", {
    username,
    password,
    userType
  });

  return response.data.token;
};
