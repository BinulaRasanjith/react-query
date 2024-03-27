import { useContext } from "react";
import { PostContainer } from "./styled";
import State from "../contexts/State";

interface PostProps {
  post: PostData;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

const Post: React.FC<PostProps> = ({ post, onClick }) => {
  const { postId } = useContext(State);

  return (
    <PostContainer selected={post.id === postId} onClick={onClick}>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
    </PostContainer>
  );
};

export default Post;
