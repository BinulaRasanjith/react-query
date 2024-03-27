import { useContext, useEffect } from "react";
import useGetPosts from "../hooks/useGetPosts";
import AddPost from "./AddPost";
import Post from "./Post";
import { PostsContainer } from "./styled";
import State from "../contexts/State";
import { DETAILS } from "../constants";

const Posts = () => {
  const { setRightSide, setPostId } = useContext(State);

  const { data, isLoading } = useGetPosts();

  const handlePostClick = (postId: number) => {
    // set right side state to detail showing and postId
    setRightSide(DETAILS);
    setPostId(postId);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <PostsContainer>
      {!isLoading
        ? data &&
          data.map((post: PostData, index: number) => (
            <Post
              post={post}
              key={index}
              onClick={() => handlePostClick(post.id)}
            />
          ))
        : "Loading..."}

      <AddPost />
    </PostsContainer>
  );
};

export default Posts;
