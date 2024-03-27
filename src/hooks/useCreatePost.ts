import { MutationFunction, useMutation, useQueryClient } from "react-query";

import api from "../api";

const createPost: MutationFunction<PostData, NewPostData> = (newPost) =>
  api.post("/posts", newPost).then((res) => res.data);

const useCreatePost = () => {
  const queryClient = useQueryClient();

  return useMutation(createPost, {
    onMutate: (newPost: NewPostData) => {
      // get the previous post before mutating the cache
      const previousPosts = queryClient.getQueryData<PostData[]>(["post"]);

      // add the new post to the cache
      queryClient.setQueryData<PostData[]>(["post"], (prevData = []) => [
        ...prevData,
        { ...newPost, id: Date.now() },
      ]);

      // return previous state to the context
      return previousPosts;
    },

    onSuccess: (newPost: PostData) => {
      // invalidate and refetch the posts after successful create
      queryClient.setQueryData(["post", newPost.id], newPost);
      queryClient.invalidateQueries(["post"]);
    },

    onError: (error, newPost, previousPosts) => {
      // revert to the previous state in the cache
      queryClient.setQueryData(["posts"], previousPosts);
    },
  });
};

export default useCreatePost;
