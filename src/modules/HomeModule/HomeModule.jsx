import { useHomeModuleController } from "./useHomeModuleController";
import { Skeleton } from "@mui/material";
import Post from "./views/Post";
import Form from "./views/Form";
import Feedback from "../../shared_views/Feedback";

function HomeModule() {
  const {
    donationCreated,
    donationNotCreated,
    isPending,
    postList,
    handlePriceChange,
    handlePostCreation,
    postCreated,
    postNotCreated,
  } = useHomeModuleController();

  return (
    <>
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
          postList.map(({ id, text, price, username, updatedAt }, index) => {
            return (
              <Post
                avatarUrl="https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1223671392?k=6&m=1223671392&s=170667a&w=0&h=zP3l7WJinOFaGb2i1F4g8IS2ylw0FlIaa6x3tP9sebU%3D"
                content={text}
                date={updatedAt}
                handleDonate={() => handlePriceChange(index, id, 10)}
                id={id}
                key={`Post${id}`}
                price={price}
                username={username}
              />
            );
          })
        )}
        {postCreated ? (
          <Feedback message={"Post Created"} severity="success" />
        ) : (
          ""
        )}
        {postNotCreated ? <Feedback message={"Failed to create Post"} /> : ""}
        {donationCreated ? <Feedback message={"Donation Created"} /> : ""}
        {donationNotCreated ? (
          <Feedback message={"Failed to create Donation"} />
        ) : (
          ""
        )}
      </div>
      <Form handlePostCreation={handlePostCreation} />
    </>
  );
}

export default HomeModule;
