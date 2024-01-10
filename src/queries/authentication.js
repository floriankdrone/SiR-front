import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const login = (loginData) =>
  axios.post(
    "http://localhost:3000/login",
    {
      username: loginData.email,
      password: loginData.password,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );

const register = (registerData) =>
  axios
    .post(
      "http://localhost:3000/authentications",
      {
        email: registerData.email,
        password: registerData.password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(() => {
      sessionStorage.setItem("session_start_time", Date.now());
    });

export const useSessionCreate = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useAuthenticationCreate = () => {
  return useMutation({
    mutationFn: register,
  });
};
