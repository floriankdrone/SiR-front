import axios from "axios";
import { useQuery, useMutation } from "@tanstack/react-query";

const fetchPosts = async () => {
  try {
    const {
      data: { posts },
    } = await axios.get("http://localhost:3000/posts");
    return posts.map(
      ({ id, username, price, text, updated_at: updatedAt }) => ({
        id,
        username,
        price,
        text,
        updatedAt,
      })
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

const addPost = async ({ content }) => {
  try {
    const response = await axios.post("http://localhost:3000/posts", {
      account_id: 1,
      text: content,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const usePostsCreate = () => {
  return useMutation({
    mutationFn: addPost,
  });
};

export const usePostsIndex = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });
};
