import { useQuery } from "react-query";
import api from "../api";

const getUser = (userId) => {
  if (userId === undefined) {
    return null;
  }
  return api.get(`/users/${userId}`).then(res => res.data)
}

const useGetUser = (userId, config = {}) => {
  return useQuery(
    ['user', userId],
    () => getUser(userId),
    {
      refetchOnWindowFocus: "always",
      staleTime: 0,
      enabled: !!userId,
    }
  )
}

export default useGetUser;