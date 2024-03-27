import { useContext, useEffect, useState } from "react";

import useCreatePost from "../hooks/useCreatePost";
import useGetPost from "../hooks/useGetPost";
import useGetUsers from "../hooks/useGetUsers";
import {
  Button,
  CreatePostFormContainer,
  FormInput,
  FormLabel,
  FormSection,
} from "./styled";
import State from "../contexts/State";
import { CREATE_POST, DETAILS, UPDATE_POST } from "../constants";
import useUpdatePost from "../hooks/useUpdatePost";

const CreatePostForm = () => {
  const { postId, rightSide, setPostId, setRightSide } = useContext(State);
  const { data: post } = useGetPost(postId);
  const { data: users, isLoading } = useGetUsers();
  const createPostMutation = useCreatePost();
  const updatePostMutation = useUpdatePost();

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    userId: "",
  });
  const [errors, setErrors] = useState({
    title: "",
    description: "",
    userId: "",
  });

  useEffect(() => {
    setPostData({
      title: post.title,
      description: post.description,
      userId: String(post.userId),
    });
  }, [post]);

  const handleInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const handleCreatePost: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    const newErrors = {
      title: "",
      description: "",
      userId: "",
    };

    if (!postData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!postData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!postData.userId.trim()) {
      newErrors.userId = "User is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPostData = await createPostMutation.mutateAsync(postData);
    console.log(newPostData);

    setPostId(newPostData.id);
    setRightSide(DETAILS);
  };

  const handleUpdatePost: React.MouseEventHandler<HTMLButtonElement> = async (
    e
  ) => {
    e.preventDefault();

    const newErrors = {
      title: "",
      description: "",
      userId: "",
    };

    if (!postData.title.trim()) {
      newErrors.title = "Title is required";
    }
    if (!postData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!postData.userId.trim()) {
      newErrors.userId = "User is required";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const newPostData = await updatePostMutation.mutateAsync({
      ...postData,
      id: postId,
    });
    console.log(newPostData);

    setPostId(newPostData.id);
    setRightSide(DETAILS);
  };

  return (
    <CreatePostFormContainer>
      <FormSection>
        <FormLabel htmlFor="title">Title</FormLabel>
        <FormInput
          id="title"
          name="title"
          value={postData.title}
          onChange={handleInputChange}
          required
        />
        {errors.title && <p style={{ color: "red" }}>{errors.title}</p>}
      </FormSection>

      <FormSection>
        <FormLabel htmlFor="description">Description</FormLabel>
        <FormInput
          id="description"
          name="description"
          value={postData.description}
          onChange={handleInputChange}
          required
        />
        {errors.description && (
          <p style={{ color: "red" }}>{errors.description}</p>
        )}
      </FormSection>

      <FormSection>
        <FormLabel htmlFor="user">User</FormLabel>
        <select
          id="user"
          name="userId"
          value={postData.userId}
          onChange={handleInputChange}
        >
          <option value="" disabled>
            Select User
          </option>
          {!isLoading &&
            users &&
            users.map((user: User, index: number) => (
              <option key={user.id} value={user.id}>
                {user.name}
              </option>
            ))}
        </select>
        {errors.userId && <p style={{ color: "red" }}>{errors.userId}</p>}
      </FormSection>
      <div style={{ display: "flex", flexDirection: "row-reverse" }}>
        {rightSide === CREATE_POST && (
          <Button color="#4BB543" onClick={handleCreatePost}>
            Create
          </Button>
        )}
        {rightSide === UPDATE_POST && (
          <Button color="darkblue" onClick={handleUpdatePost}>
            Update
          </Button>
        )}
      </div>
    </CreatePostFormContainer>
  );
};

export default CreatePostForm;
