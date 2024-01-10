import { usePostsIndex, usePostsCreate } from "./queries/posts";
import { useDonationsCreate } from "./queries/donations";
import { useCallback } from "react";

export const useHomeModuleController = () => {
  const { isPending, data: postList = [], refetch } = usePostsIndex();
  const {
    mutate: addDonation,
    isLoading,
    isSuccess: donationCreated,
    isError: donationNotCreated,
  } = useDonationsCreate();
  const {
    mutateAsync: addPost,
    isLoading: creatingPost,
    isSuccess: postCreated,
    isError: postNotCreated,
  } = usePostsCreate();

  const handlePostCreation = useCallback(
    ({ content }) => {
      addPost({ content }, { onSuccess: refetch });
    },
    [addPost, refetch]
  );

  return {
    donationCreated,
    donationNotCreated,
    handlePriceChange: (index, id, price) => {
      addDonation({ postId: id, price });

      if (postList.at(index)?.id === id) refetch();
    },
    handlePostCreation,
    isPending,
    postCreated,
    postList,
    postNotCreated,
  };
};
