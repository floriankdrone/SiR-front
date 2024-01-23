import axios from "axios";
import { useMutation, useQuery } from "@tanstack/react-query";

const fetchProfile = async () => {
  const {
    data: { profile },
  } = await axios.get("http://localhost:3000/profile", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return profile;
};

const upsertProfile = async (profileData) => {
  const { data } = await axios.post(
    "http://localhost:3000/profiles",
    {
      username: profileData.username,
    },
    {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  return data;
};

export const useProfilesShow = (options = {}) =>
  useQuery({ queryKey: ["profile"], queryFn: fetchProfile, ...options });

export const useProfilesCreate = () =>
  useMutation({ mutationFn: upsertProfile });
