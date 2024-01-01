import { useMutation, useQueryClient } from "react-query";
import api from "../api";

const deletePost = (postId) => api.delete(`/posts/${postId}`).then(res => res.data)

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(
    deletePost,
    {
      onMutate: (deletingPost) => {
        // get previous post in the cache
        const previousPosts = queryClient.getQueryData(['post']);

        // remove deleting post from the cache (optimistically)
        queryClient.setQueryData(['post'], (oldData) => {
          return oldData.filter(post => post.id !== deletingPost.id);
        });

        // return the previous posts to the context
        return previousPosts;
      },

      onSuccess: () => {
        // if success invalidate data
        queryClient.invalidateQueries(['post'])
      },

      onError: (error, deletingPost, previousPosts) => {
        // revert to the previous state if an error occurred
        queryClient.setQueryData(['post'], previousPosts)
      }
    }
  )
}

export default useDeletePost;