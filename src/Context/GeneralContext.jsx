import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const GeneralContext = createContext([]);

export const Generalprovider = ({ children }) => {
  const [allReviews, setAllReviews] = useState([]);
  const URL = "https://randomuser.me/api/?gender=female";

  const getData = async () => {
    try {
      const req = await axios.get(URL);
      console.log(req);
      setAllReviews(req.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const data = {
    allReviews: allReviews,
  };
  return (
    <GeneralContext.Provider value={data}>{children}</GeneralContext.Provider>
  );
};
