import axios from "axios";
import { useEffect, useState } from "react";
import Results from "./models/Results";
import User from "./models/User";

const useIterator = (url: string) => {
  const [user, setUser] = useState<Results[]>([]);
  const [userList, setUserList] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getUserData = (): Promise<User> => {
    return axios
      .get(url)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUserData().then((res) => setUser(res.results));
    // setUserList([...userList, user]);
  });

  const next = () => {};

  const previous = () => {};

  return [userList, user, isLoading, next, previous];
};

export default useIterator;
