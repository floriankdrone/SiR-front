import { usePostsIndex, usePostsCreate } from "./queries/posts";
import { useDonationsCreate } from "./queries/donations";
import { useCallback } from "react";

export const useHomeModuleController = () => {
  const { isPending, data: postList = [], refetch } = usePostsIndex();
  const {
    mutate: addDonation,
    isSuccess: donationCreated,
    isError: donationNotCreated,
  } = useDonationsCreate();
  const {
    mutateAsync: addPost,
    isSuccess: postCreated,
    isError: postNotCreated,
  } = usePostsCreate();

  const handlePostCreation = useCallback(
    ({ content }) => {
      addPost({ content }, { onSuccess: refetch });
    },
    [addPost, refetch]
  );

  const handlePriceChange = useCallback(
    (index, id, price) => {
      addDonation({ postId: id, price });
      if (postList.at(index)?.id === id) refetch();
    },
    [addDonation, refetch]
  );

  return {
    donationCreated,
    donationNotCreated,
    handlePostCreation,
    handlePriceChange,
    isPending,
    postCreated,
    postList,
    postNotCreated,
  };
};
