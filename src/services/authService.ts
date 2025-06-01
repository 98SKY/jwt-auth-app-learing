import axios from "axios";

export const loginApi = async (email: string, password: string): Promise<string> => {
  const response = await axios.post("http://localhost:8081/api/login", {
    email,
    password,
  });

  return response.data.token;
};
