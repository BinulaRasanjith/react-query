import { useQuery } from "react-query";
import api from "../api";

const getPost = (postId) => api.get(`/posts/${postId}`).then(res => res.data)

const useGetPost = (postId) => {
  return useQuery(
    ['post', postId],
    () => getPost(postId),
    {
      refetchOnWindowFocus: true,
      staleTime: 0,
      enabled: !!postId,
    }
  )
}

export default useGetPost;