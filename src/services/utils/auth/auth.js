import axios from "axios";

import { LoginInstance } from "../../api/axios/axiosForAuth";

export const Authlogin = async (username, password) => {
  try {
      const login = await LoginInstance.post("/users/login", {
          username: username,
          password: password,
      });
      return login;
  } catch (error) {
      console.error("Login Error:", error);
      throw new Error(error.response?.data?.message || "Failed to login.");
  }
};

export const Authregister = async (username, password, FirstName, LastName) => {
  try {
      const register = await LoginInstance.post("/users", {
          username,
          password,
          firstName: FirstName,
          lastName: LastName,
      });
      return register.data; 
  } catch (error) {
      console.error("Registration Error:", error);
      throw new Error(error.response?.data?.message || "Failed to register.");
  }
};
