import { useQuery } from "react-query";
import api from "../api";

const getUsers = () => api.get("/users").then((res) => res.data);

const useGetUsers = () => {
  return useQuery(["user"], () => getUsers(), {
    refetchOnWindowFocus: true,
    staleTime: 0,
  });
};

export default useGetUsers;
