import { useContext, useEffect } from "react"
import { PostContainer } from "./styled"
import State from "../contexts/State"

const Post = ({ post, onClick }) => {
  const { postId } = useContext(State)

  useEffect(() => {
    // console.log(post);
  }, [postId, post])

  return (
    <PostContainer selected={post.id === postId} onClick={onClick}>
      <h1>
        {post.title}
      </h1>
      <p>
        {post.description}
      </p>
    </PostContainer>
  )
}

export default Post