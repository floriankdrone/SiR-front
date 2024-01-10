import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const fetchAccounts = async () => {
  try {
    const {
      data: { accounts },
    } = await axios.get("http://localhost:3000/accounts");
    return accounts.map(
      ({
        id,
        email,
        posts,
        donations,
        updated_at: updatedAt,
        deleted,
        created_at: createdAt,
      }) => ({
        id,
        name: email,
        numberOfPosts: posts.length,
        totalDonations: donations.reduce((acc, { price }) => (acc += price), 0),
        updatedAt,
        createdAt,
        isDeleted: deleted,
      })
    );
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const useUserIndex = () => {
  return useQuery({
    queryKey: ["accounts"],
    queryFn: fetchAccounts,
  });
};
