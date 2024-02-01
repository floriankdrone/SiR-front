import { Skeleton } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Form from "./views/Form";
import Feedback from "../../shared_views/Feedback";
import MenuBar from "../../shared_views/MenuBar";
import Post from "./views/Post";
import { useHomeModuleController } from "./useHomeModuleController";

function HomeModule() {
  const {
    donationCreated,
    donationNotCreated,
    isPending,
    postList,
    handlePriceChange,
    handlePostCreation,
    handlePostDeletion,
    handleLogout,
    postCreated,
    postNotCreated,
    profileData,
  } = useHomeModuleController();

  const location = useLocation();
  const toastMessage = location.state?.toastMessage;

  useEffect(() => {
    window.history.replaceState({ toastMessage: undefined }, "");
  });

  return (
    <>
      {toastMessage ? <Feedback message={toastMessage} /> : ""}
      {postNotCreated ? <Feedback message={"Failed to create Post"} /> : ""}
      {donationCreated ? <Feedback message={"Donation Created"} /> : ""}
      {donationNotCreated ? (
        <Feedback message={"Failed to create Donation"} />
      ) : (
        ""
      )}
      {postCreated ? (
        <Feedback message={"Post Created"} severity="success" />
      ) : (
        ""
      )}
      <MenuBar profileData={profileData} handleLogout={handleLogout} />
      <div style={{ marginBottom: "75px" }}>
        {isPending ? (
          <>
            <Skeleton animation="pulse">
              <Post
                avatarUrl="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU%3D"
                content={"content"}
                date={Date.now()}
                onDonate={() => {}}
                id={1}
                key={"Post1"}
                price={10}
                username={"name"}
              />
            </Skeleton>
          </>
        ) : (
          postList.map(
            ({ id, mine, price, text, updatedAt, username }, index) => {
              return (
                <Post
                  avatarUrl="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU%3D"
                  canDelete={mine}
                  content={text}
                  date={updatedAt}
                  handleDonate={() => handlePriceChange(index, id, 10)}
                  handleDelete={handlePostDeletion}
                  id={id}
                  key={`Post${id}`}
                  price={price}
                  username={username}
                />
              );
            }
          )
        )}
      </div>
      <Form handlePostCreation={handlePostCreation} />
    </>
  );
}

export default HomeModule;
