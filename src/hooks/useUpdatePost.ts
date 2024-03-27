import { useMutation, useQueryClient } from "react-query";

import api from "../api";

const updatePost = (newPost: PostData) =>
  api.patch("/posts/" + newPost.id, newPost).then((res) => res.data);

const useUpdatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(updatePost, {
    onMutate: (newPost) => {
      // get old post
      const oldPost = queryClient.getQueryData(["posts", newPost.id]);

      // optimistically update the cache
      queryClient.setQueryData(["post", newPost.id], newPost);

      // return old post to the context
      return oldPost;
    },
    onSuccess: (updatedPost) => {
      // success add the updated post to the cache
      queryClient.invalidateQueries(["post"]);
      queryClient.setQueryData(["post", updatedPost.id], updatedPost);
    },
    onError: (error, newPost, oldPost) => {
      console.log("update-post-hook-error", error);

      // if error happened revert the cache to the previous data
      queryClient.setQueryData(["post", newPost.id], oldPost);
    },
  });
};

export default useUpdatePost;
