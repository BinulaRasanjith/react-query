import { useQuery } from "react-query"
import api from "../api";

const getPosts = () => api.get('/posts').then(res => res.data)

const useGetPosts = () => {
  return useQuery(
    ['post'],
    () => getPosts(),
    {
      refetchOnWindowFocus: true,
      staleTime: 0,
    }
  )
};

export default useGetPosts;