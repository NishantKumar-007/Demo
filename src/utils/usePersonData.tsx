import { useEffect, useState } from "react";
import axios from "axios";

const usePersonData = () => {
  const [userDetails, setUserDetails] = useState(null);

  const fetchData = async () => {
    const obj = await axios.get("https://randomuser.me/api");
    const personDetails = await obj.data;
    setUserDetails(personDetails?.results[0]);
  };

  const refreshData = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { userDetails, refreshData };
};
export default usePersonData;
