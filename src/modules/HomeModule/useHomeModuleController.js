import { useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  usePostsIndex,
  usePostsCreate,
  usePostDestroy,
} from "../../queries/posts";
import { useDonationsCreate } from "./queries/donations";
import { useProfilesShow } from "../../queries/profiles";
import { useSessionDestroy } from "../../queries/authentication";

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
    mutate: addPost,
    isSuccess: postCreated,
    isError: postNotCreated,
  } = usePostsCreate();

  const { mutateAsync: logout } = useSessionDestroy();
  const { mutateAsync: deletePost } = usePostDestroy();

  const handleLogout = useCallback(async () => {
    await logout();
    navigate("/");
  }, [logout, navigate]);

  const handlePostDeletion = useCallback(
    async (postId) => {
      await deletePost(postId);
      refetch();
    },
    [refetch, deletePost]
  );

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
    [addDonation, refetch, postList]
  );

  useEffect(() => {
    if (fetchProfileError?.response?.status === 404) navigate("/account");
  }, [fetchProfileError, navigate]);

  return {
    donationCreated,
    donationNotCreated,
    handleLogout,
    handlePostCreation,
    handlePostDeletion,
    handlePriceChange,
    isPending,
    postCreated,
    postList,
    postNotCreated,
    profileData,
  };
};
