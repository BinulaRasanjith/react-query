import { useContext } from "react";

import { Button, DetailsContainer } from "./styled";
import State from "../contexts/State";
import useGetPost from "../hooks/useGetPost";
import useGetUser from "../hooks/useGetUser";
import useDeletePost from "../hooks/useDeletePost";
import { UPDATE_POST } from "../constants";

const Details = () => {
  const { postId, setPostId, setRightSide } = useContext(State);

  const { data: post, isLoading: isPostLoading } = useGetPost(postId);
  const { data: user, isLoading: isUserLoading } = useGetUser(post?.userId);
  const deletePostMutation = useDeletePost();

  const handleUpdateButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setRightSide(UPDATE_POST);
  };

  const handleDeleteButtonClick: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    deletePostMutation.mutateAsync(postId);
    setPostId(null);
  };

  return (
    <DetailsContainer>
      {postId !== null ? (
        // if a post is selected
        <>
          <p>Title: {isPostLoading ? "loading..." : post.title}</p>
          <p>Description: {isPostLoading ? "loading..." : post.description}</p>
          <p>Username: {isUserLoading ? "loading..." : user?.name}</p>
          <p>Email: {isUserLoading ? "loading..." : user?.email}</p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
            }}
          >
            <Button color="darkblue" onClick={handleUpdateButtonClick}>
              Update
            </Button>
            <Button color="darkred" onClick={handleDeleteButtonClick}>
              delete
            </Button>
          </div>
        </>
      ) : (
        // if a post not selected
        <p>Select a post</p>
      )}
    </DetailsContainer>
  );
};

export default Details;
