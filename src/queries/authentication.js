import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const login = (loginData) =>
  axios
    .post(
      "http://localhost:3000/sessions",
      {
        email: loginData.email,
        password: loginData.password,
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

const logout = () =>
  axios
    .delete(
      "http://localhost:3000/sessions/1337",
      {},
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    )
    .then(() => {
      sessionStorage.removeItem("session_start_time");
    });

export const useSessionCreate = () => {
  return useMutation({
    mutationFn: login,
  });
};

export const useSessionDestroy = () => {
  return useMutation({
    mutationFn: logout,
  });
};

export const useAuthenticationCreate = () => {
  return useMutation({
    mutationFn: register,
  });
};
