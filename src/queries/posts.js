import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchPosts = async () => {
  const {
    data: { posts },
  } = await axios.get("http://localhost:3000/posts", {
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return (
    posts?.map(
      ({ id, mine, price, text, updated_at: updatedAt, username }) => ({
        id,
        mine,
        price,
        text,
        updatedAt,
        username,
      })
    ) || []
  );
};

const addPost = async ({ content }) => {
  const { data } = await axios.post(
    "http://localhost:3000/posts",
    {
      text: content,
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

const destroyPost = async (postId) => {
  const { data } = await axios.delete(
    `http://localhost:3000/posts/${postId}`,
    {},
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

export const usePostsCreate = () => {
  return useMutation({
    mutationFn: addPost,
  });
};

export const usePostDestroy = () => {
  return useMutation({
    mutationFn: destroyPost,
  });
};

export const usePostsIndex = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
