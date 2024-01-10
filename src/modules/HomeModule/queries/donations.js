import axios from "axios";
import { useMutation } from "@tanstack/react-query";

const makeDonation = async ({ postId, price }) => {
  try {
    const response = await axios.post("http://localhost:3000/donations", {
      account_id: 1,
      post_id: postId,
      price,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const useDonationsCreate = () => {
  return useMutation({
    mutationFn: makeDonation,
  });
};
