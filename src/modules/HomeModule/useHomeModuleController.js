import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { usePostsIndex, usePostsCreate } from "./queries/posts";
import { useDonationsCreate } from "./queries/donations";
import { useProfilesShow } from "../../queries/profiles";

export const useHomeModuleController = () => {
  const navigate = useNavigate();
  const { data: profileData, error: fetchProfileError } = useProfilesShow({
    retry: false,
  });
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

  useEffect(() => {
    if (fetchProfileError?.response?.status === 404) navigate("/account");
  }, [fetchProfileError]);

  return {
    donationCreated,
    donationNotCreated,
    handlePostCreation,
    handlePriceChange,
    isPending,
    postCreated,
    postList,
    postNotCreated,
    profileData,
  };
};
